import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { useDataTeamDispatchContext } from "../../../context";
import { useUserService, ServerError } from "../../../services";
import {
  InputText,
  InputPhone,
  InputRadioGroup,
  InputFile,
} from "../../UI/Inputs";
import { ButtonFetch } from "../../UI/Buttons";
import ToastBar from "../../UI/ToastBar";

import "./form.scss";

const Form = ({ positions, loading, error, setSayCongrats }) => {
  const [msg, setMsg] = useState("");
  const dispatch = useDataTeamDispatchContext();
  const { getToken, postUser } = useUserService();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
    register,
    resetField,
    setError,
    setValue
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position_id: "",
    },
    mode: "all",
  });

  const formRef = useRef();

  const submit = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: false, bubbles: true })
      );
    }
  };

  const throwServerValidMessage = async (res) => {
    const status = res.getStatus();
    const message = res.getErrorMessage();
    switch (status) {
      case 401:
        setMsg("Token problem. Please try again");
        break;
      case 409:
        setError("email", { type: "custom", message });
        setError("phone", { type: "custom", message });
        break;
      case 422:
        for (let [key, value] of Object.entries(message)) {
          if (Array.isArray(value) && value.length > 0) {
            setError(key, {
              type: "custom",
              message: value.join(" "),
            });
          } else
            setError(key, {
              type: "custom",
              message: value,
            });
        }
        break;
      default:
        setMsg("Unknown error");
    }
  };

  const onPostUserSuccess = () => {
    dispatch({
      type: "remote",
    });
    reset({
      name: "",
      email: "",
      phone: "",
      position_id: "",
    });
    resetField("avatar");
    setSayCongrats(true);
  };

  const onSubmit = async (data) => {
    
    const formData = objectToFormData(data);
    let token;

    try {
      const tokenObj = await getToken();
      token = tokenObj.token;
    } catch (error) {
      setMsg("Failed to get token. Please try again");
      return;
    }

    if (token) {
      try {
        const res = await postUser(formData, token);
        if (res.success) {
          onPostUserSuccess();
        }
      } catch (error) {
        if (error instanceof ServerError) {
          await throwServerValidMessage(error);
        } else {
          setMsg("Failed to sign up. Fuck it, Dude. Let's go bowling...");
        }
      }
    }
  };

  const objectToFormData = (obj) => {
    const formData = new FormData();
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (key === "phone") {
          formData.append(key, obj[key].replace(/[\s()-]/g, ""));
        } else if (key === "email") {
          formData.append(key, obj[key].toLowerCase());
        } else if (key === "photo" && obj[key] instanceof FileList) {
          const file = Array.from(obj[key]);
          if (file.length > 0) {
            formData.append("photo", file[0]);
          }
        } else {
          formData.append(key, obj[key]);
        }
      }
    }
    return formData;
  };

  useEffect(() => {
    if(positions.length) {
      setValue('position_id', positions[0].id); 
    }
  }, [setValue, positions]);

  return (
    <div className="form__wrapper ">
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <InputText
          rules={{
            required: "This field is required",
            minLength: {
              value: 2,
              message: "This field must exceed 2 characters",
            },
            maxLength: {
              value: 60,
              message: "This field shouldn`t exceed 60 characters",
            },
          }}
          control={control}
          errors={errors}
          inputName="name"
          label="Your name"
        />

        <InputText
          rules={{
            required: "This field is required",
            pattern: {
               // eslint-disable-next-line
              value: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i,
              message: "Wrong email structure",
            },
            minLength: {
              value: 2,
              message: "This field must exceed 2 characters",
            },
            maxLength: {
              value: 100,
              message: "This field shouldn`t exceed 100 characters",
            },
          }}
          control={control}
          errors={errors}
          inputName="email"
          label="Email"
        />

        <InputPhone control={control} errors={errors} />

        <InputRadioGroup
          control={control}
          valErrors={errors}
          posLoading={loading}
          positions={positions}
          posError={error}
        />

        <InputFile register={register} errors={errors} />

        <ButtonFetch
          label="Sign up"
          handleClick={submit}
          className="btn btn__signup"
          disabled={!isValid || !!Object.entries(errors).length}
          loading={isSubmitting}
        />
      </form>
      <ToastBar message={msg} setMessage={setMsg} />
    </div>
  );
};

export default Form;
