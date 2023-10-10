import Stack from '@mui/material/Stack';

import Title from '../../UI/Title';
import {ReactComponent as Success} from '../../../assets/success-image.svg';

const Congrats = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{gap: '50px'}}
      >
      <Title text={'User successfully registered'} component='h2' className='heading1' />
      <Success />
    </Stack>
  )
}

export default Congrats