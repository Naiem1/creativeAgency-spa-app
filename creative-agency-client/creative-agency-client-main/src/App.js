import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home/Home"
import Login from "./components/Login/Login"
import './App.css';
import PlaceOrder from './components/PlaceOrder/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute'
import Admin from './components/Admin/Admin/Admin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [selectedService, setSelectedService] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, selectedService, setSelectedService]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivateRoute path="/admin">
          <Admin></Admin>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/place-order">
          <PlaceOrder></PlaceOrder>
        </PrivateRoute>
        <Route path="/admin">
          <Admin></Admin>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
