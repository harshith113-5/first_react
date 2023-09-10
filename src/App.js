//import logo from './logo.svg';
import './App.css';
import Navbar from './comp/6.Navbar.js';
import TextForm from './comp/7.TextField.js';
// import About from './comp/10.About.js';
import React,{useState} from 'react';
import Alert from './comp/13.Alert';
import About from './comp/10.about';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light');
  const [alert, setalert] = useState(null);

  const showAlert=(msg,type)=>
  {
    setalert({
      message:msg,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },2000)
  }
  const toggleMode=()=>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Darkmode has been enabled Successfully");
      document.title='TextWrap-DarkMode';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Lightmode has been enabled Successfully");
      document.title='TextWrap-LightMode';
    }
  }
  return (
      // <Router>
      //   {/* --6-- */}
      //   <Navbar title="TextWrap" mode={mode} toggleMode={toggleMode}/>
      //   {/* --13-- */}
      //   <Alert alert={alert}/>
      //   <Routes>
      //         <Route path="/about">
      //           {/* <About/> */}
      //         </Route>
      //         <Route path="/">
      //           <TextForm heading="Enter the Text" mode={mode} showAlert={showAlert}/>
      //         </Route>
      //   </Routes>
      //   {/* --7-- */}
      //   {/* <div className="container">
      //     <TextForm heading="Enter the Text" mode={mode} showAlert={showAlert}/>
      //   </div> */}
      //   {/* --10-- */}
      //   {/* <About/> */}
      // </Router>

      <Router>
          <Navbar title="TextWrap" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}>
              {/* <About/> */}
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter the Text" mode={mode} showAlert={showAlert}/>}>
              {/* <TextForm heading="Enter the Text" mode={mode} showAlert={showAlert}/> */}
            </Route>
            <Route exact path="/home" element={<TextForm heading="Enter the Text" mode={mode} showAlert={showAlert}/>}>
              {/* <TextForm heading="Enter the Text" mode={mode} showAlert={showAlert}/> */}
            </Route>
          </Routes>
        </div>
    </Router>
  );
}

export default App;