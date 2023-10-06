import { Helmet } from 'react-helmet';

import UserSection from "../UserSection"

const UserPage = () => {
  return (
    <>
      <Helmet>
        <meta 
          name="description" 
          content={`Test assignment for front-end developer (React). Single page of ${'name'}`} 
        />
        <title>User {'name'}</title>
      </Helmet>
      <UserSection />
    </>
  )
}

export default UserPage