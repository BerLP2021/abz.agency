import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Controller } from "react-hook-form";

import Spinner from "../../Spinner";
import ErrorMsg from "../../ErrorMsg/ErrorMsg";

const InputRadioGroup = ({
  control,
  valErrors,
  posLoading,
  positions,
  posError,
}) => {
  return (
    <FormControl
      sx={{
        "&.MuiFormControl-root": {
          width: '100%',
        },
      }}
    >
      <FormLabel
        error={!!valErrors.position_id?.type}
        sx={{
          height: 25,
          marginBottom: "11px",
          color: "black",
          "&.MuiFormLabel-root.Mui-focused": {
            color: "black",
          },
        }}>
        Select your position
      </FormLabel>
      <Controller
        rules={{ required: "This field is required" }}
        render={({ field }) => (
          <RadioGroup
            {...field}
            sx={{
              gap: "7px",
            }}>
            {posLoading ? (
              <Spinner />
            ) : (
              positions.map((position, i) => (
                <FormControlLabel
                  key={position.id}
                  id={position.name}
                  value={position.id}
                  label={position.name}
                  sx={{
                    height: '26px',
                  }}
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#00BDD3",
                        },
                      }}
                    />
                  }
                />
              ))
            )}
            {posError && <ErrorMsg />}
          </RadioGroup>
        )}
        name="position_id"
        control={control}
      />
    </FormControl>
  );
};

export default InputRadioGroup;
