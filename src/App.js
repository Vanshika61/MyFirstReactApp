import "./App.css";
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm";
// import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light');     // wheather dark mode is enable or not
  const [btnText, setBtnText] = useState('Enable DarkMode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setAlert (null);
    },1200);
  }

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark')
      setBtnText('Enable LightMode')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
      
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now';
      // }, 1500);
    }
    else{
      setMode('light')
      setBtnText('Enable DarkMode')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText} />
      <Alert alert={alert} />
      <div className="container my-4">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
