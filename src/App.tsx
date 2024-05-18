import React from "react";
import Banner from "./components/Banner/Banner"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Products from './components/Products/Products'
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Testimonials from "./components/Testimonials/Testimonals";
import Footer from "./components/Footer/Footer";

function App() {
   const [orderPopup, setOrderPopup] = React.useState(false);

   const handleOrderPopup = (): any => {
     setOrderPopup(!orderPopup);
   };

    React.useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
      });
      AOS.refresh();
    }, []);
  
  return (
    <div>
      <Navbar />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Testimonials />
      <Footer/>
    </div>
  );
}

export default App
