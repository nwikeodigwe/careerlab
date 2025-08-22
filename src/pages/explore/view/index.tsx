import { Content } from "./content";
import { Header } from "./header";

export const View = () => {
  return (
    <div className="relative layout-content-container flex flex-col max-w-[960px] flex-1 overflow-y-auto text-white p-3">
      <Header />
      <Content />
    </div>
  );
};
