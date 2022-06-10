import React from 'react';
import {useNavigate} from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      this is profile page<br/>
      <button onClick={() => useNavigate('/about')}>Go to About</button>
    </div>
  );
};

export default Profile;