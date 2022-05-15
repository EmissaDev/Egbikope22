/* eslint-disable no-restricted-globals */
import React from 'react';
import { NavLink } from 'react-router-dom';
import closeIcon from '../../images/close-icon.png';
import menuIcon from '../../images/menu-icon.png';

import './Navigation.css';

function Navigation(props) {
  const [isMobileNav, setMobileNav] = React.useState(false);
  const placeFooter = props.place === 'footer';
  const screenWidth = screen.width;

  // const navWidth = ( placeFooter ? '50%' : '70%');
  const navContHeader = (props.place === 'header' ? 'center' : '');
  const navContDirection = (screenWidth < 768
    ? (placeFooter ? 'row' : '')
    : ''
  );
  const listDirection = ((screenWidth < 767 || placeFooter) ? 'column' : '');
  const icons = isMobileNav ? closeIcon : menuIcon
  const openMobileNav = function () {
    console.log("request to open mobile navigation");
    setMobileNav(true);
  }
  const closeMobileNav = function (evt) {
    if (screenWidth < 767) {
      if(evt.target !== evt.currentTarget) return;
      if(evt.which === 27) setMobileNav(false);

      setMobileNav(false);
    }
  }
  const navsClassName = (
    screenWidth < 767
    ? (isMobileNav ? "navigation__list_mobile" : "nav-hidden")
    : "navigation__list"
  )
  const iconsPosition = (
    isMobileNav ? '5%' : ''
  )
  const linkColor = { color: isMobileNav ? '#FFFFFF' : '#000000'}

  // TODO: add a const to check the state of navigation location
  // to handle toggling navs in footer

  React.useEffect(() => {
    document.addEventListener('keydown', closeMobileNav);
    return () => document.removeEventListener('keydown', closeMobileNav);
  })

  return (
    <nav
      // style={{ width: navWidth }}
      className={`navigation ${isMobileNav ? "navigation_mobile" : ""}`}
      onClick={closeMobileNav}
    >
      { (screenWidth < 767)
        ?
          <div
            style={{
              alignItems: navContHeader,
              backgroundColor: '#afafaf',
              flexDirection: navContDirection,
            }}
            className="navigation__container "
          >
            { (!placeFooter) &&
              <img
                src={icons}
                alt="mobile_menu"
                onClick={ isMobileNav ? closeMobileNav : openMobileNav }
                className="navigation__menu"
                style={{ top: iconsPosition }}
              />
            }
            <div
              style={{ color: 'white', flexDirection: listDirection }}
              className={navsClassName}
            >
              <NavLink to='/' style={linkColor} className="navigation__link" activeclassname="nav-link_active">Accueil</NavLink>
              <NavLink to='/about' style={linkColor} className="navigation__link" activeclassname="nav-link_active">A propos</NavLink>
              <NavLink to='/activities' style={linkColor} className="navigation__link" activeclassname="nav-link_active">Activites</NavLink>
              <NavLink to='/impact' style={linkColor} className="navigation__link" activeclassname="nav-link_active">Impact</NavLink>
              <NavLink to='/ch2ed' style={linkColor} className="navigation__link" activeclassname="nav-link_active">CH2ED</NavLink>
              <NavLink to='/associations' style={linkColor} className="navigation__link" activeclassname="nav-link_active">Associations</NavLink>
              <NavLink to='/contact' style={linkColor} className="navigation__link" activeclassname="contact">Contact</NavLink>
            </div>
          </div>
        :
          <div
            style={{
              flexDirection: navContDirection,
              alignItems: navContHeader
            }}
            className="navigation__container "
          >
            <div
              style={{ flexDirection: listDirection }}
              className={navsClassName}
            >
              <NavLink to='/' className="navigation__link" activeclassname="nav-link_active">Accueil</NavLink>
              <NavLink to='/about' className="navigation__link" activeclassname="nav-link_active">A propos</NavLink>
              <NavLink to='/activities' className="navigation__link" activeclassname="nav-link_active">Activites</NavLink>
              <NavLink to='/impact' className="navigation__link" activeclassname="nav-link_active">Impact</NavLink>
              <NavLink to='/ch2ed' className="navigation__link" activeclassname="nav-link_active">CH2ED</NavLink>
              <NavLink to='/associations' className="navigation__link" activeclassname="nav-link_active">Associations</NavLink>
              <NavLink to='/contact' className="navigation__link" activeclassname="contact">Contact</NavLink>
            </div>
          </div>
      }
    </nav>
  )
}

export default Navigation;