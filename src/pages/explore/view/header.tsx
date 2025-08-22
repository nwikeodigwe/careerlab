import { Link } from "react-router";

export const Header = () => {
  return (
    <div className="flex flex-col gap-2">
      <Link
        to="/company"
        className="uppercase text-xs font-light hover:underline"
      >
        PNC
      </Link>
      <h2 className="text-2xl">Loan Support Analyst Sr - Midland</h2>
      <p className="text-sm font-light text-gray-500">
        1 week ago • Flexible / Remote
      </p>

      <button className="flex  cursor-pointer items-center justify-center overflow-hidden rounded-sm px-4 flex-row-reverse hover:bg-[#243647] border border-[#243647] text-white text-sm font-medium leading-normal h-14 mt-5">
        Apply on company website
      </button>
    </div>
  );
};
