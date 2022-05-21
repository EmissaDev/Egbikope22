/* eslint-disable no-restricted-globals */
import * as React from "react"
import { NavLink } from "react-router-dom";
import closeIcon from '../../images/close-icon.png';
import menuIcon from '../../images/menu-icon.png';

import './NavList.css';

function NavList() {
  const [isMobileNav, setMobileNav] = React.useState(false);
  const screenWidth = screen.width;
  const smallDevice = screenWidth < 768;

  const icons = isMobileNav ? closeIcon : menuIcon
  const navsClassName = (smallDevice
    ? (isMobileNav ? "navigation__list navigation__list_mobile" : "nav-hidden")
    : "navigation__list"
  )
  const iconsPosition = ( isMobileNav ? '5%' : '10%' )
  const smScreenStyle = ( smallDevice ? { flexDirection: 'column' } : "" )
  const linkColor = { color: '#000000'}


  let activeLink = (
    smallDevice
    ? { color: '#FFFFFF' }
    : { color: '#000000' }
  );

  const openMobileNav = function () {
    setMobileNav(true);
  }
  const closeMobileNav = (evt) => {
    if(evt.target !== evt.currentTarget) return;
      if(evt.which === 27) setMobileNav(false);

      setMobileNav(false);
  }

  const NavMenu = () => {
    return (
      <ul className={navsClassName} style={{ smScreenStyle }}>
          <li className="navigation__link">
            <NavLink to="/" onClick={ smallDevice ? closeMobileNav : undefined }
              style={({ isActive }) =>
                isActive ? activeLink : linkColor
              }
            >
              Accueil
            </NavLink>
          </li>
          <li className="navigation__link">
            <NavLink to="about" onClick={ smallDevice ? closeMobileNav : undefined }
              style={({ isActive }) =>
                  isActive ? activeLink : linkColor
                }
              >
                About
              </NavLink>
          </li>
          <li className="navigation__link">
            <NavLink to="cheed" onClick={ smallDevice ? closeMobileNav : undefined }
              style={({ isActive }) =>
                isActive ? activeLink : linkColor
              }
            >
              CH2ED
            </NavLink>
          </li>
          <li className="navigation__link">
            <NavLink to="associations" onClick={ smallDevice ? closeMobileNav : undefined }
              style={({ isActive }) =>
                isActive ? activeLink : linkColor
              }
            >
              Associations
            </NavLink>
          </li>
          <li className="navigation__link">
            <NavLink to="activities" onClick={ smallDevice ? closeMobileNav : undefined }
              style={({ isActive }) =>
                isActive ? activeLink : linkColor
              }
            >
              Activites
            </NavLink>
          </li>
          <li className="navigation__link">
            <NavLink to="impact" onClick={ smallDevice ? closeMobileNav : undefined }
              style={({ isActive }) =>
                isActive ? activeLink : linkColor
              }
            >
              Impact
            </NavLink>
          </li>
          <li className="navigation__link">
            <NavLink to="contact" onClick={ smallDevice ? closeMobileNav : undefined }
              style={({ isActive }) =>
                isActive ? activeLink : linkColor
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
    )
  }


  React.useEffect(() => {
    document.addEventListener('keydown', closeMobileNav);
    return () => document.removeEventListener('keydown', closeMobileNav);
  })


  return(
    <nav
      className={`navigation ${isMobileNav ? "navigation_mobile" : ""}`}
      onClick={ smallDevice ? closeMobileNav : "" }
    >
      {
        smallDevice
        ?
          <div
            style={{
              backgroundColor: '#afafaf',
              display: 'flex',
              position: 'relative',
              top: '-5%',
              width: '100%',
            }}
          >
            <img
              src={icons}
              alt="mobile_menu"
              onClick={ isMobileNav ? closeMobileNav : openMobileNav }
              className="navigation__menu"
              style={{ top: iconsPosition }}
            />
            <NavMenu />
          </div>
        :
          <NavMenu />
      }

    </nav>
  )
}



export default NavList;