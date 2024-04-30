import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import LandingPageVTwo from "pages/LandingPageVTwo";
import DesktopEightPage from "pages/DesktopEight";
import MyComponent from "./testAnimation";
import DesktopEighteenPage from "pages/DesktopEighteen";
function App() {
  return (
    <Router>
      <DesktopEighteenPage />
    </Router>
    // <>
    
    // {/* <MyComponent/> */}
    // </>
  );
}

export default App;
