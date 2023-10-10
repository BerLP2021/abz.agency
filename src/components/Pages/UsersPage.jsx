import { Helmet } from 'react-helmet';

import TeamList from '../TeamListSection/TeamList';
import Title from '../UI/Title';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

const UsersPage = () => {
  return (
    <>
      <Helmet>
        <meta 
          name="description" 
          content="Test assignment for front-end developer (React). Working with GET request. Single page with list of users." 
        />
        <title>List of users</title>
        <meta name="title" content="List of users" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abz-agency-woad.vercel.app/" />
        <meta property="og:title" content="List of users" />
        <meta property="og:description" content="Test assignment for front-end developer (React). Working with GET request. Single page with list of users." />
        <meta property="og:image" content="../../assets/Screens_OGT/Users.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://abz-agency-woad.vercel.app/" />
        <meta property="twitter:title" content="List of users" />
        <meta property="twitter:description" content="Test assignment for front-end developer (React). Working with GET request. Single page with list of users." />
        <meta property="twitter:image" content="../../assets/Screens_OGT/Users.jpg" />
      </Helmet>
      <div className="container" style={{marginBottom: '50px'}}>
        <Title text='Working with GET request' component='h1' className='heading1 page-title'/>
        <ErrorBoundary>
          <TeamList/>
        </ErrorBoundary>
      </div>
    </>
  )
}

export default UsersPage