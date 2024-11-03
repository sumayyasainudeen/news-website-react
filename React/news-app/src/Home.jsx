import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import leftAd from './images/side1.jpeg';  // Import left ad image
import rightAd from './images/side2.jpeg'; // Import right ad image
import './App.css'; // Import custom styles

function Home() {
  return (
    <>
      <div className="">
        <div className="row no-gutters">
          
          {/* Left Sidebar */}
          <div className="col-md-1 d-none d-md-block">
            <div className="side-image left-side">
              <img src={rightAd} alt="Left Ad" />
            </div>
          </div>
          
          {/* Main Content */}
          <div className="col-md-10 ">
            <NavBar />
            <div className="body-content">
              <p>Body</p>
            </div>
            <Footer />
          </div>
          
          {/* Right Sidebar */}
          <div className="col-md-1 d-none d-md-block">
            <div className="side-image right-side">
              <img src={rightAd} alt="Right Ad" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;
