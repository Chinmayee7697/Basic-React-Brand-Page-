import React from "react";
import Navbar from "./components/Navbar";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

function App(){
  return <div>
  <Navbar />

  <div>
  <div className="main-content">
    <LeftSide />
    <RightSide />
    </div>
  </div>
  </div>
}

export default App;