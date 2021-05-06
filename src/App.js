import React from 'react';
import './App.css';

import { Header } from './components/header/header.component';
import { Footer } from "./components/footer/footer.component";
import { About } from './components/about/about.component';

function App() {
  return (
    <div className="App">
      <Header  className="Header"/>
      <About />
      <Footer />
    </div>
  );
}

export default App;
