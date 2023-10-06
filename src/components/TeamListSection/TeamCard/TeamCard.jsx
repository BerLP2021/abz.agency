import OverflowTip from '../../UI/OverflowTip/OverflowTip';
import Avatar from '@mui/material/Avatar';

import {ReactComponent as DefaultAvatarLogo} from '../../../assets/photo-cover.svg';
// import defaultAvatarLogo from '../../../assets/photo-cover.png';

import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

import './teamcard.scss';

const TeamCard = ({name, id,  position, email, tel, imgSrc}) => {
  console.log('TeamCard')
  return (
    <li className='card'>
      <Box className="card__content">
        <Link to={`/users/${id}`}>
          <Avatar
            alt={name}
            src={imgSrc}
            sx={{ width: 70, height: 70 }}
          >
            <DefaultAvatarLogo alt={name} style={{ width: 70, height: 70 }}/>
          </Avatar>
        </Link>
        <Box className='card__name'>
          <OverflowTip name={name} link={`/users/${id}`}/>
        </Box>
        <Box className="card__descr">
          <Box className="card__position">{position}</Box>
          <Box className="card__email">
            <OverflowTip name={email} link={`mailto:${email}`}/>
          </Box>
          <a href={`tel:${tel}`} className="card__phone">{tel}</a>
        </Box>
      </Box>
    </li>
  )
}

export default TeamCard