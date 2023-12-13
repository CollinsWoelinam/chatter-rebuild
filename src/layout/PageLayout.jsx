import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";

const PageLayout = () => {
  return (
    <div className="w-screen min-h-screen bg-gray-100 pb-20">
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default PageLayout;
