import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-400 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-100 font-bold lg:pr-40">
            We provide high-quality solutions to improve your business
            efficiency and enhance your user experience.
          </p>
        </div>

        {/* Links Section */}
        <div className="">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 font-bold">
            <li>
              <NavLink
                to="/"
                className="text-gray-100 hover:text-white transition "
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className="text-gray-100 hover:text-white transition"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className="text-gray-100 hover:text-white transition"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className="text-gray-100 hover:text-white transition"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-white font-semibold">
            123 Business Lane, Kolkata, India
          </p>
          <p className="text-white font-semibold">Phone: +123 456 7890</p>
          <p className="text-white font-semibold">Email: innova@gmail.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-white text-lg font-semibold">
          &copy; 2024 INNOVA. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
