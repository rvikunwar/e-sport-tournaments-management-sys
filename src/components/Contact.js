import React from 'react'
import "./css/contact.css"
import axios from '../axios.js'
import {

 Redirect
} from "react-router-dom";

function Contact() {



   //setting message and complains by contact no and email id
   

   function settingData(){

    var body={
      "name":document.querySelector(".name").value,
      "email":document.querySelector(".email").value,
      "phone_no":document.querySelector(".phone").value,
      "message":document.querySelector(".message_1").value,
    }

    axios.post("contact",body).then((res)=>{
     
      }).then(()=>{
        if(window.confirm("Message sent")){
              window.location.reload()
        }
      })
      .catch((err)=>{
        window.confirm("Please provide valid data . . .")

      })
   console.log(body)
   }
    return (
        <div className="background_3" id="contact">
  <div className="container_4">
    <div className="screen">
      <div className="screen-header">
       
      
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT US</span>
           
          </div>
          <div className="conn">
              <div className="app-contact">CONTACT INFO : +91 956 782 22 11</div>
              <div className="app-contact">CONTACT EMAIL INFO : INTERACTIVE07@GMAIL.COM</div>
              <div><a href="#app" className="pu">BACK TO TOP</a></div>
          </div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control name" placeholder="NAME" />
            </div>
            <div className="app-form-group">
              <input className="app-form-control email" placeholder="EMAIL"/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control phone" placeholder="CONTACT NO"/>
            </div>
            <div className="app-form-group message">
              <textarea className="app-form-control sss message_1" placeholder="MESSAGE"/>
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button" onClick={settingData}>SEND</button>
            </div>
          </div>
     
        </div>
      </div>
    </div>

  </div>
</div>




    )
}

export default Contact
