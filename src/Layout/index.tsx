import { Outlet } from "react-router-dom";
import Footer from "./footer";
import HeroSection from "./heroSection";
import NavBar from "./navBar";

const AppLayout = () => {
  return (
    <>
      {/* Nav Bar  */}
      <NavBar />

      {/* Hero Section  */}
      <HeroSection />

      <Outlet />

      {/* Footer  */}
      <Footer />
    </>
  );
};

export default AppLayout;

