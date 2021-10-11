import React from 'react';

import {
  Wrapper,
  Input,
  SearchIcon
} from './StyledComponents';

const SearchBar = ({
  onSearch
}) => {
  return (
    <Wrapper>
      <SearchIcon />
      <Input 
        onChange={onSearch} 
        type="text" 
        placeholder="Search"
      />
    </Wrapper>
  );
}

export default SearchBar;
