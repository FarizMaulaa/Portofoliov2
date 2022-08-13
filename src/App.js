import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Lotties from "./Lotties";
import Content from "./Content1";

function App() {
  return (
    <div className="dark:bg-[#2d2d2d] dark:text-white">
      <Navbar />
      <div className="mx-3">
        <Lotties />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
