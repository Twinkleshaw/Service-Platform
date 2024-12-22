import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
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
      const response = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();
      storeToken(res_data.token);
      if (response.ok) {
        setUser({ email: "", password: "" });
        toast.success("Login Successful");
        navigate("/");
      } else {
        alert(res_data.extraDetails);
      }
      console.log(response);
    } catch (error) {
      console.log("login", error);
    }
  };
  return (
    <>
      <section className="flex md:flex-row flex-col md:space-x-[5rem] justify-center items-center min-h-screen bg-gray-100 ">
        <div>
          <img src="/images/about us.png" alt="" />
        </div>
        <main className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src="images/logo.png" alt="Logo" className="h-10" />
          </div>

          {/* Welcome Text */}
          <h2 className="text-2xl font-bold text-center text-purple-700 mb-4">
            Hi, Welcome Back
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Enter your credentials to continue
          </p>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleInput}
                placeholder="Enter your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-gray-600 font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={user.password}
                onChange={handleInput}
                placeholder="Enter your Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 text-white rounded-md bg-purple-600 hover:bg-purple-500 transition"
            >
              Sign In
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-gray-500 text-sm">
            Don’t have an account?{" "}
            <NavLink to="/register" className="text-purple-600 hover:underline">
              Register
            </NavLink>
          </p>
        </main>
      </section>
    </>
  );
}

export default Login;
