import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
