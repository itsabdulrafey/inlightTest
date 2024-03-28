import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import LandingPageVTwo from "pages/LandingPageVTwo";
import MyComponent from "./testAnimation";
function App() {
  return (
    <Router>
      <LandingPageVTwo />
    </Router>
    // <>
    
    // {/* <MyComponent/> */}
    // </>
  );
}

export default App;
