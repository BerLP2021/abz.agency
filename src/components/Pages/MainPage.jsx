import { Helmet } from 'react-helmet';

import Promo from '../Promo/Promo';
import TeamListSection from '../TeamListSection/TeamListSection';
import SignUpSection from '../SignUpSection/SignUpSection';

const MainPage = () => {
  return (
    <>
      <Helmet>
        <meta 
          name="description" 
          content="Test assignment for front-end developer (React)" 
        />
        <title>Test assignment from abz.agency</title>
        <meta name="title" content="Test assignment from abz.agency" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abz-agency-woad.vercel.app/" />
        <meta property="og:title" content="Test assignment from abz.agency" />
        <meta property="og:description" content="Test assignment for front-end developer (React)" />
        <meta property="og:image" content="../../assets/Screens_OGT/Main.webp" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://abz-agency-woad.vercel.app/" />
        <meta property="twitter:title" content="Test assignment from abz.agency" />
        <meta property="twitter:description" content="Test assignment for front-end developer (React)" />
        <meta property="twitter:image" content="../../assets/Screens_OGT/Main.webp" />
      </Helmet>
      <Promo />
      <TeamListSection />
      <SignUpSection />
    </>
  )
}

export default MainPage