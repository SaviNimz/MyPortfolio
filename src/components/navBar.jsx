import React, { useState } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
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

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background: #f8f9fa;
    width: 250px; /* Adjusted the width */
    height: auto; /* No longer takes full height */
    padding: 1.5rem 0; /* Added padding for spacing */
    border-left: 1px solid #dee2e6;
    border-bottom: 1px solid #dee2e6;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.3s ease forwards;
    display: flex;
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

const HamburgerIcon = styled(FaBars)`
  display: none;
  font-size: 1.8rem; /* Increased the size */
  cursor: pointer;
  color: #495057;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 2rem;
    top: 1.2rem;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Nav>
        <HamburgerIcon onClick={toggleMenu} />
        <NavList isOpen={isOpen}>
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
