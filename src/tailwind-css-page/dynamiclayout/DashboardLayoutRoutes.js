import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";
import DashBoard from "./pages/DashBoard";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Help from "./pages/Help";
import Contact from "./contact/Contact";
import LandingPage from "./landingpage/LandingPage";

const DashboardLayoutRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/dashboard"
        element={
          <DashboardLayout>
            <DashBoard />
          </DashboardLayout>
        }
      />
      <Route
        path="/profile"
        element={
          <DashboardLayout>
            <Profile />
          </DashboardLayout>
        }
      />
      <Route
        path="/settings"
        element={
          <DashboardLayout>
            <Setting />
          </DashboardLayout>
        }
      />
      <Route
        path="/help"
        element={
          <DashboardLayout>
            <Help />
          </DashboardLayout>
        }
      />
      {/* Account Setup Routes */}
      <Route
        path="/contact"
        element={
          <DashboardLayout>
            <Contact />
          </DashboardLayout>
        }
      />
    </Routes>
  );
};

export default DashboardLayoutRoutes;
