import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar"; // Import your NavBar component
import Home from "./Home"; // Import your Home component
import Service from "./Services"; // Import your Service component
import ContactUs from "./ContactUs"; // Import your ContactUs component
import RegistrationForm from "./Forms/RegistrationForm";
import CarouselExample from "./Carousel";

const App = () => {
  // Define a state to manage whether to render the RegistrationForm
  const [renderRegistrationForm, setRenderRegistrationForm] = useState(true);

  useEffect(() => {
    // Use setTimeout to render the RegistrationForm after 5 seconds
    const timer = setTimeout(() => {
      setRenderRegistrationForm(true);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div className="App">
      {/* Render the RegistrationForm conditionally based on state */}
      {/* {renderRegistrationForm && <RegistrationForm />} */}
      <BrowserRouter>
        {/* Render the NavBar component */}
        <NavBar />
        {/* Define routes using Routes and Route components */}
        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<Home />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
