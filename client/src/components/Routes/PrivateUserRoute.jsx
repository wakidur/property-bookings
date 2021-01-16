/* eslint-disable no-undef */
/* eslint-disable no-confusing-arrow */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { UsersDB } from '../../utilities/dataStore';

const PrivateUserRoute = ({ component: Component, ...rest }) => {
  const userInfo = UsersDB;
  return (
    <Route
      {...rest}
      render={(props) =>
        !userInfo ? <Redirect to='/' /> : <Component {...props} />
      }
    />
  );
};

export default PrivateUserRoute;
