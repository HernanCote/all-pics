import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'

import LoginForm from '../../components/LoginForm/LoginForm';
import { loginAsync } from '../../services/auth';
import { getMediaMinWidth } from '../../utils';

const Root = styled.div`
  height: calc(100vh - 6rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  margin: 5rem auto;

  ${getMediaMinWidth('sm')} {
    max-width: 50vw;
  }
`;

const Login = ({
  history,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [error, setError] = useState(null);

  /**
   * If user is already logged in, redirect to posts page.
   */
  useEffect(() => {
    const userProfile = JSON.parse(localStorage.getItem('user'));
    if (userProfile?.id) {
      history.push('/posts')
    }
  }, [history]);

  useEffect(() => {
    if (username.length === 0 || password.length === 0) {
      setIsButtonDisabled(true);
      return;
    }
    setIsButtonDisabled(false);
  }, [username, password])

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    const request = {
      username,
      password,
    };

    try {
      const {error, data} = await loginAsync(request);
      if(error) {
        throw new Error('Invalid Username or Password');
      }
      localStorage.setItem('user', JSON.stringify(data));
      history.push('/posts');
    }
    catch (err) {
      setError(err.message);
    }
    finally {
      setIsLoading(false);
    }
  };

  return (
    <Root>
      <LoginForm
        isDisabled={isButtonDisabled} 
        setUsername={setUsername}
        setPassword={setPassword}
        handleSubmit={handleLogin}
        isLoading={isLoading}
        error={error}
      />
    </Root>
  )
}

export default Login;
