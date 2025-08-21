import { FaPlus } from "react-icons/fa";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#243647] px-10 py-3">
      <div className="flex items-center gap-4 text-white">
        <div className="size-4">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          CareerLabs
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link
            className="text-white text-sm font-medium leading-normal"
            to="/"
          >
            Home
          </Link>
          <Link
            to="/explore"
            className="text-white text-sm font-medium leading-normal"
          >
            Explore
          </Link>
          <Link
            to="/pricing"
            className="text-white text-sm font-medium leading-normal"
          >
            Pricing
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link
            title="Post a job"
            to="/hire"
            className="rounded-full h-10 w-10 flex items-center justify-center bg-gray-500/10 text-white"
          >
            <FaPlus className="size-5" />
          </Link>
          <Link
            to="/auth/signup"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#1773cf] text-white text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Start free trial</span>
          </Link>
          <Link
            to="/auth"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 text-[#1773cf] text-sm font-bold leading-normal tracking-[0.015em] border border-solid border-[#1773cf]"
          >
            <span className="truncate">Login</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
