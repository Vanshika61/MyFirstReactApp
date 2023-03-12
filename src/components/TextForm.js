import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick =()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to uppercase', 'success');
      }
      const handleLoClick =()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to lowercase', 'success');
      }
      // const handleTitleClick =(text)=>{
        
        // }
      const handleCopy = ()=>{
          var text = document.getElementById("myText");
          text.select();
          navigator.clipboard.writeText(text.value);
          props.showAlert('Copied to clipboard', 'success');
      }
        
      const handleExtraSpaces = ()=>{
          let newText = text.split(/[ ]+/);
          setText(newText.join(" "))
          props.showAlert('Extraspaces has been removed', 'success');
      }
        
      const handleClearClick = ()=>{
          let newText = "";
          setText(newText)
          props.showAlert('Text has been Cleared', 'success');
      }
    const handleOnChange =(event)=>{
        // console.log("On Change")
        setText(event.target.value)
    }
//   text = "new text";                 // wrong way to change the text
//   setText = ("new text");               // Correct way to change the text
  return (
    <>
    <div className='container' style={{color : props.mode==='dark'?'white':'black'}}>
        <h1 className='mb-4'>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'#042743':'white', color : props.mode==='dark'?'white':'black'}} id="myText" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
      <button className="btn btn-success mx-1 my-1" onClick={handleLoClick} >Convert to Lowercase</button>
      {/* <button className="btn btn-success mx-1 my-1" onClick={handleTitleClick} >Convert to Title Case</button> */}
      <button className="btn btn-danger mx-1 my-1" onClick={handleClearClick} >Clear text</button>
      <button className="btn btn-info mx-1 my-1" onClick={handleCopy} >Copy text</button>
      <button className="btn btn-secondary mx-1 my-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
        <h2>Your text Summary</h2>
        <p> {text.split(".").filter((element)=>{return element.length !== 0 }).length} Sentences</p>
        <p> {text.split(" ").filter((element)=>{return element.length !== 0 }).length} Words</p>
        <p> {text.length} Characters</p>
        <p> {0.008 * text.split(" ").filter((element)=>{return element.length !== 0 }).length} minutes to read </p>
        <h3>Perview</h3>
        <p>{text.length>0?text:'Enter something in the above textbox to preview it here.'}</p>
    </div>
    </>
  )
}
