import { getComponentData } from '../utils';

const getPostsAsync = async () => {
  return await getComponentData({
    endpoint: 'posts',
  });
};

export {
  getPostsAsync,
};