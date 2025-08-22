const index = () => {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-[612px] max-w-[512px] py-5 flex-1 mx-auto">
        <h2 className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72 text-center">
          Create Job Post
        </h2>
        <fieldset className="flex flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-white text-base font-medium leading-normal pb-2">
              Job Title
            </p>
            <input
              placeholder="e.g., Software Engineer"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#344d65] bg-[#1a2632] focus:border-[#344d65] h-14 placeholder:text-[#93adc8] p-[15px] text-base font-normal leading-normal"
              value=""
            />
          </label>
        </fieldset>
        <fieldset className="flex flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-white text-base font-medium leading-normal pb-2">
              Company Name
            </p>
            <input
              placeholder="e.g., Tech Innovators Inc."
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#344d65] bg-[#1a2632] focus:border-[#344d65] h-14 placeholder:text-[#93adc8] p-[15px] text-base font-normal leading-normal"
            />
          </label>
        </fieldset>
        <fieldset className="flex flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-white text-base font-medium leading-normal pb-2">
              Location
            </p>
            <input
              placeholder="e.g., San Francisco, CA"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#344d65] bg-[#1a2632] focus:border-[#344d65] h-14 placeholder:text-[#93adc8] p-[15px] text-base font-normal leading-normal"
              value=""
            />
          </label>
        </fieldset>
        <fieldset className="flex flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-white text-base font-medium leading-normal pb-2">
              Salary Range (From)
            </p>
            <input
              placeholder="e.g., 80,000"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#344d65] bg-[#1a2632] focus:border-[#344d65] h-14 placeholder:text-[#93adc8] p-[15px] text-base font-normal leading-normal"
              value=""
            />
          </label>
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-white text-base font-medium leading-normal pb-2">
              Salary Range (To)
            </p>
            <input
              placeholder="e.g., 120,000"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#344d65] bg-[#1a2632] focus:border-[#344d65] h-14 placeholder:text-[#93adc8] p-[15px] text-base font-normal leading-normal"
              value=""
            />
          </label>
        </fieldset>
        <fieldset className="flex flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-white text-base font-medium leading-normal pb-2">
              Employment Type
            </p>
            <select className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#344d65] bg-[#1a2632] focus:border-[#344d65] h-14 bg-[image:--select-button-svg] placeholder:text-[#93adc8] p-[15px] text-base font-normal leading-normal">
              <option value="one">Select Type</option>
              <option value="two">two</option>
              <option value="three">three</option>
            </select>
          </label>
        </fieldset>
        <fieldset className="flex flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-white text-base font-medium leading-normal pb-2">
              Benefits
            </p>
            <textarea
              placeholder="List benefits offered, e.g., Health Insurance, 401k, Paid Time Off"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#344d65] bg-[#1a2632] focus:border-[#344d65] min-h-36 placeholder:text-[#93adc8] p-[15px] text-base font-normal leading-normal"
            ></textarea>
          </label>
        </fieldset>
        <fieldset className="flex flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-white text-base font-medium leading-normal pb-2">
              Job Description
            </p>
            <textarea
              placeholder="Provide a detailed description of the job responsibilities and requirements"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#344d65] bg-[#1a2632] focus:border-[#344d65] min-h-36 placeholder:text-[#93adc8] p-[15px] text-base font-normal leading-normal"
            ></textarea>
          </label>
        </fieldset>
        <fieldset className="flex px-4 py-3 justify-end">
          <button className="flex items-center justify-center  cursor-pointer overflow-hidden rounded-md h-14 border border-[#344d65] text-white text-sm font-bold leading-normal tracking-[0.015em] w-full hover:border-none hover:bg-[#1a2632]">
            <span className="truncate">Post Job</span>
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default index;
