import React,{useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");
  //setText("New");
  const handleUpClick=()=>
  {
    // console.log("Upper was Clicked "+ text);
    let newText=text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("All Characters are changed to UpperCase.");
  }
  const handleOnChange=(event)=>
  {
    // console.log("On change");
    setText(event.target.value);
  }
  const handleLowClick=()=>
  {
    // console.log("lower was clicked "+text)
    let newText=text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("All Characters are changed to LowerCase.");
  }
  const handleClearClick=()=>
  {
    setText("");
    props.showAlert("Text has been Deleted");
  }
  const handleCopy=()=>
  {
    var text=document.getElementById('my-box');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied!");
  }
  const handleSpaces=()=>
  {
    var newtxt=text.split(/[ ]+/);
    setText(newtxt.join(" "))
    props.showAlert("Spaces has been removed Successfully");
  }
  return (
    <>
    <div className="con">
      <h3 className={`text-${props.mode==='light'?'#042743':'light'}`}>{props.heading}</h3>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='light'?'light':'white'}} id="my-box" rows="10"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="txt">
        <h1 className={`text-${props.mode==='light'?'#042743':'light'}`}>Details</h1>
        <p className={`text-${props.mode==='light'?'#042743':'light'}`}>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words, {text.length} characters</p>
    </div>
    </>
  )
}
