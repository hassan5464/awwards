import About from "./components/About";
import FeaturedSection from "./components/FeaturedSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import Story from "./components/Story";
import Contact from "./components/Contact";
function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden ">
      <Navbar />
      <Hero />
      <About />
      <FeaturedSection/>
      <Story/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;
