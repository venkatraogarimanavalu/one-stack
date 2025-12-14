import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  const navItem =
    "px-3 py-2 rounded text-sm font-medium text-gray-700 hover:text-blue-600";

  const activeNavItem = "text-blue-600";

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo / Title */}
        <h1 className="text-lg font-semibold text-gray-900">Venkatraogari manavalu</h1>

        {/* Navigation */}
        {/* <Navbar /> */}
        <nav className="flex gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${navItem} ${isActive ? activeNavItem : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/events"
            className={({ isActive }) =>
              `${navItem} ${isActive ? activeNavItem : ""}`
            }
          >
            Events
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${navItem} ${isActive ? activeNavItem : ""}`
            }
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className={({ isActive }) =>
              `${navItem} ${isActive ? activeNavItem : ""}`
            }
          >
            Register
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
