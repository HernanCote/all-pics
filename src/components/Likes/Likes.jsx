import React from 'react'

import {
  Root,
  HeartIcon,
  Count,
} from './StyledComponents';

const Likes = ({
  likes,
}) => (
    <Root>
      <HeartIcon />
      <Count>{likes}</Count>
    </Root>
  );

export default Likes
