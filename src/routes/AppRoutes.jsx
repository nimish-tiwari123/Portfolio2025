import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { appRoutesConstants } from "./appRoutesConstants.js";
import { Home, Projects, AboutContact } from "../pages/index.js";
import { Footer, Navbar } from "../layout/index.js";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);

  return null;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path={appRoutesConstants.home} element={<Home />} />
        <Route path={appRoutesConstants.myWork} element={<Projects />} />
        <Route
          path={appRoutesConstants.aboutContact}
          element={<AboutContact />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
