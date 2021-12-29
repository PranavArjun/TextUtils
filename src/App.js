import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import React ,{useState}  from 'react';

function App() {
  const  [Mode, setMode] = useState('light')

  const togglemode =()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(3 12 51)';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }

  }
  return (
    <>
      <Navbar title = "TextUtils" mode={Mode} togglemode={togglemode} />
      <div className="container my-4" >
           <TextForm heading = "Enter Your Text Here" mode={Mode}/>
      </div>

    </>
  );
}

export default App;
