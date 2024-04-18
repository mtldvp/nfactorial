import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 9.5vh;
  background: #f5f5f5; /* Light background */
  overflow: hidden; /* Prevent parallax clipping */
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #fff; /* White header */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

const Logo = styled.h1`
  font-size: 2em;
  color: #333;
  margin: 0;
`;

const Navigation = styled.nav`
  display: flex;
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  margin: 0 10px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #EAE86F; /* Blue hover color */
  }
`;

function NavbarDog() {
    return (

    <Container>
        <Header>
        <Logo>ILoveDogs!</Logo>
        <Navigation>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/donations">Donations</NavLink>
        <NavLink href="/learn">Learn about dogs</NavLink>
        </Navigation>
        </Header>
    </Container>
    );
}

export default NavbarDog;