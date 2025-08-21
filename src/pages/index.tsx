import { Outlet, useLocation } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#111a22] dark group/design-root overflow-x-hidden">
      <Header />
      <Outlet />
      {!location.pathname.startsWith("/dashboard") && <Footer />}
    </div>
  );
};

export default Index;
