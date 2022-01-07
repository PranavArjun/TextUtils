import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alart from './components/Alert';
import './App.css';
import React ,{useState}  from 'react';

function App() {
  const  [Mode, setMode] = useState('light')
  const [alert, setalert] = useState(null)

  const showAlert =(message , type)=>{
    setalert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const togglemode =()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(2 10 43)';
      showAlert("Dark Mode Activated", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Activated", "success")
    }

  }
  return (
    <>
      <Navbar title = "TextUtils" mode={Mode} togglemode={togglemode}  />
      <Alart alert ={alert} />
      <div className="container my-4" >
           <TextForm heading = "Enter Your Text Here" mode={Mode} showAlert={showAlert}/>
      </div>

    </>
  );
}

export default App;
