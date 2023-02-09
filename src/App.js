import "./App.css";
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" />
      <div className="container my-4">
        <TextForm heading="Enter the text to analyze below" />
      </div>
      <About/>
    </>
  );
}

export default App;
