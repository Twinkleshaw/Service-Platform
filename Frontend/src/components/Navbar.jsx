import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useState } from "react";

function Navbar() {
  const { isLoggedIn } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex pt-10 pb-10 md:justify-evenly px-8 md:px-0 justify-between  md:text-[#673ab7] ">
      <div className="flex items-center">
        <NavLink to="/">
          {/* Uncomment and add your logo image */}
          <img src="/images/logo.png" alt="" width={100} />
          {/* <span className="text-2xl font-bold">Brand</span> */}
        </NavLink>
      </div>

      <button
        className="text-2xl md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"} {/* X or Hamburger icon */}
      </button>

      {/* Side drawer menu */}
      <div
        className={`bg-slate-50 fixed top-0 right-0 h-full  w-64 transform transition-transform duration-300 ease-in-out  ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          className="text-xl p-4 float-end"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        <nav className="mt-10">
          <ul className="flex flex-col space-y-4 text-lg text-center">
            <li>
              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" onClick={() => setMenuOpen(false)}>
                Service
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li>
                <NavLink to="/logout" onClick={() => setMenuOpen(false)}>
                  Logout
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/register" onClick={() => setMenuOpen(false)}>
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" onClick={() => setMenuOpen(false)}>
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <ul className="flex space-x-12 font-semibold text-xl">
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
  );
}

export default Navbar;
