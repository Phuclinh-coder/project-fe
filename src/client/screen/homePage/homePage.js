import React from "react";
import { Outlet } from "react-router-dom";
import "./homePage.css";
import {
  Header,
  Slider,
  News,
  Cour,
  Contest,
  Doccument,
  Footer,
} from "../../../components/index.component";
import ScrollToTop from "react-scroll-to-top";
import NEW2 from "../news2";
const HomePage = () => {
  return (
    <div>
      <ScrollToTop smooth />
      <Header />
      <div className="container-homepage">
        <Slider className="slider-mg" />
        
        <News />
        <NEW2></NEW2>
        <Cour />
        <Contest />
        <Doccument />
      </div>
      <Footer />
      <Outlet />
    </div>
  );
};

export default HomePage;
