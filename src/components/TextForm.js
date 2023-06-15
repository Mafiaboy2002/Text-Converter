import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
       
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleUpClick1 = ()=>{
     
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clearOnClick = ()=>{
        let newText = "";
        setText(newText);
    }
    const handleOnChange = (event)=>{
        
        setText(event.target.value)
    }

    const [text, setText] = useState("");
  return (
    <>
    <div className="container my-3 " >
     <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value ={text} onChange= {handleOnChange} id="mybox" rows="3"></textarea>
       </div>
       <button className="btn btn-outline-dark mx-2" onClick={handleUpClick}>To Uppar Case</button>
       <button className="btn btn-outline-dark mx-2"  onClick={handleUpClick1}>To Lower Case</button>
       <button className="btn btn-outline-dark mx-2 my-3"  onClick={clearOnClick}>Clear</button>
    </div>
    <div className ="container  my-9">
        <h2> Your Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p className='p1'>{ 0.008*text.split(" ").length} Minutes to read</p>
    </div>
    </>
  )
}
