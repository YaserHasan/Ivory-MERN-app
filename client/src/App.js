import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ProtectedRoute from "./ProtectedRoute";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage/HomePage";


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <ProtectedRoute inAuth path="/register">
          <AuthPage formType="register"/>
        </ProtectedRoute>
        
        <ProtectedRoute inAuth path="/login">
          <AuthPage formType="login"/>
        </ProtectedRoute>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
