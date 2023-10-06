import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useUserService from "../../services/userService";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import Spinner from "../UI/Spinner";
import OverflowTip from "../UI/OverflowTip/OverflowTip";

import { ReactComponent as DefaultAvatarLogo } from "../../assets/photo-cover.svg";

import "./userSection.scss";

const UserSection = () => {
  const { id } = useParams();
  const { getUser, clearError, loading } = useUserService();
  const [user, setUser] = useState();

  useEffect(() => {
    clearError();
    getUser(id).then((data) => setUser(data.user));
     // eslint-disable-next-line
  }, [id]);

  if (!user) return;

  const viewUser = (user) => {
    const { name, phone, position, email, photo } = user;

    return (
      <section className="user">
        <div className="container">
          <Box className="user__wrapper">
            <Avatar
              alt={name}
              src={photo}
              sx={{ width: 270, height: 270 }}
            >
              <DefaultAvatarLogo alt={name} style={{ width: 270, height: 270 }}/>
            </Avatar>
            <Box className="user__descr">
              <Box className='user__name'>
                <OverflowTip name={name} />
              </Box>
              <Box className="user__position">{position}</Box>
              <Box className="user__email">
                <OverflowTip name={email} link={`mailto:${email}`}/>
              </Box>
              <Link href={`tel:${phone}`} className="user__phone">
                {phone}
              </Link>
            </Box>
          </Box>
        </div>
      </section>
    );
  };
  const data = viewUser(user);

  const content = loading ? <Spinner /> : data;
  return <>{content}</>;
};

export default UserSection;
