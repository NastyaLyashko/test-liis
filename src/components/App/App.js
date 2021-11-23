import React, { useState } from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import { createLogin } from '../../redux/actionCreator'
import { useDispatch } from 'react-redux';
import './App.css';
import Login from '../Login/Login';
import Main from '../Main/Main';

function App() {

  const dispatch = useDispatch();

  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (data) => {
    dispatch(createLogin(data));
    localStorage.setItem('userData', data);
    history.push('/');
    setLoggedIn(true);
  }

  const handleLogOut = () => {
    localStorage.removeItem('userData');
    setLoggedIn(false);
    history.push('/signin');
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main logOut={handleLogOut} />
        </Route>
        <Route path="/signin">
          <Login onLogin={handleLogin} />
        </Route>
        <Route>
          {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
        </Route> 
      </Switch>
    </div>
  );
}

export default App;
