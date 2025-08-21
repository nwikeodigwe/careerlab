const Form = () => {
  return (
    <form>
      <fieldset className="flex max-w-full flex-wrap items-end gap-4 py-3">
        <label htmlFor="email" className="flex flex-col min-w-40 flex-1">
          <p className="text-white text-base font-medium leading-normal pb-2">
            Email Address
          </p>
          <input
            placeholder="Enter your username"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#344d65] bg-[#1a2632] focus:border-[#344d65] h-14 placeholder:text-[#93adc8] p-[15px] text-base font-normal leading-normal"
            value=""
          />
        </label>
      </fieldset>
      <fieldset className="flex py-3">
        <button className="flex min-w-[84px] max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg px-4 flex-1 bg-[#1773cf] text-white text-sm font-bold leading-normal tracking-[0.015em] h-14">
          <span className="truncate">Reset Password</span>
        </button>
      </fieldset>
    </form>
  );
};

export default Form;
