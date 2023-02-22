import { NavLink } from 'react-router-dom';

const Header = () => {
  const navlinks = [
    { path: '/math_magicians', title: 'Home' },
    { path: 'Calculator', title: 'Calculator' },
    { path: 'Quote', title: 'Quote' },
  ];

  return (
    <header className="layout">
      <h1>Math Magicians</h1>
      <ul className="nav-links">
        {navlinks.map((navlink) => (
          <li key={navlink.title}>
            <NavLink to={navlink.path}>{navlink.title}</NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
