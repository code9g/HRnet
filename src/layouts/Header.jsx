import { HomeIcon, TablePropertiesIcon, UserPlusIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

export function Header() {
  const links = [
    { to: "/", icon: <HomeIcon />, title: "Home" },
    {
      to: "/create-an-employee",
      icon: <UserPlusIcon />,
      title: "Create an Employee",
    },
    {
      to: "/employee-list",
      icon: <TablePropertiesIcon />,
      title: "Employee List",
    },
  ];

  const clnm = ({ isActive }) => {
    return (
      "flex items-center gap-2 p-4 hover:bg-green-900 hover:text-green-100 hover:bg-green-900 " +
      (isActive ? "bg-green-900 text-green-100" : "text-green-900")
    );
  };

  return (
    <div className="bg-primary h-14 flex items-center">
      <header className="container mx-auto">
        <nav>
          <ul className="flex flex-row flex-wrap">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink to={link.to} className={clnm}>
                  {link.icon}
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}

Header.propTypes = {};

export default Header;
