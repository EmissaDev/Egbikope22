import logo from '../../images/logos/logo_large.png';
import './Logo.css';

function Logo(props) {
  return (
    <img src={logo} alt={props.alt} className={`logo logo_place_${props.alt}`} />
  )
}

export default Logo;