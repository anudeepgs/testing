import React  from "react";
import { dumplogs } from "./util";


const Blogcarsd=(properties) =>{
    dumplogs(properties);
    return(<div className="hey">
        
    <h3>{properties.title}</h3>
    <p>{properties.description}</p>
    <button onClick={()=> properties.onlikeclick(properties.position)}>likes</button> : 
  <span className={"abc"}>{properties.likecount}</span> 
    <marquee>ANDEEP</marquee>
   </div>)
}
export default Blogcarsd;