import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';

import NavBar from './components/NavBar'

import Posts from './pages/Posts';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';


const ContentContainer = styled.main`
  width: 100%;
  padding: 1rem;
`;

const App = () => { 
  const location = useLocation();
  return (
    <>
      <NavBar />
      <ContentContainer>
        <Switch
          location={location}
          key={location.pathname}
        >
          <Route path="/login" component={Login} />
          <Route path="/posts" component={Posts} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/" exact component={Posts} />
        </Switch>
      </ContentContainer>
    </>
  );
};

export default App;
