import { NavLink, Outlet } from "react-router-dom";
import ThemeSwitcher from "../ui/ThemeSwitcher";

const navItem =
  "block px-3 py-2 rounded transition-colors hover:bg-gray-800";

const activeNavItem = "bg-gray-800 font-medium";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background-color)] text-[var(--text-color)]">
      {/* Top Bar */}
      <header className="h-14 bg-[var(--surface-color)] shadow flex items-center justify-between px-6">
        <h1 className="text-lg font-semibold">Events Dashboard</h1>
        <ThemeSwitcher />
      </header>

      {/* Body */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 text-white flex flex-col">
          <nav className="flex-1 p-4 space-y-2">
            <NavLink
              to="/events"
              className={({ isActive }) =>
                `${navItem} ${isActive ? activeNavItem : ""}`
              }
            >
              Events
            </NavLink>

            <NavLink
              to="/create-event"
              className={({ isActive }) =>
                `${navItem} ${isActive ? activeNavItem : ""}`
              }
            >
              Create Event
            </NavLink>

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `${navItem} ${isActive ? activeNavItem : ""}`
              }
            >
              Profile
            </NavLink>
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <footer className="h-10 bg-[var(--surface-color)] border-t border-[var(--border-color)] flex items-center justify-center text-sm text-[var(--text-secondary)]">
        © {new Date().getFullYear()} Events UI. All rights reserved.
      </footer>
    </div>
  );
};

export default AuthLayout;
