const Filter = () => {
  return (
    <div className="flex items-center gap-2 my-4 px-5">
      <select
        name=""
        id=""
        className="bg-[#243647] rounded-sm h-10 px-4 text-white"
      >
        <option selected disabled>
          Industries
        </option>
        <option value="">All</option>
        <option value="">All</option>
      </select>
      <select
        name=""
        id=""
        className="bg-[#243647] rounded-sm h-10 px-4 text-white"
      >
        <option selected disabled>
          Roles
        </option>
        <option value="">All</option>
        <option value="">All</option>
      </select>
      <select
        name=""
        id=""
        className="bg-[#243647] rounded-sm h-10 px-4 text-white"
      >
        <option selected disabled>
          Experience
        </option>
        <option value="">All</option>
        <option value="">All</option>
      </select>
      <select
        name=""
        id=""
        className="bg-[#243647] rounded-sm h-10 px-4 text-white"
      >
        <option selected disabled>
          Salary Range
        </option>
        <option value="">All</option>
        <option value="">All</option>
      </select>
    </div>
  );
};

export default Filter;
