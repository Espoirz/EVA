import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import ClubPage from './pages/ClubPage';
import Navbar from './components/Navbar';

function App() {
  const token = localStorage.getItem('token');
  return (
    <>
      {token && <Navbar />}
      <Switch>
        <Route path="/login" component={LoginPage} />
        {token
          ? <>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/clubs/:id" component={ClubPage} />
              <Redirect to="/dashboard" />
            </>
          : <Redirect to="/login" />
        }
      </Switch>
    </>
  );
}

export default App;
