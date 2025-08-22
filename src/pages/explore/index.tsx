import Filter from "../../components/Filter";
import { Jobs } from "./jobs";
import { View } from "./view";

const index = () => {
  return (
    <div className="px-10 flex flex-1 justify-center py-5 min-h-[calc(100vh-60px)]">
      <div className="layout-content-container flex flex-col flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
            Explore Careers
          </p>
        </div>
        <Filter />
        <div className="relative gap-4 px-6 flex flex-1 justify-center py-5 max-h-[calc(100vh-60px)] overflow-y-hidden">
          <Jobs />
          <View />
        </div>
      </div>
    </div>
  );
};

export default index;
