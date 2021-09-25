import React, { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { getUserCart } from './redux/cart/cartActions';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import CategoryProductsPage from "./pages/CategoryProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import OrdersPage from "./pages/OrdersPage";


function App() {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserCart());
  }, [user]);

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

        <Route path="/category/:categoryID">
          <CategoryProductsPage />
        </Route>

        <Route path="/product/:productID">
          <ProductDetailsPage />
        </Route>

        <ProtectedRoute path="/cart">
          <CartPage />
        </ProtectedRoute>

        <ProtectedRoute path="/orders">
          <OrdersPage />
        </ProtectedRoute>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
