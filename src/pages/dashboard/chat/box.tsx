import { GrMicrophone } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { TiArrowUpThick } from "react-icons/ti";

const Box = () => {
  return (
    <div className="absolute bottom-0 w-full flex items-center px-4 py-3 gap-3 @container">
      <div className="flex flex-col min-w-40 h-12 flex-1">
        <div className="flex items-center w-full flex-1 rounded-lg h-full bg-[#243647] px-2">
          <button
            aria-label="Add file"
            className="flex items-center justify-center p-2 hover:bg-gray-500/20 rounded-full h-8 w-8 text-white"
            data-icon="Microphone"
            data-size="20px"
            data-weight="regular"
          >
            <IoMdAdd />
          </button>
          <input
            placeholder="How can I help you?"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none  focus:border-none h-full placeholder:text-[#93adc8] px-4 rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
          />
          <div className="flex border-none items-center justify-center rounded-r-lg border-l-0 ">
            <div className="flex items-center gap-4 justify-end">
              <div className="flex items-center gap-1">
                <button
                  className="flex items-center justify-center p-2 hover:bg-gray-500/20 rounded-full text-white"
                  data-icon="Microphone"
                  data-size="20px"
                  data-weight="regular"
                >
                  <GrMicrophone />
                </button>
                <button
                  className="flex items-center justify-center p-2 bg-gray-500/20 rounded-full text-white"
                  data-icon="Microphone"
                  data-size="20px"
                  data-weight="regular"
                >
                  <TiArrowUpThick />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
