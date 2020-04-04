import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import image from './imageInSrc.jpg';
import image2 from './imageInPublic.jpg';

function App() {
  return (
    <div style={{border:'solid 1px black', maxWidth:'100vw'}}> 
 
    	<h1 className="title-red">Your name here </h1> 
 
      <img src={image} /> 
      <img src={image2} /> 
  
    <video src="/myVideo.mp4" width={320} height={240} controls />     
   </div>  
   
  )
}
export default App;
