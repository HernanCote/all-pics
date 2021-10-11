import styled from 'styled-components/macro';
import { AiFillHeart } from 'react-icons/ai';

const Root = styled.div`
  color: #FFF;
  background-color: #d64b50;
  height: 1.75rem;
  max-width: 3rem;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.2rem;
  cursor: pointer;
  transition: transform 0.2s;

  &:active {
    transform: scale(1.1);
  }
`;

const HeartIcon = styled(AiFillHeart)`
  font-size: 1rem;
  margin-right: 0.15rem;
`

const Count = styled.p`
  user-select: none;
  font-size: 0.75rem;
`;

export {
  Root,
  HeartIcon,
  Count,
};