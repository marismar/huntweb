import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Product from './pages/Product';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/products/:id" component={Product}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;