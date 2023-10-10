import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import useUserService from "../../services/userService";
import Spinner from "../UI/Spinner";
import OverflowTip from "../UI/OverflowTip/OverflowTip";
import ToastBar from "../UI/ToastBar";
import { ServerError } from "../../services";
import useMatchMedia from '../../hooks/useMatchMedia';
import ErrorMsg from "../UI/ErrorMsg/ErrorMsg";
import { useDataTeamDispatchContext } from "../../context";

import { ReactComponent as DefaultAvatarLogo } from "../../assets/photo-cover.svg";
import "./userSection.scss";

const UserSection = () => {
  const { id } = useParams();
  const { getUser, loading, error } = useUserService();
  const [user, setUser] = useState({});
  const [msg, setMsg] = useState("");
  const dispatch = useDataTeamDispatchContext(); 

  useEffect(() => {
    async function a() {
      try {
        const res = await getUser(id);
        if (res.success) {
          setUser(res.user);
          dispatch({type: 'select', userName: res.user.name})
        }
      } catch (error) {
        if (error instanceof ServerError) {
          const message = error.getErrorMessage();
          setMsg(message);
        } else setMsg("Failed to sign up. Fuck it, Dude. Let's go bowling...");
      }
    };
    a();
     // eslint-disable-next-line
  }, [id]);

  return (
    <>
      <ViewUser user={user} error={error} loading={loading}/>
      <ToastBar message={msg} setMessage={setMsg} />
    </>
  )
};

const ViewUser = memo(({user, error, loading}) => {
  const {isMobile} = useMatchMedia();
  const { name, phone, position, email, photo } = user;
 
  const phoneLink = isMobile ?
                      <Link href={`tel:${phone}`} className="user__phone">
                        {phone}
                      </Link> :
                      <div className="user__phone">{phone}</div>

  const userDescr = loading ? <Spinner /> : <Box className="user__descr">
                      <Box className='user__name'>
                        <OverflowTip name={name} />
                      </Box>
                      <Box className="user__position">{position}</Box>
                      <Box className="user__email">
                        <OverflowTip name={email} link={`mailto:${email}`}/>
                      </Box>
                      { phoneLink }
</Box>
  return (
    <section className="user">
      <div className="container">
        <Box className="user__wrapper">
          <Avatar
            alt={name || 'user_photo_stub'}
            src={photo}
            sx={{ width: 270, height: 270 }}
          >
            <DefaultAvatarLogo style={{ width: 270, height: 270 }}/>
          </Avatar>
          { error ? <ErrorMsg /> : userDescr }
        </Box>
      </div>
    </section>
  );
});

export default UserSection;
