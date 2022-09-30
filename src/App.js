import React from "react";
import Cardfilm from "./Cardfilm";
import Content from "./Content";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <div className="bg-[url('../src/images/bg/main.jpg')] h-[100vh] bg-no-repeat bg-fixed bg-cover">
        <Navbar />
        <Content />
      </div>
      <div className="bg-[url('../src/images/bg/main.jpg')] h-[220vh] bg-no-repeat bg-fixed bg-cover">
        <Cardfilm />
        <div className="bottom-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
