import Filter from "../../../components/Filter";
import { Item } from "./item";

export const Recommendation = () => {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1 overflow-y-auto">
      <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
        Recommended Jobs
      </h2>
      <Filter />
      <div className="p-4 flex flex-col gap-5">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};
