import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
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
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </div>
  );
}

export default App;
