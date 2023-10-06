import React from 'react'
import Promo from '../Promo/Promo';
import TeamListSection from '../TeamListSection/TeamListSection';
import SignUpSection from '../SignUpSection/SignUpSection';
import { Helmet } from 'react-helmet';

const MainPage = () => {
  return (
    <>
      <Helmet>
        <meta 
          name="description" 
          content="Test assignment for front-end developer (React)" 
        />
        <title>Test assignment from abz.agency</title>
      </Helmet>
      <Promo />
      <TeamListSection />
      <SignUpSection />
    </>
  )
}

export default MainPage