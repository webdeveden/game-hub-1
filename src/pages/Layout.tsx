import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      {/* a placeholder for child components */}
      <Outlet />
    </>
  );
};

export default Layout;
