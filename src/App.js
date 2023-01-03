import AOS from "aos";
import { useEffect } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
