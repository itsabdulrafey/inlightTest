import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import LandingPageVTwo from "pages/LandingPageVTwo";
import DesktopEightPage from "pages/DesktopEight";
import MyComponent from "./testAnimation";
import Registeration from "pages/Registeration";
function App() {
  return (
    <Router>
      <Registeration />
    </Router>
    // <>
    
    // {/* <MyComponent/> */}
    // </>
  );
}

export default App;
