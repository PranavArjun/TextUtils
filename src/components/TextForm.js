import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpCase= ()=>{
        let UpcaseText = text.toUpperCase();
        setText(UpcaseText)
    }
    const handleonChange =(event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text}  id="mybox" rows="8" placeholder='Enter Text' onChange={handleonChange} ></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpCase}> Convert To UpperCase</button>
        </div>
    )
}
