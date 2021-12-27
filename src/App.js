import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';

function App() {
  return (
    <>
      <Navbar title = "TextUtils" />
      <div className="container my-4" >
           <TextForm heading = "Enter Your Text Here" />
      </div>

    </>
  );
}

export default App;
