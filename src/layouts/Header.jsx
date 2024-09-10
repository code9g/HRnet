import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

export function Header() {
  const clnm = ({ isActive, ...args }) => {
    console.log(args);
    return isActive ? "bg-red-100" : "";
  };
  return (
    <div className="bg-primary h-14 flex items-center">
      <header className="container mx-auto">
        <nav>
          <ul className="flex flex-row flex-wrap gap-4">
            <li>
              <NavLink to="/" className={cn(clnm, "hover:bg-red-400")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/create-an-employee" className={clnm}>
                Create an Employee
              </NavLink>
            </li>
            <li>
              <NavLink to="/employee-list" className={clnm}>
                Create an Employee
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

Header.propTypes = {};

export default Header;
