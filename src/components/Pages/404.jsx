import { Link } from 'react-router-dom';
import {styled} from '@mui/material/styles';
import { Box } from '@mui/material';
import { Helmet } from 'react-helmet';

import Title from '../UI/Title';
import errorVideo from '../../assets/background/404.mp4';
import errorVideo480p from '../../assets/background/404_480p.mp4';
import errorVideo360p from '../../assets/background/404_360p.mp4';
import useMatchMedia from '../../hooks/useMatchMedia';

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

const VideoBackground = () => {

  const {isMobile, isTablet} = useMatchMedia();

  const VideoBlock = styled('div')`
    position: absolute;
    height: ${isMobile ? '50%' : '100%'}; 
    width: 100%;
    overflow: hidden;
    & video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1; 
    }
  `
  return (
    <VideoBlock>
      <video autoPlay loop muted className="video">
        <source 
          src={isMobile ? errorVideo360p : 
              isTablet ? errorVideo480p : errorVideo} 
          type="video/mp4" />
      </video>
    </VideoBlock>
  );
}

const Page404 = () => {
  
  return (
    <>
      <Helmet>
        <meta 
          name="description" 
          content="Test assignment for front-end developer (React). Page not found" 
        />
        <title>404</title>
      </Helmet>
        <Wrapper>
          <VideoBackground />
          <Box sx={{mixBlendMode: 'overlay', color: '#F4E041'}}>
            <Title text="Page doesn't exist" component='h1' className='heading1'/>
            <Title text="Fuck it, Dude. Let's go bowling." component='h2' className='heading1'/>
            <Link style={{textDecoration: 'underlined', color: 'currentcolor', marginTop: '50px', display: 'block'}} to='/'>Back to <span>Main page</span></Link>
          </Box>
        
        </Wrapper>
    </>
  )
}

export default Page404;