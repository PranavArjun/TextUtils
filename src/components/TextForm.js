import React, { useState } from 'react'

export default function TextForm(props) {
    const handleClearCase = () => {
        let UpcaseText = '';
        setText(UpcaseText)
    }
    const handleUpCase = () => {
        let UpcaseText = text.toUpperCase();
        setText(UpcaseText)
    }
    const handleLoCase = () => {
        let UpcaseText = text.toLowerCase();
        setText(UpcaseText)
    }
    const handleonChange = (event) => {
        setText(event.target.value)
    }
    const handleCopyCase = () => {
        let newtext = document.getElementById("mybox");
        newtext.select();
        navigator.clipboard.writeText(newtext.value);
    }
    const RemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'rgb(3 12 51)'}} >
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} id="mybox" rows="8" placeholder='Enter Text' style={{ backgroundColor: props.mode === 'dark' ? '#071037' : 'white',color: props.mode === 'dark' ? 'white' : 'rgb(3 12 51)' }}onChange={handleonChange} ></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpCase}> Convert To UpperCase</button>
                <button className='btn btn-primary mx-2' onClick={handleLoCase}> Convert To LowerCase</button>
                <button className='btn btn-primary mx-2' onClick={RemoveExtraSpaces}> Remove Extra Space </button>
                <button className='btn btn-primary mx-2' onClick={handleClearCase}> Clear Text </button>
                <button className='btn btn-primary mx-2' onClick={handleCopyCase}> Copy Text </button>
            </div>

            <div className='container my-4' style={{color: props.mode === 'dark' ? 'white' : 'rgb(3 12 51)'}}>
                <h2> Word Counter </h2>
                <p className='word counter'>
                    <b>{text.split(" ").length}</b> Word  and <b>{text.length} </b>Character .
                </p>
            </div>
            <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'rgb(3 12 51)'}}>
                <h2>Preview</h2>
                <p className='privew'>
                    {text.length>0?text:"Enter the text in above box to Privew"}
                </p>
            </div>
        </>
    )
}
