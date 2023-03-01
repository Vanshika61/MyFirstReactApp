import "./App.css";
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState('light');     // wheather dark mode is enable or not
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={mode}/>
      <div className="container my-4">
        <TextForm heading="Enter the text to analyze below" />
      </div>
      <About/>
    </>
  );
}

export default App;
