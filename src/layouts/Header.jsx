import { NavLink } from "react-router-dom";

function Header() {
  const links = [
    { label: "Home", to: "/" },
    { label: "Create an employee", to: "/employees/create" },
    { label: "View employees list", to: "/employees" },
  ];
  return (
    <div>
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <NavLink to={link.to}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

Header.propTypes = {};

export default Header;
