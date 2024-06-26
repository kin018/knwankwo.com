import React from 'react';
import { Link } from 'react-scroll';
import ThemeIcon from './ThemeIcon';
import {
  NavbarContainer,
  StyledNavLink,
} from '../styledComponents/StyledComponents';

function Navbar({ toggleTheme, isDarkTheme }) {
  return (
    <nav>
      <NavbarContainer>
        <Link to="home" smooth duration={300} offset={-100}>
          <StyledNavLink> Home </StyledNavLink>
        </Link>
        <Link to="about" smooth duration={300} offset={-100}>
          <StyledNavLink>About</StyledNavLink>
        </Link>

        <Link to="skills" smooth duration={300} offset={-100}>
          <StyledNavLink>Skills</StyledNavLink>
        </Link>
        <Link to="services" smooth duration={300} offset={-100}>
          <StyledNavLink>Services</StyledNavLink>
        </Link>
        {/* <Link to="projects" smooth duration={300} offset={-100}>
          <StyledNavLink>Projects</StyledNavLink>
        </Link> */}
        <Link to="contact" smooth duration={300} offset={-100}>
          <StyledNavLink>Contact</StyledNavLink>
        </Link>
        <ThemeIcon toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </NavbarContainer>
    </nav>
  );
}

export default Navbar;
