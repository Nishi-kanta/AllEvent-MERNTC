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
import Objectoperation from "./Object_ArrayConcept/Objectoperation";
import TodoApp from "./tailwind-css-page/todo/TodoApp";
import DsLandingPage from "./tailwind-css-page/landing-page-by-deepseek/DsLandingPage";
import Otp from "./tailwind-css-page/otp/Otp";
import PaginatedAPI from "./tailwind-css-page/pagination/PaginatedAPI";
import PaginatedList from "./tailwind-css-page/pagination/PaginatedList";
import DashBoardNavSide from "./tailwind-css-page/responsive-layout-claude/DashBoardNavSide";

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
      {/* <DashboardLayoutRoutes /> */}

      {/*Responsive Layout using claude*/}
      {/* <DashBoardNavSide /> */}

      {/*TodoApp*/}
      {/* <TodoApp /> */}

      {/*DeepSeek Landing Page*/}
      {/* <DsLandingPage /> */}

      {/*OTP page*/}
      {/* <Otp /> */}

      {/*Pagination with API*/}
      {/* <PaginatedAPI /> */}

      {/*Pagination with UI List*/}
      {/* <PaginatedList /> */}

      {/*Object Array Operation*/}
      <Objectoperation/>
    </>
  );
}

export default App;
