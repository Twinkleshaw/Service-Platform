import { useState } from "react";

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
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(user);
  };
  return (
    <>
      <section className="flex justify-center p-4 min-h-screen">
        <main className="pt-8 w-full max-w-5xl">
          <div className="parent md:flex md:justify-evenly">
            <div className="leftside">
              <img src="/images/login.png" alt="" height="400" width="400" />
            </div>
            <div className="rightside md:w-1/3">
              <h1 className="text-3xl font-bold text-slate-200 mb-6 text-center md:text-left pt-4">
                Login Here
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 ">
                <label
                  htmlFor="email"
                  className="text-slate-300 block font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  required
                  value={user.email}
                  onChange={handleInput}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />

                <label
                  htmlFor="password"
                  className="block text-slate-300 font-medium "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  required
                  value={user.password}
                  onChange={handleInput}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />

                <button
                  type="submit"
                  className="w-full text-white py-2 rounded-md hover:bg-purple-400 transition"
                  style={{ backgroundColor: "#9C5CF8" }}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Login;
