import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
function Navbar() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header
        className="flex pt-10 pb-10 md:justify-evenly px-8 md:px-0"
        style={{ color: "#9C5CF8" }}
      >
        <div className="">
          <NavLink to="/">
            {/* <img src="/images/logo.png" alt="" width={200} /> */}
          </NavLink>
        </div>

        <nav>
          <ul className="md:flex space-x-12 hidden font-semibold text-xl">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/service">Service</NavLink>
            </li>
            {isLoggedIn ? (
              <li>
                <NavLink to="/logout">Logout</NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
