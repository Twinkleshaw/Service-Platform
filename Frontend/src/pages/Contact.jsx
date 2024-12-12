import { useState } from "react";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();
  const [userData, setUserData] = useState(true);
  const { user } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setContact({
      ...contact,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);
    try {
      const response = await fetch(
        `https://service-platform-backend-mern.onrender.com/api/contactForm/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
        }
      );
      if (response.ok) {
        setContact({ username: "", email: "", message: "" });
        alert("message send successfuly");
        navigate("/");
      }
    } catch (error) {
      alert("message not send");
      console.log("error in contact", error);
    }
  };

  return (
    <section className="p-8 min-h-screen md:mt-14">
      <main className="md:flex md:justify-center p-2 ">
        <div className=" p-8 md:px-20 bg-[#E6E6FA] rounded-xl md:w-1/3">
          <h3 className="text-xl font-extrabold text-black leading-tight">
            Contact Information
          </h3>
          <p className="text-black">Say something to start a live chat!</p>
        </div>
        <div className=" md:w-1/3 p-4 ">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="text-sm font-semibold text-slate-300"
              >
                Name
              </label>{" "}
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter our name"
                autoComplete="off"
                required
                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:ring-blue-400 focus:outline-none"
                onChange={handleInput}
                value={contact.username}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold  text-slate-300"
              >
                Email
              </label>{" "}
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter our email"
                autoComplete="off"
                required
                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:ring-blue-400 focus:outline-none"
                onChange={handleInput}
                value={contact.email}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className=" block text-sm font-semibold  text-slate-300"
              >
                Message
              </label>{" "}
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder="Enter your message"
                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:ring-blue-400 focus:outline-none"
                onChange={handleInput}
                value={contact.message}
              ></textarea>
            </div>
            <button
              type="submit"
              className="   text-white p-2 md:float-end  rounded-md hover:bg-purple-400 transition"
              style={{ backgroundColor: "#9C5CF8" }}
            >
              Contact Now
            </button>
          </form>
        </div>
      </main>
    </section>
  );
}

export default Contact;
