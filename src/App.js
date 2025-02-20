import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./component/LoginPage";
import Signup from "./component/Signup";
import Home from "./component/Home";
// import Header from "./component/Header";
// import Dashboard from "./component/Dashboard";
// import Footer from "./component/Footer";
// import Filters from "./component/Filters";
// import JobList from "./component/JobList";
// import RightSidebar from "./component/RightSidebar";
// import Sidebar from "./component/Sidebar";



function App() {
  return (
    <>
      <Router> 
        {/* <Header/> */}
        <Routes> 
        
          <Route path="/" element={<Home  />} /> 
          <Route path="/LoginPage" element={<LoginPage />} /> 
          <Route path="/Signup" element={<Signup  />} /> 
        
      </Routes> 
      {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;

