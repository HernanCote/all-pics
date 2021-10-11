import styled from 'styled-components/macro';
import { Link as BaseLink } from 'react-router-dom';

import { BsFillLightningFill as BaseLightningIcon } from 'react-icons/bs';
import { BiUserCircle as BaseUserIcon } from 'react-icons/bi';

const Root = styled.nav`
  height: 4rem;
  width: 100vw;
  background-color: #EFEFEF;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
`;

const LogoContainer = styled(BaseLink)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
  justify-self: flex-start;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: rgba(0, 0, 0, 1);
  }
`;


const LogoText = styled.p`
  font-size: 1.5rem;
`;

const UserContainer = styled(BaseLink)`
  text-decoration: none;
  margin-left: auto;
  cursor: pointer;
`;

const LightningIcon = styled(BaseLightningIcon)`
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
`;

const UserIcon = styled(BaseUserIcon)`
  color: rgba(0, 0, 0, 0.7);
  width: 2rem;
  height: 2rem;
  transition: color 0.2s;

  &:hover {
    color: rgba(0, 0, 0, 1);
  }
`;

export {
  Root,
  LogoContainer,
  UserContainer,
  LightningIcon,
  UserIcon,
  LogoText,
};