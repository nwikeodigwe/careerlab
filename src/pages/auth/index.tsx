import { Link } from "react-router";
import { Form } from "./form";
import { Google } from "./google";
import { LinkedIn } from "./linkedin";

const Index = () => {
  return (
    <div className="px-40 flex flex-col m-auto flex-1 justify-center py-5 min-h-screen">
      <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5  flex-1 m-auto">
        <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
          Welcome Back!
        </h2>
        <Form />
        <p className="text-[#93adc8] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
          Don't have an account?{" "}
          <Link to="/auth/signup" className="text-blue-500">
            Sign up
          </Link>
        </p>
        <div className="flex items-center gap-2 text-white text-sm font-normal leading-normal pb-3 pt-1 text-center">
          <span className="w-full h-[1px] bg-gray-500"></span>OR
          <span className="w-full h-[1px] bg-gray-500"></span>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <Google text="Sign in" />
          <LinkedIn text="Sign in" />
        </div>
      </div>
    </div>
  );
};

export default Index;
