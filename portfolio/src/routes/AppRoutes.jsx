import { BrowserRouter, Routes, Route } from "react-router-dom";
import { appRoutesConstants } from "./appRoutesConstants.js";
import { Home, Projects, AboutContact } from "../pages/index.js";
import { Footer, Navbar } from "../layout/index.js";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path={appRoutesConstants.home} element={<Home />} />
                <Route
                  path={appRoutesConstants.myWork}
                  element={<Projects />}
                />
                <Route
                  path={appRoutesConstants.aboutContact}
                  element={<AboutContact />}
                />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
