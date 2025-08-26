import { Link } from "react-router";

const Unauthorized = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="flex flex-col items-center">
        <img
          className="w-[400px]"
          src="/src/assets/images/unauthorized.svg"
          alt=""
        />
        <div className="mt-[-40px]  flex flex-col items-center">
            <p className="text-xl text-red-500 font-bold">Unauthorized</p>
        <span>
          Back to <Link to={"/"} className="text-second font-bold">Home</Link>
        </span>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
