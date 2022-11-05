/* eslint-disable */
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <header className="header">
    <h1 className="logo"><a className="logo" href="/">BooKStore</a></h1>
    <ul className="main-nav">
      <li>
        <Link to="/books">Books</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
      <li><a href="/" className="picture"><img src="" alt="" /></a></li>
    </ul>
  </header>
);
export default Navbar;
