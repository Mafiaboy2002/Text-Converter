import React from 'react';
import { BsInstagram,BsTwitter,BsFacebook} from "react-icons/bs";
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
   <Navbar title = "TextUtils"/>
   <div className="container">
   <TextForm  heading = "Enter Your Text "/>
   </div>
   <div className="container1">

   </div>
   <footer id="footer">
    <BsInstagram  />
    <i className="bi bi-instagram" style={{fontSize:'20px', padding: '10px'}}></i>
    <i className="fa fa-instagram" style={{fontSize:'20px', padding: '10px'}}></i>
    <BsFacebook/>
    <i className="fa fa-github" style={{fontSize:'20px', padding: '10px'}}></i>
    <i className="fa fa-pinterest-square" style={{fontSize:'20px', padding: '10px'}}></i>
 
    < BsTwitter/>
    <p style={{color:'#fff',fontFamily:'Euclid Circular,sans-serif',paddingTop:'4px'}}> Copyright © 2023 Text Converter. All right reserved</p>
   

  </footer>
  


    </>
  );
}

export default App;
