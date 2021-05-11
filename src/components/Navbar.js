import React  from 'react'
import './css/Navbar.css'
import SubjectIcon from '@material-ui/icons/Subject';
import ClearIcon from '@material-ui/icons/Clear';
import InstagramIcon from '@material-ui/icons/Instagram';

import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import {
    Link
  } from "react-router-dom";
  import dis from "../components/images/dis.png"
export default function Navbar(props) {


    return (
    
        <div className="fixer" id="navb">
               
                <div className="navbar "  id="na">
                    <Link to="/">
                        <p className="logo" >
            LOGO</p>
                    </Link>
            
                 <ul >
                    <li className="list_11"><a  className="aaa" href="#contact">Contact us</a></li>
                    <li className="list_11 aaaa" onClick={()=>{
                     
                         
                         var element_2 = document.querySelector("#nas");
                        element_2.style.transform="translateX(250%)";

                        element_2.style.opacity=1;
                        element_2.style.transition="opacity 1s ,transform 1s ease-in-out";

                       
                           
                           
                }}> <SubjectIcon style={{ fontSize: 50 }}/></li>
              
                </ul>
                </div>
        
            <div className="sidenavbar " id="nas">
                <div className="cross">
                          <p className="part" onClick={()=>{
                           
                         var element_2 = document.querySelector("#nas");
                         element_2.style.transform="translateX(350%)"
                         element_2.style.left="-40%"
                         element_2.style.opacity=0
                         
                           
                             }}>   <ClearIcon style={{ fontSize: 50 }}/></p>
                </div>

                <div className="dataset">
                    <div className="social">
                        <p className="men">Social</p>
                              <div className="bo">
                                    <p><InstagramIcon/></p> 
                                    <p className="sp">INSTAGRAM</p>
                                </div> 
                                <div className="bo">
                                    <p><FacebookIcon/></p>
                                    <p className="sp"> FACEBOOK</p>
                                 </div>
                                <div className="bo">
                                    <img src={dis} style={{"width":"20px","height":"20px","marginTop":"19px"}}/>
                                    <p className="sp"> DISCORD</p>
                                </div>
                    </div>
                    <div className="menu">
                    <p className="men a">Menu</p>
                    <Link to="/" style={{ "textDecoration":"none"}}>
                        <p className="hom">HOME</p>
                    </Link>
                    <a href="#contact" className="con">CONTACT US</a>
                    <Link to="/"  style={{ "textDecoration":"none"}}>
                        <p className="ab">ABOUT US</p>
                    </Link>
                    
                    </div>
                    </div>
                    <div className="mai">
                    <MailIcon/>
                    <p class="gmail">INTERACTIVE07@GMAIL.COM</p>
                    </div>
               
         </div>

        </div>
        
    )
}
