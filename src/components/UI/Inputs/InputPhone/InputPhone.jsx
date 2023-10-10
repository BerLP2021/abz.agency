import { Controller } from "react-hook-form";
import InputMask from "react-input-mask";
import TextField from "@mui/material/TextField";

const InputPhone = ({ errors, control }) => {
  return (
    <Controller
      rules={{
        required: "This field is required",
        minLength: {
          value: 19,
          message: "Follow the template: +38 (XXX) XXX - XX - XX",
        },
      }}
      render={({ field: { onChange, value } }) => (
        <InputMask
          value={value}
          onChange={onChange}
          mask="+38 (099) 999-99-99"
          maskChar={null}>
          {(inputProps) => (
            <TextField
              variant="outlined"
              fullWidth
              autoComplete="off"
              {...inputProps}
              error={!!errors.phone?.type}
              type="tel"
              label="Phone"
              sx={{
                "& .MuiInputBase-input": {
                  padding: "14px 16px",
                  height: "54px",
                  boxSizing: "border-box",
                },
                "& .MuiInputLabel-outlined": {
                  paddingLeft: "3px",
                },
                "& .MuiInputLabel-root": {
                  color: "#7E7E7E",
                  "&.Mui-focused": {
                    color: "#7E7E7E",
                  },
                  "&.Mui-error": {
                    color: "error.main",
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#D0CFCF",
                },
                "& .MuiFormHelperText-root": {
                  color: "#7E7E7E",
                  marginTop: "4px",
                  marginLeft: "16px",
                  marginRight: "0",
                  "&.Mui-error": {
                    color: "error.main",
                  },
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black",
                    },
                  },
                  "&.Mui-error": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "error.main",
                      borderWidth: "2px",
                    },
                  },
                },
              }}
              helperText={
                errors.phone?.type
                  ? errors.phone?.message
                  : "+38 (XXX) XXX - XX - XX"
              }
              className="input_last"
            />
          )}
        </InputMask>
      )}
      name="phone"
      control={control}
    />
  );
};

export default InputPhone;
