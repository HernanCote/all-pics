import styled from 'styled-components/macro';

const Root = styled.div`
  background: #fff;
  height: 23rem;
  border: none;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease-in;

  &:hover {
    transform: scale(1.05);
    z-index: 100;
  }
`;

const PostInfoContainer = styled.div`
  padding: 0.75rem;
  position: relative;
  height: 11rem;
`;

const Image = styled.div`
  min-height: 12rem;
  width: 100%;
  background: url(${({ src }) => src});
  background-size: cover;
`;

const LikesContainer = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
`;

const Timestamp = styled.p`
  color: #7D7D7D;
  font-size: 0.85rem;
  user-select: none;
`;

const Username = styled.p`
  display: inline-block;
  font-weight: bold;
  font-size: 14px;
  margin-top: 1rem;
  cursor: pointer;
  max-width: 16rem;
  user-select: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Description = styled.p`
  font-size: 13px;
  overflow: hidden;
  width: 100%;
  margin-top: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical; 
  line-height: 1.5;
  height: 3.75rem;
`;

const CommentsText = styled.p`
  display: inline-block;
  margin-top: 0.5rem;
  color: #7D7D7D;
  font-size: 13px;
  cursor: pointer;
  user-select: none;

  &:hover {
    text-decoration: underline;
  }
`;

export {
  Root,
  Image,
  Timestamp,
  Username,
  PostInfoContainer,
  LikesContainer,
  Description,
  CommentsText,
};