import React from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactState from "./context/contact/ContextState";
import AuthState from "./context/auth/authState";
import AlertState from "./context/alert/alertState";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/Alert";
import Home from "./components/pages/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/PrivateRoute";
import styles from "./App.module.css";

if (localStorage.token) {
  axios.defaults.headers.common["x-auth-token"] = localStorage.token;
} else {
  delete axios.defaults.headers.common["x-auth-token"];
}

function App() {
  return (
    <AuthState>
      <AlertState>
        <ContactState>
          <BrowserRouter>
            <>
              <Navbar title="Logistics Contacts" />
              <div className={styles.container}>
                <Alert />
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </>
          </BrowserRouter>
        </ContactState>
      </AlertState>
    </AuthState>
  );
}

export default App;
