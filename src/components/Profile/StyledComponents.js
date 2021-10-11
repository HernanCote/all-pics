import styled from 'styled-components/macro';
import { getMediaMinWidth } from '../../utils/styles';

const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Avatar = styled.div`
  background: url(${({ src }) => src});
  background-size: contain;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;

  ${getMediaMinWidth('sm')} {
    width: 10rem;
    height: 10rem;
  }
`;

const Username = styled.p`
  text-align: center;
  font-weight: bold;
  margin-top: 2rem;
`;

const Bio = styled.p`
  margin-top: 2rem;
  text-align: center;
  max-width: 20rem;

  ${getMediaMinWidth('sm')} {
    max-width: 25rem;
  }
`;

const LogOut = styled.button`
  margin-top: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  cursor: pointer;
  background: #d64b50;
  color: #FFF;
  border-radius: 3px;
  transition: transform 0.2s ease-out;
  

  &:active {
    transform: scale(1.05);
  }
`;

export {
  Wrapper,
  Avatar,
  Bio,
  Username,
  LogOut,
};