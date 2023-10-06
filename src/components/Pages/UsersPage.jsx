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