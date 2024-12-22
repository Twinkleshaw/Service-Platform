import { NavLink, Outlet } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";

export function Sidebar() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white shadow-lg min-h-screen">
        <nav>
          <ul className="space-y-2 px-4">
            {/* <li>
              <NavLink
                to="/admin/dashboard"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-md ${
                    isActive ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"
                  }`
                }
              >
                Dash-Board
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/admin/user"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-md ${
                    isActive ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"
                  }`
                }
              >
                Users
                <FiUsers className="mx-3 text-gray-600 w-5 h-5" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/contact"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-md ${
                    isActive ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"
                  }`
                }
              >
                Contacts
                <FiMessageCircle className="mx-3 text-gray-600 w-5 h-5" />
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-md ${
                    isActive ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"
                  }`
                }
              >
                Services
              </NavLink>
            </li> */}
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
