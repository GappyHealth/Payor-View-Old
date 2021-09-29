import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import fire from './fire';

import Home from './components/home';
import NavBar from './components/navbar';
import Practices from './components/practices';
import Practice from './components/practice';
import Gaps from './components/gaps';

import NotFound from './components/common/not-found';
import Test from './components/test';

import './App.css';
import Providers from './components/providers';
import Provider from './components/provider';
import CBP from './components/tmpCBP';
import Members from './components/members';
import Login from './components/login';

// GAPPY TV LINKS
import Dash from './components/gappytv/components/responsive/dash';
import UserPage from './components/gappytv/components/user/userPage';
import BillCPT from './components/gappytv/components/cbp/custom/billCodes';
import MedicationCompliance from './components/gappytv/components/cbp/custom/medCompliance';
import UpcomingAppt from './components/gappytv/components/cbp/custom/upcomingAppt';
import ScheduleAppt from './components/gappytv/components/cbp/custom/scheduleAppt';
import Verify from './components/gappytv/components/cbp/custom/verify';
import ComplianceAppt from './components/gappytv/components/cbp/custom/complianceAppt';

function App() {

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  
  const handleLogout = () => {
    fire.auth().signOut().then(function() {
      console.log('Signed Out');
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);
  
  return (
    <React.Fragment>
      {user ? (
        <div>
          <NavBar 
            handleLogout={handleLogout}
          />
          <main className="container">
            <Switch>
              <Route path="/home" component={ Home }></Route>
              <Route path="/members" component={ Members }></Route>
              <Route path="/not-found" component={ NotFound }></Route>
              <Route path="/practices" exact component={ Practices } />
              <Route path="/practices/:id" component={ Practice }/>
              <Route path="/gaps" component={ Gaps }></Route>
              <Route path="/providers" exact component={ Providers }></Route>
              <Route path="/providers/:id" component={ Provider }></Route>

              <Route path="/cbp/:id" component={ CBP }></Route>
              <Route path="/cbp" component={ CBP }></Route>

              <Route path="/test" component={ Test }></Route>

              {/* START GAPPY TV TEMPORARY LINKS DELETE */}

              <Route path="/tv/dash" component={ Dash }></Route>
              <Route path="/tv/profile" component={ UserPage }></Route>

              <Route path="/tv/cbp/schedule" component={ScheduleAppt}></Route>
              <Route path="/tv/cbp/billing" component={BillCPT}></Route>
              <Route path="/tv/cbp/compliance" component={MedicationCompliance}></Route>
              <Route path="/tv/cbp/upcoming" component={UpcomingAppt}></Route>
              <Route path="/tv/cbp/verify" component={Verify}></Route>
              <Route path="/tv/cbp/complianceappt" component={ComplianceAppt}></Route>

              {/* END GAPPY TV TEMPORARY LINKS DELETE */}

              <Redirect from="/" exact to="/home" />
              <Redirect to="/not-found" />
            </Switch>
          </main>
        </div>
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError} />
      )}
    </React.Fragment>
  );
}

export default App;
