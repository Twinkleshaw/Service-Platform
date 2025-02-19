import { useAuth } from "../store/auth";

import { NavLink } from "react-router-dom";

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
        <div className="space-y-6 pt-4 md:p-8">
          <p className="text-xl  font-semibold">
            Welcome,{user ? ` ${user.username}` : `to our website`}
          </p>
          <h1 className="font-extrabold text-4xl md:text-3xl  leading-tight">
            About Our Company Ready Solutions with{" "}
            <span className="text-[#673ab7]">Technology</span>
          </h1>
          <p className="text-xl text-slate-700 ">
            At TechFusion, we bridge the gap between top freelancers and leading
            tech companies, fostering a collaborative environment where
            innovation thrives and growth is inevitable.
          </p>{" "}
          <br />
          <NavLink
            to="/contact"
            className="text-slate-50 bg-[#673ab7] rounded-3xl px-4 font-bold p-2"
          >
            Contact Us
          </NavLink>
        </div>
      </section>
      {/* about 3 divs */}
      <section className="p-8 md:flex md:space-x-6">
        <div className="p-8 space-y-4 mb-6  bg-purple-700 rounded-xl">
          <h1 className="text-xl font-extrabold text-white leading-tight">
            MISSION
          </h1>
          <p className="text-slate-50 text-lg">
            We aim to transform the businesses through the comprehensive
            technology services, ensuring our clients achieve their objectives
            customized and scalable solutions.
          </p>
        </div>
        <div className="p-8 space-y-4 mb-6  bg-[#9966CC] rounded-xl">
          <h1 className="text-xl font-extrabold text-white leading-tight">
            VISSION
          </h1>
          <p className="text-slate-50 text-lg">
            We aspire to revolutionize tech services with top-tier, customized
            solutions driving client growth, fostering innovation, and ensuring
            success in the digital landscape.
          </p>
        </div>
        <div className="p-8 space-y-4 mb-6  bg-purple-600 rounded-xl">
          <h1 className="text-xl font-extrabold text-white leading-tight">
            OUR TEAM
          </h1>
          <p className="text-slate-50 text-lg">
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
