import styled from 'styled-components/macro';

import { BiSearch } from 'react-icons/bi';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 2.25rem;
`;

const SearchIcon = styled(BiSearch)`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  width: 1.25rem;
  height: 1.25rem;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 2px 1.5rem 2px 2rem;
  outline: 0;
  background-color: #fafafa;

  &:hover, &:focus {
    background-color: #FFF;
  }
`;

export {
  Input,
  Wrapper,
  SearchIcon,
};