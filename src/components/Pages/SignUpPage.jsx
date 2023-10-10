import { Helmet } from 'react-helmet';

import {SignUp} from '../SignUpSection';

const SignUpPage = () => {
  return (
    <>
      <Helmet>
        <meta 
          name="description" 
          content="Test assignment for front-end developer (React). Working with POST request. Single page with sign up form." 
        />
        <title>Sign up</title>
        <meta name="title" content="Sign up" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abz-agency-woad.vercel.app/" />
        <meta property="og:title" content="Sign up" />
        <meta property="og:description" content="Test assignment for front-end developer (React). Working with POST request. Single page with sign up form." />
        <meta property="og:image" content="../../assets/Screens_OGT/Signup.webp" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://abz-agency-woad.vercel.app/" />
        <meta property="twitter:title" content="Sign up" />
        <meta property="twitter:description" content="Test assignment for front-end developer (React). Working with POST request. Single page with sign up form." />
        <meta property="twitter:image" content="../../assets/Screens_OGT/Signup.webp" />
      </Helmet>
      <div className="container" style={{marginBlock: '50px'}}>
        <SignUp />
      </div> 
    </>
  )
}

export default SignUpPage