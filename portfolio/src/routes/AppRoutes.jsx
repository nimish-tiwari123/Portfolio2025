import { BrowserRouter, Routes, Route } from "react-router-dom";
import { appRoutesConstants } from "./appRoutesConstants.js";
import { Home } from "../pages/index.js";
import { Navbar } from "../layout/index.js";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <>
            <Navbar/>
              <Routes>
                <Route path={appRoutesConstants.home} element={<Home />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
