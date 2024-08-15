import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
`;

const Nav = styled.nav`
  background: #f8f9fa;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid #dee2e6;
  overflow-x: hidden; /* Prevent horizontal overflow */
  display: flex; /* Add display flex to align items properly */

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%; /* Ensure it spans full width */

  @media (max-width: 768px) {
    display: none; /* Hide navigation menu on mobile */
  }
`;

const NavItem = styled.li`
  margin: 0 1.5rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #495057;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
    font-weight: bolder;
  }

  &.active {
    color: #007bff;
    border-bottom: 2px solid #007bff;
    padding-bottom: 0.5rem;
  }
`;

const Navbar = () => {
  return (
    <>
      <GlobalStyle />
      <Nav>
        <NavList>
          <NavItem><NavLink href="#introduction">Introduction</NavLink></NavItem>
          <NavItem><NavLink href="#skills">Skills</NavLink></NavItem>
          <NavItem><NavLink href="#projects">Projects</NavLink></NavItem>
          <NavItem><NavLink href="#experience">Experience</NavLink></NavItem>
        </NavList>
      </Nav>
    </>
  );
};

export default Navbar;
