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

  return (
    <div className="z-10 shadow-md dark:shadow-white w-full">
      <header className="container mx-auto flex flex-row justify-between items-center">
        <nav
          aria-label="Main"
          data-orientation="horizontal"
          dir="ltr"
          className=""
        >
          <ul
            data-orientation="horizontal"
            className="group flex flex-1 list-none items-center justify-center"
            dir="ltr"
          >
            {links.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.to}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 px-6 py-4"
                >
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
