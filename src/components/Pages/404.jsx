import { Link } from 'react-router-dom';
import {styled} from '@mui/material/styles';
import { Helmet } from 'react-helmet';

import Title from '../UI/Title';
import { Box } from '@mui/material';
import errorImg from '../../assets/background/404.gif';

const Page404 = () => {
  const Wrapper = styled("div")`
    position: relative;
    height: calc(100vh - 60px);
    overflow-x: hidden;
    margin: 0 auto;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;
  
  return (
    <>
      <Helmet>
        <meta 
          name="description" 
          content="Test assignment for front-end developer (React). Page not found" 
        />
        <title>404</title>
      </Helmet>
      <div className="container">
        <Wrapper>
          <img src={errorImg} style={{position: 'absolute', height: 'calc(100vh - 60px)'}} alt="error404" />
          <Box sx={{mixBlendMode: 'overlay', color: '#F4E041'}}>
            <Title text="Fuck it, Dude. Let's go bowling." component='h2' className='heading1'/>
            <Title text="Page doesn't exist" component='h1' className='heading1'/>
            <Link style={{textDecoration: 'underlined', color: 'currentcolor', marginTop: '50px', display: 'block'}} to='/'>Back to <span>Main page</span></Link>
          </Box>
        </Wrapper>
      </div>
    </>
  )
}

export default Page404;