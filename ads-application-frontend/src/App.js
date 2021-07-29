import "./App.css";
import React, { useState } from "react";
import HomePage from "./components/HomePage";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import Register from "./components/Register";
import AdCreateEditPage from "./components/AdCreateEditPage";
import { GuardProvider, GuardedRoute } from "react-router-guards";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") !== "null" &&
      localStorage.getItem("token") !== null
  );

  const requireLogin = (to, from, next) => {
    if (to.meta.auth) {
      if (loggedIn) {
        next();
      }
      next.redirect("/login");
    } else {
      next();
    }
  };

  return (
    <BrowserRouter>
      <GuardProvider guards={[requireLogin]}>
        <div className="App">
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <GuardedRoute exact path="/">
            <HomePage />
          </GuardedRoute>
          <GuardedRoute path="/login">
            <Login />
          </GuardedRoute>
          <GuardedRoute path="/register">
            <Register />
          </GuardedRoute>
          <GuardedRoute path="/create-ad" meta={{ auth: true }}>
            <AdCreateEditPage />
          </GuardedRoute>
          <GuardedRoute path="/edit-ad/:id" meta={{ auth: true }}>
            <AdCreateEditPage />
          </GuardedRoute>
        </div>
      </GuardProvider>
    </BrowserRouter>
  );
}

export default App;
