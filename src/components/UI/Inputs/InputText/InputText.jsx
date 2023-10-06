import TextField from '@mui/material/TextField';
import { Controller } from "react-hook-form";

const InputText = ({rules, control, errors, inputName, label}) => {
    return (
        <Controller
            rules={rules}
            render={({ field }) => (
                <TextField
                    {...field}
                    variant="outlined"
                    fullWidth 
                    autoComplete='off'
                    error={!!errors[inputName]?.type}
                    label={label}
                    className='input_stand'
                    sx={{
                        '& .MuiInputBase-input': {
                            padding: '14px 16px',
                            height: '54px',

                            boxSizing: 'border-box'
                        },
                        '& .MuiInputLabel-outlined': {
                            paddingLeft: '3px'
                        },
                        '& .MuiInputLabel-root': {
                            color: '#7E7E7E',
                            '&.Mui-focused': {
                                color: '#7E7E7E',
                            },
                            '&.Mui-error': {
                                color: 'error.main',
                            }
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#D0CFCF',
                        },
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused': {
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'black',
                                }
                            },
                            '&.Mui-error': {
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'error.main',
                                    borderWidth: '2px'
                                }
                            }
                        },
                        '& .MuiFormHelperText-root': {
                            fontSize: '12px',
                            lineHeight: '14px',
                            marginTop: '4px',
                            marginLeft: '16px',
                            marginRight: '0',
                        }
                    }}
                    helperText={errors[inputName]?.type ? errors[inputName]?.message : " "}
                />
            )}
            name={inputName}
            control={control}
        />
    )
}

export default InputText