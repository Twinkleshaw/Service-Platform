import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

function About() {
  const { user } = useAuth();

  return (
    <>
      <section className="md:flex md:justify-evenly p-8 ">
        {/* about image  */}
        <div className="md:flex md:justify-center  items-center md:w-1/2 ">
          <img src="images/about us.png" alt="" />
        </div>
        {/* about text */}
        <div className="space-y-6  md:p-8">
          <p className="text-lg text-white font-semibold">
            Welcome,{user ? ` ${user.username}` : `to our website`}
          </p>
          <h1 className="font-extrabold text-4xl md:text-3xl text-white leading-tight">
            About Our Company Ready Solutions with{" "}
            <span className="text-purple-500">Technology</span>
          </h1>
          <p className="text-lg text-slate-300 font-semibold">
            At TechFusion, we bridge the gap between top freelancers and leading
            tech companies, fostering a collaborative environment where
            innovation thrives and growth is inevitable.
          </p>
          <button className="text-slate-300 bg-purple-600 rounded-3xl px-4 font-bold p-2">
            <Link to="/contact">Contact Us</Link>
          </button>
        </div>
      </section>
      {/* about 3 divs */}
      <section className="p-8 md:flex md:space-x-6">
        <div className="p-8 space-y-4 mb-6  bg-purple-700 rounded-xl">
          <h1 className="text-xl font-extrabold text-white leading-tight">
            MISSION
          </h1>
          <p className="text-slate-300">
            We aim to transform the businesses through the comprehensive
            technology services, ensuring our clients achieve their objectives
            customized and scalable solutions.
          </p>
        </div>
        <div className="p-8 space-y-4 mb-6  bg-[#9966CC] rounded-xl">
          <h1 className="text-xl font-extrabold text-white leading-tight">
            VISSION
          </h1>
          <p className="text-slate-300">
            We aspire to revolutionize tech services with top-tier, customized
            solutions driving client growth, fostering innovation, and ensuring
            success in the digital landscape.
          </p>
        </div>
        <div className="p-8 space-y-4 mb-6  bg-[#4B0082] rounded-xl">
          <h1 className="text-xl font-extrabold text-white leading-tight">
            OUR TEAM
          </h1>
          <p className="text-slate-300">
            With teamwork and innovation, our diverse experts deliver
            exceptional tech services, empowering businesses to thrive and
            innovate effectively in today’s dynamic digital landscape.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
