import { Helmet } from 'react-helmet';

import UserSection from "../UserSection"
import { useDataTeamContext } from '../../context';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

const UserPage = () => {
  const {userName} = useDataTeamContext();
  return (
    <>
      <Helmet>
        <meta 
          name="description" 
          content={`Test assignment for front-end developer (React). Single page of ${userName}`} 
        />
        <meta name="title" content={`User ${userName}`} />
        <title>{`User ${userName}`}</title>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abz-agency-woad.vercel.app/" />
        <meta property="og:title" content={`User ${userName}`} />
        <meta property="og:description" content={`Test assignment for front-end developer (React). Single page of ${userName}`} />
        <meta property="og:image" content="../../assets/Screens_OGT/User.webp" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://abz-agency-woad.vercel.app/" />
        <meta property="twitter:title" content={`User ${userName}`} />
        <meta property="twitter:description" content={`Test assignment for front-end developer (React). Single page of ${userName}`} />
        <meta property="twitter:image" content="../../assets/Screens_OGT/User.webp" />

      </Helmet>
      <ErrorBoundary>
        <UserSection />
      </ErrorBoundary>
    </>
  )
}

export default UserPage