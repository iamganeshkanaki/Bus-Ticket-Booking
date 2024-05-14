// Home.js

import React from 'react';
import './Home.css'; // Import the CSS file for styling
import busImage from '../../Static/Images/bus.jpg'; // Import the bus image

function Home() {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to our Bus Booking System</h1>
        <nav>
          <ul>
            <li><a href="#search">Search Buses</a></li>
            <li><a href="#login">Login</a></li>
            <li><a href="#signup">Sign Up</a></li>
          </ul>
        </nav>
      </header>
      <div className="search-bar" id="search">
        <input type="text" placeholder="Search for buses..." />
        <button>Search</button>
      </div>
      <main>
        <section className="intro-section">
          <div className="bus-image-container">
            <img src={busImage} alt="Bus" className="bus-image" />
          </div>
        </section>
        <section className="about-section">
          <h2>About Us</h2>
          <p>Welcome to our bus booking system. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Bus Booking System</p>
      </footer>
    </div>
  );
}

export default Home;
