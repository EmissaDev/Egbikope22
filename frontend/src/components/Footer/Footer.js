import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <Logo alt="footer" />
        <p className="footer__copyright">© 2022 Egbikope by Emissa. All Rights Reserved.</p>
      </div>
      <Navigation place="footer" />
    </footer>
  )
}

export default Footer;