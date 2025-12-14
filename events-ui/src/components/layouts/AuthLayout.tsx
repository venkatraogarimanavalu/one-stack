import { NavLink, Outlet } from "react-router-dom";
import ThemeSwitcher from "../ui/ThemeSwitcher";

const navItem =
  "block px-3 py-2.5 rounded text-sm transition-all hover:bg-opacity-80 active:scale-95";

const activeNavItem = "bg-opacity-100 font-semibold";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background-color)] text-[var(--text-color)]">
      {/* Top Bar - Mobile First */}
      <header className="sticky top-0 z-40 h-14 sm:h-16 bg-[var(--surface-color)] shadow-sm border-b border-[var(--border-color)] flex items-center justify-between px-4 sm:px-6 md:px-8">
        <h1 className="text-base sm:text-lg md:text-xl font-heading font-bold text-primary">
          Sangamam
        </h1>
        <div className="flex items-center gap-3 sm:gap-4">
          <ThemeSwitcher />
        </div>
      </header>

      {/* Body - Mobile Responsive */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Hidden on Mobile, Visible on MD+ */}
        <aside className="hidden md:flex w-64 flex-col bg-gradient-to-b from-[var(--surface-color)] to-[var(--background-color)] border-r border-[var(--border-color)]">
          <nav className="flex-1 overflow-y-auto p-4 space-y-1.5">
            <div className="mb-4">
              <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider px-3 py-2">
                Navigation
              </p>
            </div>

            <NavLink
              to="/events"
              className={({ isActive }) =>
                `${navItem} ${isActive ? "bg-primary text-white" : "text-[var(--text-color)] hover:bg-[var(--border-color)]"}`
              }
            >
              📅 Events
            </NavLink>

            <NavLink
              to="/create-event"
              className={({ isActive }) =>
                `${navItem} ${isActive ? "bg-primary text-white" : "text-[var(--text-color)] hover:bg-[var(--border-color)]"}`
              }
            >
              ➕ Create Event
            </NavLink>

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `${navItem} ${isActive ? "bg-primary text-white" : "text-[var(--text-color)] hover:bg-[var(--border-color)]"}`
              }
            >
              👤 Profile
            </NavLink>
          </nav>
        </aside>

        {/* Content - Mobile First */}
        <main className="flex-1 overflow-y-auto">
          <div className="w-full min-h-full p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Footer - Mobile First */}
      <footer className="mt-auto h-12 sm:h-14 bg-[var(--surface-color)] border-t border-[var(--border-color)] flex items-center justify-center px-4">
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] text-center">
          © {new Date().getFullYear()} Sangamam. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default AuthLayout;
