import { useState } from "react";
import { Save } from "./save";

export const Item = () => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="relative flex items-stretch gap-4  hover:bg-[#243647]/20 p-2 rounded-md">
      <Save
        isSaved={isSaved}
        onClick={() => setIsSaved((prev) => !prev)}
        className="absolute top-2 right-2"
      />
      <div
        className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg h-40 w-40"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-n4f9f4rRvTIVBF0LZB03vzD6bmjVSUaDnxtVpacKXf4hYJcaVcWfWKJgJ9J-R2K9tpGfcyTcYCGjA84v4-S9BkYMlOeNdmGTUx7afeMKMuir17EX-dw19Q_J6moPbCu1T1qquAgVw7M0ZfDo0flBarBsjc5ZCvj1I3DTrsbQWbECLHWwIElWOZc7KUaKzoGFhUTU3I84JUJ0CbOgiRVo-h6QXXxcdN_ueN84tri6rM7hBN35vVKF33pn4zAihXsj9Xj-0M5h2Oo")',
        }}
      ></div>
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
        <div className="flex items-center gap-2 border">
          <button className="flex flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-sm px-4 flex-row-reverse hover:bg-[#243647] border border-[#243647] text-white text-sm font-medium leading-normal h-14">
            <span className="truncate">Apply now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
