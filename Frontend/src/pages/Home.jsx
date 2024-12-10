import { useAuth } from "../store/auth";

function Home() {
  const { user } = useAuth();
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="w-full md:flex p-8  text-slate-300 md:justify-evenly items-center">
          {/* Text Info Section */}
          <div className="info md:w-1/2 space-y-6 md:py-6">
            <p className="text-lg text-white font-semibold">
              Welcome,{user ? ` ${user.username}` : `to our website`}
            </p>
            <p className="text-lg text-purple-400 font-semibold">
              We are the world&apos;s best IT company
            </p>
            <h1 className="font-extrabold text-4xl md:text-5xl text-white leading-tight">
              Welcome to IT World
            </h1>
            <p className="text-base md:text-lg leading-relaxed">
              Explore the latest trends, technologies, and innovations in the
              world of IT. Whether you&apos;re a developer, a tech enthusiast,
              or just curious, you&apos;re in the right place. Let&apos;s build
              the future together!
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
              <a href="/register">Get Started</a>
            </button>
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
        <section className="px-20 pt-8 bg-slate-800 shadow-xl">
          <div className="mb-3 md:w-1/2 md:px-8">
            <p className="font-extrabold text-2xl text-purple-400 leading-tight">
              We are happy they trusted us
            </p>
          </div>
          <div className="p-8 grid md:grid-cols-5 md:gap-x-10 items-center gap-y-5">
            <div>
              <img src="/images/google.png" alt="Google" />
            </div>
            <div>
              <img src="/images/facebook.png" alt="Facebook" />
            </div>
            <div>
              <img src="/images/amazon.png" alt="Amazon" />
            </div>
            <div>
              <img src="/images/slack.png" alt="Slack" />
            </div>
            <div>
              <img src="/images/logitech.png" alt="Logitech" />
            </div>
          </div>
        </section>

        {/* benefits */}
        <section className="md:flex md:justify-evenly md:space-x-6 p-16 text-slate-300">
          <div className="border p-4 flex flex-col items-center justify-center text-center space-y-4 rounded-xl mb-3">
            <div className="">
              <img src="/images/expertise.png" alt="" />
            </div>
            <h3 className="font-semibold text-xl">Expertise</h3>
            <p>
              Our experts turn complex ideas into solutions,keeping clients
              ahead & ensuring success.
            </p>
          </div>
          <div className="border p-4 flex flex-col items-center justify-center text-center space-y-4 rounded-xl mb-3">
            <div className="bg-[#FFE5BE] rounded-full pt-2 pb-2 px-1 h-26 w-14">
              <img src="/images/colaboration.png" alt="" width={60} />
            </div>
            <h3 className="font-semibold text-xl">Collaboration</h3>
            <p>
              Promoting collaborative innovation for transformative tech
              solutions, driving success & satisfaction.
            </p>
          </div>
          <div className="border p-4 flex flex-col items-center justify-center text-center space-y-4 rounded-xl mb-3">
            <div className="bg-[#FFE5BE] rounded-full pt-1 pb-2 px-1 h-14 w-14">
              <img src="/images/result.png" alt="" width={60} />
            </div>
            <h3 className="font-semibold text-xl">Result Driven</h3>
            <p>
              Driven by results, delivering tech solutions that exceed
              expectations and drive success.
            </p>
          </div>
          <div className="border p-4 flex flex-col items-center justify-center text-center space-y-4 rounded-xl mb-3">
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
