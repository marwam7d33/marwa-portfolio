import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
