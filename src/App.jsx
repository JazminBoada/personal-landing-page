import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Header />

      <div id="perfil">
        <Profile />
      </div>
      <div id="sobremi">
        <About />
      </div>
      <div id="habilidades">
        <Skills />
      </div>
      <div id="proyectos">
        <Projects />
      </div>

      <div id="contactame">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
