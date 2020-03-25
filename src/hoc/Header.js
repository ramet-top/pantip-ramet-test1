import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";

import PantipReview from "../components/PantipReview";
import PantipLists from "../components/PantipLists";
import Welcome from "../components/Welcome";
// import Test from "../components/test";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link tag={Link} href="/">
              Home
            </Nav.Link>
            <Nav.Link tag={Link} href="/pantip_review">
              PantipReview
            </Nav.Link>
            <Nav.Link tag={Link} href="/pantip_list">
              PantipLists
            </Nav.Link>
            {/* <Nav.Link tag={Link} href="/test">
              Test
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <Switch>
          <Route exact path="/" component={Welcome}></Route>
          <Route path="/pantip_review" component={PantipReview}></Route>
          <Route path="/pantip_list" component={PantipLists}></Route>
          {/* <Route path="/test" component={Test}></Route> */}
        </Switch>
      </div>
    </div>
  );
};

export default Header;
