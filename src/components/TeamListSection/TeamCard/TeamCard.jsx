import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

import OverflowTip from '../../UI/OverflowTip/OverflowTip';
import useMatchMedia from '../../../hooks/useMatchMedia';

import {ReactComponent as DefaultAvatarLogo} from '../../../assets/photo-cover.svg';
import './teamcard.scss';

const TeamCard = ({name, id,  position, email, tel, imgSrc}) => {

  const {isMobile} = useMatchMedia();
  
  const phoneLink = isMobile ?
                      <a href={`tel:${tel}`} className="card__phone">{tel}</a> :
                      <div className="card__phone">{tel}</div>

  return (
    <li className='card'>
      <Box className="card__content">
        <Link to={`/users/${id}`}>
          <Avatar
            alt={name}
            src={imgSrc}
            sx={{ width: 70, height: 70 }}
          >
            <DefaultAvatarLogo style={{ width: 70, height: 70 }}/>
          </Avatar>
        </Link>
        <Box className='card__name'>
          <OverflowTip name={name} link={`/users/${id}`} />
        </Box>
        <Box className="card__descr">
          <Box className="card__position">{position}</Box>
          <Box className="card__email">
            <OverflowTip name={email} link={isMobile ? `mailto:${email}` : null}/>
          </Box>
          { phoneLink }
        </Box>
      </Box>
    </li>
  )
}

export default TeamCard