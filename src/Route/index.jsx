import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

import { Dashboard, MovieDetail } from '../Pages'
import { StyledHeader } from './style';

const Router = (props) => {

  const history = useHistory();

  const publicRoutes = [
    {
      path: '/',
      component: Dashboard,
    },
    {
      path: '/movies/:id',
      component: MovieDetail,
    },
  ]

  return (
    <BrowserRouter history={history}>
      <StyledHeader className="header">Movie Night</StyledHeader>
        <Switch>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              exact
              path={route.path}
              component={route.component}
            />
          ))}

          {/* <Route component={Page404} /> */}
        </Switch>
    </BrowserRouter>
  );
};

export default Router;
