import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__menus">
        <Logo alt="header" />
        <Navigation place="header" />
      </div>
      <p className='header__text'>
        Bienvenue à Egbikope, la communauté amicale et accueillante d'à côté
      </p>
    </header>
  )
  // Welcome to Egbikope, the friendly and welcoming community next door
}

export default Header;