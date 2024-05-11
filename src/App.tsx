import React from "react";
//import Banner from "./components/Banner/Banner"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"


function App() {
   const [orderPopup, setOrderPopup] = React.useState(false);

   const handleOrderPopup = (): any => {
     setOrderPopup(!orderPopup);
   };

  return (
    <div>
      <Navbar />
      <Hero handleOrderPopup={handleOrderPopup} />
     {/* <Banner/>  */}
      
    </div>
  );
}

export default App
