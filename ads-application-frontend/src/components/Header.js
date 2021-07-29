import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") !== "null" &&
      localStorage.getItem("token") !== null
  );
  const [username, setUsername] = useState(
    localStorage.getItem("currentUserUsername")
  );

  const history = useHistory();

  const logout = () => {
    localStorage.setItem("token", null);
    localStorage.setItem("currentUserUsername", null);
    setLoggedIn(false);
    history.push("/login");
  };

  const goToHomePage = () => {
    history.push("/");
  };
  const goToLogin = () => {
    history.push("/login");
  };
  const goToRegistration = () => {
    history.push("/register");
  };
  const createNewAd = () => {
    history.push("/create-ad");
  };

  return (
    <>
      <Navbar className="px-3" bg="dark" variant="dark">
        <Navbar.Brand href="/">Ads Application</Navbar.Brand>
        <Nav className="mr-auto" style={{ width: "100%" }}>
          <Nav.Link onClick={goToHomePage}>Home</Nav.Link>
          {loggedIn && <Nav.Link onClick={createNewAd}> New Ad </Nav.Link>}
        </Nav>

        <Nav className="d-flex justify-content-end" style={{ width: "50%" }}>
          {loggedIn && <Nav.Link> User: {username} </Nav.Link>}
          {!loggedIn && (
            <Nav.Link onClick={goToRegistration}>Register</Nav.Link>
          )}
          {!loggedIn && <Nav.Link onClick={goToLogin}>Login</Nav.Link>}
          {loggedIn && <Nav.Link onClick={logout}>Logout</Nav.Link>}
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
