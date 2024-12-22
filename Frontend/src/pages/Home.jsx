import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="w-full md:flex p-8  md:justify-evenly items-center">
          {/* Text Info Section */}
          <div className="info md:w-1/2 space-y-6 md:py-6">
            <p className="text-2xl text-[#673ab7] font-bold">
              We are the world&apos;s best IT company
            </p>
            <h1 className="font-extrabold text-4xl md:text-5xl  leading-tight">
              Welcome to IT World
            </h1>
            <p className="text-base md:text-xl leading-relaxed">
              Explore the latest trends, technologies, and innovations in the
              world of IT. Whether you&apos;re a developer, a tech enthusiast,
              or just curious, you&apos;re in the right place. Let&apos;s build
              the future together!
            </p>{" "}
            <br />
            <NavLink
              to="/register"
              className="bg-[#673ab7] hover:bg-purple-500 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
            >
              Get Started
            </NavLink>
          </div>
          {/* Image Section */}
          <div className="image md:w-1/3 mt-8 md:mt-0">
            <img
              src="/images/hero-home.png"
              alt="Hero"
              width="400"
              height="500"
            />
          </div>
        </section>
        {/* other companies */}
        <section className="px-20 pt-8 shadow-lg bg-slate-100">
          <div className="mb-3 md:w-1/2 md:px-8">
            <p className="font-extrabold text-2xl text-[#673ab7] leading-tight ">
              We are happy they trusted us
            </p>
          </div>
          <div className="p-8 grid md:grid-cols-5 md:gap-x-10 items-center gap-y-5 border-white">
            <div>
              <img src="/images/google.png" alt="Google" className="" />
            </div>
            <div>
              <img src="/images/facebook.png" alt="Facebook" className="" />
            </div>
            <div>
              <img src="/images/amazon.png" alt="Amazon" className="" />
            </div>
            <div>
              <img src="/images/slack.png" alt="Slack" className="" />
            </div>
            <div>
              <img src="/images/logitech.png" alt="Logitech" className="" />
            </div>
          </div>
        </section>

        {/* benefits */}
        <section className="md:flex md:justify-evenly md:space-x-6 p-16">
          <div className="border border-slate-500 p-4 flex flex-col items-center justify-center text-center space-y-4 rounded-xl mb-3">
            <div className="">
              <img src="/images/expertise.png" alt="" />
            </div>
            <h3 className="font-semibold text-xl">Expertise</h3>
            <p>
              Our experts turn complex ideas into solutions,keeping clients
              ahead & ensuring success.
            </p>
          </div>
          <div className="border border-slate-500 p-4 flex flex-col items-center justify-center text-center space-y-4 rounded-xl mb-3">
            <div className="bg-[#FFE5BE] rounded-full pt-2 pb-2 px-1 h-26 w-14">
              <img src="/images/colaboration.png" alt="" width={60} />
            </div>
            <h3 className="font-semibold text-xl">Collaboration</h3>
            <p>
              Promoting collaborative innovation for transformative tech
              solutions, driving success & satisfaction.
            </p>
          </div>
          <div className="border border-slate-500 p-4 flex flex-col items-center justify-center text-center space-y-4 rounded-xl mb-3">
            <div className="bg-[#FFE5BE] rounded-full pt-1 pb-2 px-1 h-14 w-14">
              <img src="/images/result.png" alt="" width={60} />
            </div>
            <h3 className="font-semibold text-xl">Result Driven</h3>
            <p>
              Driven by results, delivering tech solutions that exceed
              expectations and drive success.
            </p>
          </div>
          <div className="border border-slate-500 p-4 flex flex-col items-center justify-center text-center space-y-4 rounded-xl mb-3">
            <img src="/images/customization.png" alt="" />
            <h3 className="font-semibold text-xl">Customization</h3>
            <p>
              Customizing tech solutions for unique needs, ensuring optimal
              performance and satisfaction.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
