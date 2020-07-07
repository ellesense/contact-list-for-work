import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactState from "./context/contact/ContextState";
import AuthState from "./context/auth/authState";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import styles from "./App.module.css";

function App() {
  return (
    <AuthState>
      <ContactState>
        <BrowserRouter>
          <>
            <Navbar title="Contacts" />
            <div className={styles.container}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/register" component={Register} />
              </Switch>
            </div>
          </>
        </BrowserRouter>
      </ContactState>
    </AuthState>
  );
}

export default App;
