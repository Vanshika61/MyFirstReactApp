import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick =()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick =()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    // const handleTitleClick =(text)=>{
                 
    // }
    
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText)
    }
    const handleOnChange =(event)=>{
        // console.log("On Change")
        setText(event.target.value)
    }
//   text = "new text";                 // wrong way to change the text
//   setText = ("new text");               // Correct way to change the text
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
      <button className="btn btn-success mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
      {/* <button className="btn btn-success mx-1" onClick={handleTitleClick} >Convert to Title Case</button> */}
      <button className="btn btn-danger mx-1" onClick={handleClearClick} >Clear text</button>
    </div>
    <div className="container my-3">
        <h2>Your text Summary</h2>
        <p> {text.split(".").length} Sentences</p>
        <p> {text.split(" ").length} Words</p>
        <p> {text.length} Characters</p>
        <p> {0.008 * text.split(" ").length} minutes to read </p>
        <h3>Perview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
