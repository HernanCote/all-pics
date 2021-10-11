import React from 'react'
import Post from '../Post';

import {
  Container
} from './StyledComponents';

const PostList = ({
  posts,
}) => {
  console.log(posts);
  return (
  <Container>
  {posts.map((post, idx) => (
    <Post key={idx} {...post}/>
  ))}
  </Container>
)};


export default PostList
