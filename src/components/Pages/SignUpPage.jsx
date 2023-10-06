import { Helmet } from 'react-helmet';

import SignUpSection from '../SignUpSection';

const SignUpPage = () => {
  return (
    <>
      <Helmet>
        <meta 
          name="description" 
          content="Test assignment for front-end developer (React). Working with POST request. Single page with sign up form." 
        />
        <title>Sign up</title>
      </Helmet>
      <SignUpSection />    
    </>
  )
}

export default SignUpPage