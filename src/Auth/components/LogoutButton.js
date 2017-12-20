import React from 'react';
import history from '../../_app/history';

const LogoutButton = () => {
    const logout = () => {
      history.push('./');
    };
    return <span onClick={logout}> Log Out </span>;
};

export default LogoutButton;
