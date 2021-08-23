import React from "react";
import { Switch, Route } from 'react-router-dom';
import Header from './components/home/Header';
import Home from './components/home/Home';
import OrderForm from './components/form/OrderForm';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
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
