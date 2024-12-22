import { useState } from "react";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
function Contact() {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();
  const [userData, setUserData] = useState(true);
  const { user, API } = useAuth();

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
      const response = await fetch(`${API}/api/contactForm/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      if (response.ok) {
        setContact({ username: "", email: "", message: "" });
        toast.success("message send successfuly");
        navigate("/");
      }
    } catch (error) {
      toast.error("message not send");
      console.log("error in contact", error);
    }
  };

  return (
    <section className="p-8 min-h-screen md:pt-20 bg-gray-100">
      <main className="md:flex md:justify-center p-2">
        <div className=" p-8 md:px-20 bg-[#E6E6FA] rounded-xl md:w-1/3 ">
          <h3 className="text-xl font-extrabold text-black leading-tight">
            Contact Information
          </h3>
          <p className="text-black pt-2">Say something to start a live chat!</p>
          <div className="py-12 space-y-6">
            <p className="flex items-center space-x-2">
              <span>
                <PiPhoneCallFill />
              </span>
              +123 456 7890
            </p>
            <p className="flex items-center space-x-2">
              <span>
                <MdEmail />
              </span>
              innova@gmail.com
            </p>
            <p className="flex items-center space-x-2">
              <span>
                <FaLocationDot />
              </span>
              123 Business Lane, Kolkata, India
            </p>
          </div>
        </div>
        <div className=" md:w-1/3 p-4 ">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="text-sm font-semibold text-gray-700"
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
                className="block text-sm font-semibold  text-gray-700"
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
                className=" block text-sm font-semibold  text-gray-700"
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
              className="   text-white p-2 md:float-end bg-[#673ab7] rounded-md hover:bg-[#673ab7]  transition"
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
