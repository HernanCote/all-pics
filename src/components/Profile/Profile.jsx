import React from 'react';

import {
  Wrapper,
  Avatar,
  Bio,
  Username,
  LogOut,
} from './StyledComponents';

const Profile = ({
  avatar,
  username,
  bio,
  onLogout
}) => (
    <Wrapper>
      <Avatar src={avatar}/>
      <Username>@{username}</Username>
      <Bio>{bio}</Bio>
      <LogOut onClick={onLogout}>Log Out</LogOut>
    </Wrapper>
);

export default Profile;
