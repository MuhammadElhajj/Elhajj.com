import './App.css'
import Home from "./Home/Home";
import Header from './Header/Header';
import About from './About/About';
import Contact from './Contact/Contact';
import ControlPanel from './ControlPanel/ControlPanel';

function App() {
  return (
    <div className="App">
      <Header />
      <ControlPanel />
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
