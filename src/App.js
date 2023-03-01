import "./App.css";
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm";
// import About from "./components/About";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState('light');     // wheather dark mode is enable or not
  const [btnText, setBtnText] = useState('Enable DarkMode');

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark')
      setBtnText('Enable LightMode')
      document.body.style.backgroundColor = '#042743'
    }
    else{
      setMode('light')
      setBtnText('Enable DarkMode')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText} />
      <div className="container my-4">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
