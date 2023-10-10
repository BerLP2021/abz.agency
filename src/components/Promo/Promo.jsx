import Link from '@mui/material/Link';
import { Button } from '../UI/Buttons';
import Title from '../UI/Title';

import './promo.scss';

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__wrapper">
          <Title 
            text="Test assignment for front-end developer" 
            component='h1' 
            className='heading1 promo__title'/>
          <p className="promo__descr">
            What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
          </p>
            <Link href='#signup'>
              <Button className='promo__btn' title='Sign up' />
            </Link>
        </div>
      </div>
    </section>
  )
}

export default Promo