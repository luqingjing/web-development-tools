import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../css/Header.css';


const Header = ({
  username,
  isLoggedIn,
  executeLogin,
  executeSignUp,
  jumpToAddPage,
  jumpToPersonal,
  jumpToHome,
  signOut
}) => {
  return (
    <div>
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a onClick={jumpToHome}>WeBlog</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} onClick={jumpToHome}>Homepage</NavItem>

            { isLoggedIn && <NavItem eventKey={1} onClick={jumpToAddPage}>New Blog</NavItem> }
            { isLoggedIn && <NavItem eventKey={1} onClick={jumpToPersonal}>{username}</NavItem> }
            { isLoggedIn && <NavItem eventKey={1} onClick={signOut}>Sign Out</NavItem> }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;