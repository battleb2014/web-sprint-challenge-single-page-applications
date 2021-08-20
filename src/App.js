import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import './App.css';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path = '/pizza'>
          <OrderForm />
        </Route>
        <Route path = '/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
