import { Features } from "./features";
import { GetStarted } from "./start";
import { Hero } from "./hero";
import { Testimonials } from "./Testimonials";

const Index = () => {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <Hero />
        <Features />
        <Testimonials />
        <GetStarted />
      </div>
    </div>
  );
};

export default Index;
