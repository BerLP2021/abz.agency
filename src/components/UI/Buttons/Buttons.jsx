
import { LoadingButton } from '@mui/lab';
import Button from '@mui/material/Button';

import './button.scss';

const UiButton = ({title, disabled = false, className = '', handleClick, children, ...rest}) => {
    
    return (
        <Button
            {...rest}
            className={`btn ${className}`} 
            onClick={handleClick} 
            disabled={disabled} 
            variant="contained"
            sx={{
                boxShadow: 'none',
                '&.MuiButton-root:hover': {
                    boxShadow: 'none',
                }
            }}
            >
            {title}
            {children}
        </Button>
    )
}

const ButtonFetch =({label, loading = false, className = '', handleClick = Function.prototype, ...rest}) => {

    return (
        <LoadingButton
            loading={loading}
            loadingIndicator="Loading…"
            className={className}
            onClick={handleClick}
            {...rest}
        >
            {label}
        </LoadingButton>
    )
}

export  {UiButton as Button, ButtonFetch}