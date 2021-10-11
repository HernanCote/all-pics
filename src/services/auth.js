import { getComponentData } from '../utils';

const loginAsync = async ({ username, password }) => {
  return getComponentData({
    endpoint: 'login',
    method: 'post',
    settings: {
      data: {
        username, 
        password
      },
    },
  });
};

export {
  loginAsync,
};
