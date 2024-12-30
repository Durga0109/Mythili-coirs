import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Products from "./Components/Products/Products";
import Features from "./Components/Features/Features";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer";
const App = () => {
  return(
    <main className="overflow-x-hidden">
    <Navbar /> 
    <Hero />
    <About />
    <Products />
    <Features />
    <Gallery />
    <Contact />
    <Footer />
    </main>
 
  );
};
export default App;
