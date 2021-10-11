import React, { useEffect, useState } from 'react'
import Profile from '../../components/Profile';

const UserProfile = ({
  history,
}) =>  {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const userProfile = JSON.parse(localStorage.getItem('user'));  
    if (!userProfile?.id) {
      history.push('/login');
    }
    setProfile(userProfile);
  }, [history])
  
  const handleLogout = () => {
    if (localStorage.getItem('user')) {
      localStorage.removeItem('user');
      history.push('/login');
    }
  };

  return (
    <Profile 
      onLogout={handleLogout}
      {...profile}
    />
  );
};

export default UserProfile;
