import { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(user);
  };
  return (
    <>
      <section className="flex justify-center p-4 min-h-screen">
        <main className="pt-8 w-full max-w-5xl ">
          <div className="parent md:flex md:justify-evenly ">
            <div className="leftside">
              <img src="/images/register.png" alt="" height="400" width="400" />
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
                  placeholder="Enter your password"
                  required
                  value={user.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
                <br />
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
