import { NavLink, Outlet } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar Navigation */}
      <aside className=" text-white w-full md:w-64 p-4">
        <nav>
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/admin/dashboard"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md ${
                    isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
                  }`
                }
              >
                Dash-Board
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/user"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md ${
                    isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
                  }`
                }
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/contact"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md ${
                    isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
                  }`
                }
              >
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md ${
                    isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
                  }`
                }
              >
                Services
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}
