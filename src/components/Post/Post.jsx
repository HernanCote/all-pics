import React, { useState } from 'react';
import formatDistance from 'date-fns/formatDistance';

import Likes from '../Likes';

import {
  Root,
  Image,
  PostInfoContainer,
  LikesContainer,
  Timestamp,
  Username,
  Description,
  CommentsText,
} from './StyledComponents';

const Post = ({
  image,
  createdAt,
  likes,
  author,
  comments,
  text,
}) => {
  const [postLikes, setPostLikes] = useState(likes); 

  return (
    <Root>
      <Image src={image} alt="image"/>
      <PostInfoContainer>
        <Timestamp>{formatDistance(new Date(createdAt), new Date(), { addSuffix: true })}</Timestamp>
        <LikesContainer onClick={() => setPostLikes(prevCount => prevCount + 1)}>
          <Likes likes={postLikes}/>
        </LikesContainer>
        <Username>@{author?.username}</Username>
        <Description>{text}</Description>
        <CommentsText>Comments ({comments?.length})</CommentsText>
      </PostInfoContainer>
    </Root>
  );
}

Post.defaultProps = {
  image: 'https://source.unsplash.com/user/erondu',
  createdAt: '1973-01-01T18:25:43.511Z',
  likes: 0,
  username: 'nouser',
  totalComments: 0,
  description: 'Lorem ipsum dolor ametLorem ipsum dolor ametLorem ipsum dolor ametLorem ipsum dolor ametLorem ipsum dolor ametLorem ipsum dolor ametLorem ipsum dolor ametLorem ipsum dolor ametLorem ipsum dolor ametLorem ipsum dolor amet',
};

export default Post;
