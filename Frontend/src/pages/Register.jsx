import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
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
  const { storeToken } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(
        `https://service-platform-b9kt.vercel.app/?vercelToolbarCode=p_55QScJojtVZsa/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

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
    <>
      <section className="flex justify-center p-4 min-h-screen">
        <main className="pt-8 w-full max-w-5xl ">
          <div className="parent md:flex md:justify-evenly ">
            <div className="leftside">
              <img src="/images/login.png" alt="" height="400" width="400" />
            </div>
            <div className="rightside  md:w-1/3">
              <h1 className="text-3xl font-bold text-slate-200 mb-3 text-center md:text-left pt-4">
                Registration Form
              </h1>
              <br />
              <form onSubmit={handleSubmit} className="space-y-3">
                <label
                  htmlFor="username"
                  className="block text-slate-300 font-medium"
                >
                  User Name
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your name"
                  required
                  value={user.username}
                  onChange={handleChange}
                  className="w-full  px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
                <br />
                <label
                  htmlFor="email"
                  className="block text-slate-300 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  value={user.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
                <br />
                <label
                  htmlFor="phone"
                  className="block text-slate-300 font-medium"
                >
                  Phone No.
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone"
                  required
                  value={user.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
                <br />
                <label
                  htmlFor="password"
                  className="block text-slate-300 font-medium"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                  value={user.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
                <br /> <br />
                <button
                  type="submit"
                  className="w-full text-white py-2 rounded-md hover:bg-purple-400 transition"
                  style={{ backgroundColor: "#9C5CF8" }}
                >
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Register;
