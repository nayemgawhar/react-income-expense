import './Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      
        <NavLink to = '/add'>
          <button className='btn'>Add New</button>
        </NavLink>
    </div>
  )
}

export default Footer;