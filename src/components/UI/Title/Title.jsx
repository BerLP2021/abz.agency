import { StyledEngineProvider, Typography } from '@mui/material';
import './title.scss';

const Title = ({text, component='h2', ...rest}) => {
  return (
    <StyledEngineProvider injectFirst>
      <Typography 
        variant={component} 
        component={component}  
        {...rest}
      >
        {text}
      </Typography>
    </StyledEngineProvider>
  )
}

export default Title