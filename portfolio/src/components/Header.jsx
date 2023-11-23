import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import Navbar from './Navbar';
import Logo from './Logo';
import ThemeIcon from './ThemeIcon';
import HeaderDropdownMenu from './HeaderDropdownMenu';
import {
  AppHeader,
  HeaderMainContainer,
  HeaderThemeMobileMenuBtns,
  HeaderThemeMobileMenuWrapper,
  StyledThemeDarkLightLogoInvisible,
  StyledThemeDarkLightLogoRightMargin,
} from '../styledComponents/StyledComponents';

function Header({ toggleTheme, isDarkTheme }) {
  const [isMenuOpenToggle, setMenuOpenToggle] = useState(false);
  const [isDropdownActive, setDropdown] = useState(false);

  const handleMenuClick = () => {
    setMenuOpenToggle(!isMenuOpenToggle);
    setDropdown(!isDropdownActive);
  };

  return (
    <AppHeader>
      <HeaderMainContainer>
        <Logo />
        <HeaderThemeMobileMenuWrapper>
          <HeaderThemeMobileMenuBtns>
            <StyledThemeDarkLightLogoRightMargin>
              {isMenuOpenToggle ? (
                // If the menu is open, hide the ThemeIcon
                <StyledThemeDarkLightLogoInvisible>
                  <ThemeIcon
                    toggleTheme={toggleTheme}
                    isDarkTheme={isDarkTheme}
                  />
                </StyledThemeDarkLightLogoInvisible>
              ) : (
                // If the menu is closed, display the ThemeIcon
                <ThemeIcon
                  toggleTheme={toggleTheme}
                  isDarkTheme={isDarkTheme}
                />
              )}
            </StyledThemeDarkLightLogoRightMargin>
            {isMenuOpenToggle ? (
              <>
                <IoClose onClick={handleMenuClick} />
                <HeaderDropdownMenu />
              </>
            ) : (
              <FaBars onClick={handleMenuClick} />
            )}
          </HeaderThemeMobileMenuBtns>
        </HeaderThemeMobileMenuWrapper>
        <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </HeaderMainContainer>
    </AppHeader>
  );
}

export default Header;
