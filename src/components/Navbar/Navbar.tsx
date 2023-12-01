
import '@fortawesome/fontawesome-free/css/all.css';
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="sidebar-container">
      <ul>
        <li><i className="fa-solid fa-plus"></i></li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}