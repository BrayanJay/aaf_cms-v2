import { Outlet, useLocation } from "react-router-dom";
import SideBar from "./SideBar";

const Layout = () => {
  const location = useLocation();

  // Hide Sidebar for Login & Signup pages
  const hideSidebarRoutes = ["/login"];
  const shouldShowSidebar = !hideSidebarRoutes.includes(location.pathname);

  return (
    <div className="app">
      {shouldShowSidebar && <SideBar />}
      <div className="content">
        <Outlet /> {/* This renders the child route components */}
      </div>
    </div>
  );
};

export default Layout;
