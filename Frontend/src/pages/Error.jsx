import { NavLink } from "react-router-dom";

function Error() {
  return (
    <section className=" space-y-6 text-center min-h-screen flex flex-col md:mt-16 items-center">
      <img
        src="/images/error.png"
        alt=""
        height="300"
        width="300"
        className=""
      />
      <h1 className="text-5xl font-extrabold leading-tight">404 error</h1>
      <p className=" text-xl">
        We can&apos;t seem to find the page you&apos;re looking for. It might
        have been removed, renamed, or simply doesn&apos;t exist.
      </p>
      <button
        type="submit"
        className=" p-2  text-white py-2 rounded-md hover:bg-purple-400 transition"
        style={{ backgroundColor: "#673ab7" }}
      >
        <NavLink to="/"> Go back to the homepage</NavLink>
      </button>
    </section>
  );
}

export default Error;
