import { Outlet } from "react-router";
import Header from "../components/header";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#111a22] dark group/design-root overflow-x-hidden border">
      <Header />
      <Outlet />
      {!location.pathname.startsWith("/dashboard") && <Footer />}
    </div>
  );
};

export default Index;
