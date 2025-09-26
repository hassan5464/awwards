import About from "./components/About";
import FeaturedSection from "./components/FeaturedSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import Story from "./components/Story";
function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden ">
      <Navbar />
      <Hero />
      <About />
      <FeaturedSection/>
      <Story/>
    </main>
  );
}

export default App;
