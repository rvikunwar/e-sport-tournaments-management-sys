import './App.css';
import React, {useState,useEffect} from 'react'
import Navbar from './components/Navbar.js'
import Header from './components/Header.js'
import Info from './components/Info.js'
import logo from './components/images/afat.png'
import phone from './components/images/phone.png'

import Contact from './components/Contact.js'
import Loading from "./components/Loading.js"
import Background from './components/Background.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Details from "./components/Details.js"
function App() {

const [loading,setloading]=useState(false)
const [change,setchange]=useState(false)
useEffect(()=>{
  setloading(true)
  setTimeout(() => {
    setloading(false)
    
  }, 2740);

},[change])
  

 

  return (
  
    <div className="App" id="app">
       <Router>
       <Switch>
                <Route exact path="/">
                
              {  loading?
                <Loading/>:
                <div className="aapp" id="app">
          <Background/>
          {((window.innerWidth)<500)?
           <img src={phone} alt="" className="background-image"/>:
           <img src={logo} alt="" className="background-image"/>

          }
               
                <Navbar/>
                <Header/>
            
              
                <Info in={setchange} pp={change}/>
                
                <Contact/>
         
            </div>
          }
          </Route>

        <Route path="/details/:page">
       
        {  loading?
              <Loading/>:
              <div className="aapp">
      
              <img src={logo} alt="" className="background-image"/>
              <Navbar/>
              <Details/>
              <Contact/>
          </div>
        }

        </Route>
</Switch>


</Router>
    </div>
    
  );
}

export default App;
