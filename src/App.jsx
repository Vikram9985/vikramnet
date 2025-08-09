import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/content";
import StatsSection from "./components/StatsSection";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Content/>
      <StatsSection/>
      <Portfolio/>
      <Skills/>
      <Testimonial/>
      {/* <section id="home" className="p-10">Home Section</section> */}
    </>
  );
}

export default App;
