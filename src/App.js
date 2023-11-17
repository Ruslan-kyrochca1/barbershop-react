import React from "react";
import "./scss/style.scss";
import Header from "./components/Header";
import About from "./components/About";
import Advantages from "./components/Advantages";
import Services from "./components/Services";
import Example from "./components/Example";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Advantages/>
      <Services/>
      <Example/>
      <Footer/>
    </div>
  );
}

export default App;
