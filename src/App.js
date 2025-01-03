import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainFile from "./Component/MainFile";
import ChildOne from "./Component/ChildOne";
import Usememoparent from "./Component/usememo/Usememoparent";
import FirstPage from "./tailwind-css-page/FirstPage";
import Navbar from "./tailwind-css-page/Navbar";
import CardShow from "./tailwind-css-page/CardShow";
import FaqSection from "./Stateconcept/FaqSection";
import PasswordHideShow from "./Stateconcept/PasswordHideShow";
import DashboardLayout from "./tailwind-css-page/dynamiclayout/DashboardLayout";
import DashBoard from "./tailwind-css-page/dynamiclayout/pages/DashBoard";
import Profile from "./tailwind-css-page/dynamiclayout/pages/Profile";
import Setting from "./tailwind-css-page/dynamiclayout/pages/Setting";
import Help from "./tailwind-css-page/dynamiclayout/pages/Help";
import Contact from "./tailwind-css-page/dynamiclayout/contact/Contact";
import DashboardLayoutRoutes from "./tailwind-css-page/dynamiclayout/DashboardLayoutRoutes";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     {/* <Route path="/" element={<MainFile />} />
    //     <Route path="/child" element={<ChildOne />} /> */}
    //     {/* <Route path="/" element={<Customhookuse />} /> */}
    //   </Routes>
    // </Router>
    // <Usememoparent />
    <>
      {/* <Navbar /> */}

      {/* First page is allrounder page  */}
      {/* <FirstPage /> */}

      {/* <CardShow /> */}

      {/* DynamicLayout  */}
      <DashboardLayoutRoutes />
    </>
  );
}

export default App;
