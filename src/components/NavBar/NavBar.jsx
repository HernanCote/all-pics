import React from 'react'

import {
  Root,
  UserContainer,
  LogoContainer,
  LightningIcon,
  UserIcon,
  LogoText,
} from './StyledComponents';

const NavBar = () => (
  <Root>
    <LogoContainer to="/">
        <LightningIcon/> 
        <LogoText>All Pics</LogoText>
    </LogoContainer>
    <UserContainer to="/profile">
        <UserIcon/>
    </UserContainer>
    
  </Root>
);

export default NavBar;
