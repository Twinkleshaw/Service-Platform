import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const { storeToken, API } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      if (response.ok) {
        storeToken(res_data.token);
        setUser({ username: "", email: "", phone: "", password: "" });
        toast.success("registration successful");
        navigate("/");
      } else {
        toast.error(res_data.extraDetails);
      }
      console.log(response);
    } catch (error) {
      console.log("register", error);
    }
  };
  return (
    <section className="flex md:flex-row flex-col md:space-x-[5rem] justify-center items-center min-h-screen bg-gray-100">
      <div>
        <img src="/images/about us.png" alt="" />
      </div>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-6">
            <img src="images/logo.png" alt="Logo" className="h-10" />
          </div>

          <h2 className="text-2xl font-bold text-gray-800">Register Here</h2>
          <p className="text-gray-500">
            Fill in your details to create an account
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your Username"
              value={user.username}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone No.
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              value={user.phone}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-500 transition"
          >
            Register Now
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <NavLink to="/login" className="text-purple-600 hover:underline">
            Login here
          </NavLink>
        </p>
      </div>
    </section>
  );
}

export default Register;
