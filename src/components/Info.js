import React,{useEffect,useState} from 'react'
import './css/info.css'
import {

  Link
} from "react-router-dom";
import Infobox from './Infobox.js'
import axios from '../axios.js'

function Info(props) {
    document.addEventListener("scroll", function() {
        var a=document.getElementsByClassName("tag")
       

        for (var i = 0; i < a.length; i++) {
            var tag = a[i];
            var pageTop = window.pageYOffset
            var pageBottom = pageTop + window.screen.height;
           
            if (tag.offsetTop < pageBottom-500) {
               tag.classList.add("visible")
          
              
            } else {
                tag.classList.remove("visible");
            }
          }
     
      
        });

           
        const [data_1,setdata_1]=useState([])


        useEffect(()=>{
            const article = document.getElementsByClassName('arti');
        
            var c=0;
            var cx,cy,qq,v
            function handleMove(e) {
         

              const { pageX, pageY } = e;
             
              if(c===0){
                qq = this.getBoundingClientRect();
                c=1
               v= window.pageYOffset+qq["y"]
              }
               cx = qq["x"] + qq["width"] / 2;
               cy = v + qq["height"] / 2;
            
              const dx = (cx - pageX) / (qq["width"] / 2);
              const dy = (cy - pageY) / (qq["height"] / 2);
            
              this.style.transform = `rotateX(${10 * dy * -1}deg) rotateY(${10 * dx}deg)`;
            }
            
            function handleOut() {
              this.style.transform = 'initial';
              c=0
            }
            for(let i=0;i<article.length;i++){
                  article[i].addEventListener('mousemove', handleMove);
                
                  article[i].addEventListener('mouseout', handleOut);
            }
        
        },[data_1])

  //calling for data
  useEffect(()=>{
   axios.get("").then((res)=>{
     setdata_1(res.data)
     })
  },[])

           
          
    return (
        <div className="info" id="ms">

          {
            data_1.map((dat,c)=>(

              <Link to={`/details/${dat.id}`} key={c} style={{ textDecoration: 'none' ,width: '500px'}}>
              <Infobox i={props.in} p={props.pp} data_3={dat}/>
            
          </Link>

            ))
          }
         
         
          
   
     
        </div>
    )
}

export default Info
