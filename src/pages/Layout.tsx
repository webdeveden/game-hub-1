import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      {/* a placeholder for child components */}
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
