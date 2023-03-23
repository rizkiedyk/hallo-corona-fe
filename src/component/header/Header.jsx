import React, { useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import ModalSignUp from "../modal/SignUp";
import ModalSignIn from "../modal/SignIn";
// import { NavLink } from "react-router-dom";

function Header() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const handleCloseSignIUp = () => setShowSignUp(false);
  const handleShowSignUp = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  };

  const handleCloseSignIn = () => setShowSignIn(false);
  const handleShowSignIn = () => setShowSignIn(true);
  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow">
        <Container>
          <Navbar.Brand href="/">
            <img src="/assets/img/IconNavbar.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" w-50 ms-auto">
              <Nav.Link
                href="#"
                className="w-25 ms-auto"
                onClick={handleShowSignUp}
              >
                <Button variant="light" className="w-100 button1">
                  Sign up
                </Button>
              </Nav.Link>

              <Nav.Link href="#" className="w-25" onClick={handleShowSignIn}>
                <Button variant="light" className="w-100 button2">
                  Sign in
                </Button>
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ModalSignUp
        showSignUp={showSignUp}
        handleCloseSignIUp={handleCloseSignIUp}
      />

      <ModalSignIn
        showSignIn={showSignIn}
        handleCloseSignIn={handleCloseSignIn}
        switch={handleShowSignUp}
      />
    </>
  );
}
export default Header;
