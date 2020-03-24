import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Test React</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
