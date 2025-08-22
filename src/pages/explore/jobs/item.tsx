export const Item = () => {
  return (
    <div className="relative flex items-stretch gap-4  hover:bg-[#243647]/20 p-2 rounded-md">
      <div className="h-full">
        <div
          className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg h-16 w-16"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-n4f9f4rRvTIVBF0LZB03vzD6bmjVSUaDnxtVpacKXf4hYJcaVcWfWKJgJ9J-R2K9tpGfcyTcYCGjA84v4-S9BkYMlOeNdmGTUx7afeMKMuir17EX-dw19Q_J6moPbCu1T1qquAgVw7M0ZfDo0flBarBsjc5ZCvj1I3DTrsbQWbECLHWwIElWOZc7KUaKzoGFhUTU3I84JUJ0CbOgiRVo-h6QXXxcdN_ueN84tri6rM7hBN35vVKF33pn4zAihXsj9Xj-0M5h2Oo")',
          }}
        ></div>
      </div>
      <div className="flex flex-col justify-between gap-4 w-full">
        <div className="flex flex-col gap-1">
          <p className="text-2xl font-medium text-white leading-tight">
            Software Engineer
          </p>
          <p className="text-[#93adc8] text-sm font-normal leading-tight">
            Tech Innovators Inc. - San Francisco, CA
          </p>
        </div>
        <p className="text-xs font-normal leading-tight text-[#93adc8]">
          Posted on Aug 13
        </p>
        <div className="flex items-center gap-4">
          <button className=" border-none outline-none flex-1 text-white hover:underline text-sm">
            <span className="truncate">View Job</span>
          </button>
          <button className="flex flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-sm px-4 flex-row-reverse hover:bg-[#243647] border border-[#243647] text-white font-medium leading-normal h-10 text-sm">
            <span className="truncate">Apply now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
