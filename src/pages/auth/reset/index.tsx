import { Link } from "react-router";
import Form from "./form";

const index = () => {
  return (
    <div className="px-40 flex flex-col m-auto flex-1 justify-center py-5 min-h-screen">
      <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 m-auto flex-1">
        <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
          Reset Password
        </h2>
        <Form />
        <p className="text-[#93adc8] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
          Already have an account?{" "}
          <Link to="/auth" className="text-blue-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default index;
