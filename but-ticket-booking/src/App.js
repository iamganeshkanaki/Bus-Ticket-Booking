// App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.js';
// import SearchPage from './SearchPage'; // Create this component for the search page
// import LoginPage from './LoginPage'; // Create this component for the login page
// import SignupPage from './SignupPage'; // Create this component for the signup page

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />
        {/* <Route path="/search" component={SearchPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} /> */}
      </Routes>
    </>
  );
}

export default App;
