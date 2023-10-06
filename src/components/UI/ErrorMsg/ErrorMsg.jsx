import {styled} from '@mui/material/styles';
import {ReactComponent as ErrorImg} from '../../../assets/hurt_script.svg';

const Wrapper = styled("div")`
  width: 100%;
  margin: 0 auto;
  text-align: center;    
`;

const ErrorMsg = ({children}) => {
  return (
    <>
      <Wrapper>
        <ErrorImg alt='error' style={{display: 'block', margin: '0 auto 20px', width: '400px', height: 'auto'}}/>
        {children}
      </Wrapper>
    </>
  )
}

export default ErrorMsg