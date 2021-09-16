import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ProtectedRoute from "./ProtectedRoute";
import Header from "./components/Header/Header";
import AuthPage from "./pages/AuthPage";


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <h1>HomePage</h1>
        </Route>

        <ProtectedRoute inAuth path="/register">
          <AuthPage formType="register"/>
        </ProtectedRoute>
        
        <ProtectedRoute inAuth path="/login">
          <AuthPage formType="login"/>
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
