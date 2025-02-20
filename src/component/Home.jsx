import React from "react";
// import { Link } from 'react-router-dom';
import Header from "../component/Header";
import Footer from "../component/Footer";


const Home = () => {
    return (
      <>
      <Header/>
        <main className="min-h-screen bg-gradient-to-br">
          {/* <HeroSection /> */}
          <div className="w-[87%] mx-auto">
            {/* <JobListingsSection />
            <CompaniesWorkedAt />
            <JobListingsAndSidebar />
            <ResumeFeatureSection />
            <EmailSignupSection /> */}
          </div>
        </main>
        <Footer/>
      </>
    );
  };

  
  export default Home;
  

