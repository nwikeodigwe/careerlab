import React from "react";

const index = () => {
  return (
    <div className="px-40 flex flex-1 justify-center py-5 min-h-[calc(100vh-60px)]">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-white tracking-light text-[32px] font-bold leading-tight">
              Choose Your Path
            </p>
            <p className="text-[#93adc8] text-sm font-normal leading-normal">
              Unlock your potential with our tailored subscription plans.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(228px,1fr))] gap-2.5 px-4 py-3 @3xl:grid-cols-4">
          <div className="flex flex-1 flex-col gap-4 rounded-lg border border-solid border-[#344d65] bg-[#1a2632] p-6">
            <div className="flex flex-col gap-1">
              <h1 className="text-white text-base font-bold leading-tight">
                Explorer
              </h1>
              <p className="flex items-baseline gap-1 text-white">
                <span className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                  Free
                </span>
                <span className="text-white text-base font-bold leading-tight">
                  /month
                </span>
              </p>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#243647] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Get Started</span>
            </button>
            <div className="flex flex-col gap-2">
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-white">
                <div
                  className="text-white"
                  data-icon="Check"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                Basic career assessments
              </div>
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-white">
                <div
                  className="text-white"
                  data-icon="Check"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                Limited job search filters
              </div>
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-white">
                <div
                  className="text-white"
                  data-icon="Check"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                Community support
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4 rounded-lg border border-solid border-[#1265b4] bg-[#1a2632] p-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <h1 className="text-white text-base font-bold leading-tight">
                  Navigator
                </h1>
                <p className="text-white text-xs font-medium leading-normal tracking-[0.015em] rounded-lg bg-[#1773cf] px-3 py-[3px] text-center">
                  Most Popular
                </p>
              </div>
              <p className="flex items-baseline gap-1 text-white">
                <span className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                  $19
                </span>
                <span className="text-white text-base font-bold leading-tight">
                  /month
                </span>
              </p>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#243647] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Upgrade</span>
            </button>
            <div className="flex flex-col gap-2">
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-white">
                <div
                  className="text-white"
                  data-icon="Check"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                Unlimited career assessments
              </div>
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-white">
                <div
                  className="text-white"
                  data-icon="Check"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                Advanced job search filters
              </div>
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-white">
                <div
                  className="text-white"
                  data-icon="Check"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                Priority email support
              </div>
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-white">
                <div
                  className="text-white"
                  data-icon="Check"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                Exclusive content access
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4 rounded-lg border border-solid border-[#344d65] bg-[#1a2632] p-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <h1 className="text-white text-base font-bold leading-tight">
                  Trailblazer
                </h1>
                <p className="text-white text-xs font-medium leading-normal tracking-[0.015em] rounded-lg bg-[#1773cf] px-3 py-[3px] text-center">
                  Best Value
                </p>
              </div>
              <p className="flex items-baseline gap-1 text-white">
                <span className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                  $49
                </span>
                <span className="text-white text-base font-bold leading-tight">
                  /month
                </span>
              </p>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#243647] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Upgrade</span>
            </button>
            <div className="flex flex-col gap-2">
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-white">
                <div
                  className="text-white"
                  data-icon="Check"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                All Navigator features
              </div>
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-white">
                <div
                  className="text-white"
                  data-icon="Check"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                Personalized career coaching
              </div>
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-white">
                <div
                  className="text-white"
                  data-icon="Check"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                VIP customer support
              </div>
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-white">
                <div
                  className="text-white"
                  data-icon="Check"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                Early access to new features
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
