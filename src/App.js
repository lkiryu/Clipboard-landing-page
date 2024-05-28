import React from "react";
import Header from "./components/header/header";
import SectionKeepTrack from "./components/sectionKeepTrack/sectionKeepTrack";
import SectionAccess from "./components/sectionAccess/sectionAccess";
import SectionSupercharge from "./components/sectionSupercharge/sectionSupercharge";
import SectionClipboard from "./components/sectionClipboard/sectionClipboard";
import Footer from "./components/footer/footer";

import './App.css';

function App() {
  return (
    <div className="container">
      <Header />

      <SectionKeepTrack />

      <SectionAccess />

      <SectionSupercharge />

      <SectionClipboard />

      <Footer />
    </div>
  );
}

export default App;
