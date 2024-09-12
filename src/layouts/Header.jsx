import { ModeToggle } from "@/components/ModeToggle";
import {
  HomeIcon,
  SettingsIcon,
  TablePropertiesIcon,
  UserPlusIcon,
} from "lucide-react";
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
    {
      to: "/settings",
      icon: <SettingsIcon />,
      title: "Settings",
    },
  ];

  const className = ({ isActive }) => {
    return (
      "flex items-center gap-2 p-4 hover:bg-green-900 hover:text-green-100 " +
      (isActive
        ? "text-green-100 bg-green-900 dark:bg-green-900"
        : "text-green-900 dark:text-green-100 ")
    );
  };

  return (
    <div className="shadow-md dark:shadow-white">
      <header className="container mx-auto flex flex-row justify-between items-center">
        <nav className="h-14">
          <ul className="flex flex-row flex-wrap">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink to={link.to} className={className}>
                  {link.icon}
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <ModeToggle />
      </header>
    </div>
  );
}

Header.propTypes = {};

export default Header;
