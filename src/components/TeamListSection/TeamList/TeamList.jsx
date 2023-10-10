import { useEffect } from 'react'

import TeamCard from '../TeamCard';
import { ButtonFetch } from '../../UI/Buttons/Buttons';
import Spinner from '../../UI/Spinner';
import ErrorMsg from '../../UI/ErrorMsg';
import useUserService from '../../../services/userService';
import { useDataTeamContext, useDataTeamDispatchContext } from '../../../context';

import './teamList.scss';


const TeamList = () => {
  const {getUsers, loading, error, clearError} = useUserService();
  const {teamData, remoteUpdate} = useDataTeamContext();
  const dispatch = useDataTeamDispatchContext();
  
  const fetchUsers = () => {
    clearError();
    getUsers(teamData.links.next_url)
      .then(onUsersLoaded);
  };

  const onUsersLoaded = (data) => {
    dispatch({
      type: 'add',
      teamData: data
    });
  } 

  useEffect(() => {
    clearError();
    getUsers()
      .then(data => {
        dispatch({
          type: 'update',
          teamData: data
        })
      });
       // eslint-disable-next-line
  }, [remoteUpdate]);

  const viewUsers = (users) => {
    if(users.length === 0 ) return;

    const usersList = users.map(({id, name, email, phone, photo, position}) => {
      return (
        <TeamCard 
          key={id} 
          id={id}
          name={name}
          email={email}
          tel={phone}
          imgSrc={photo}
          position={position}
          />  
      )
    });
    return (
      <ul className="team__list">
        { usersList }
      </ul>
    )
  };

  const content = viewUsers(teamData.users);
  const spinner = loading && !content ? <Spinner /> : null;
  const errorMsg = error && !loading ? <ErrorMsg /> : null;
  const btn = teamData.page < teamData.total_pages ? 
    <ButtonFetch 
      loading={loading}
      label='Show more'
      onClick={fetchUsers}
      className='btn btn__fetch' /> :
    null;
  return (
    <>
        {content}
        {spinner}
        {errorMsg}
        {btn}
    </>
  )
}

export default TeamList;