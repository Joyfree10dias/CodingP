import Lottie from "lottie-react";
import CodeAnimation from "./assets/CodingAnimation.json"
import './App.css'
import Navbar from './Components/Navbar.jsx'
import { useRef } from "react";

const MainPage = () => {

  //For CodeAnimation
  const CodeRef = useRef(); 
 
  return (
    <>
      <Navbar />
      <section id="sec"> 
        <canvas id='canv'></canvas>
      </section>
      <div className="Header-Content">
        <div className='Hero-Page-Header'>Stack Overdose</div>
        <div className="Hero-Page-SubHeader">StackOverdose is the best platform to help you enhance your skills, expand your knowledge and fall in love with coding.</div>
      </div>
      <div className="Lottie-Animation" >
        <Lottie
          lottieRef={CodeRef}
          animationData={CodeAnimation}
          onDOMLoaded={() => {
            console.log("speed");
            CodeRef.current.setSpeed(.5)
          }}
          // loop={false}
          // aria-aria-labelledby="use lottie animation"
        />
      </div>
      
    </>
  );
}

//For canvas
window.onload = () => {
 
 setTimeout(() => {
  var c = document.getElementById('canv');
 var $ = c.getContext('2d');
 
 var col = function(x, y, r, g, b) {
   $.fillStyle = "rgb(" + r + "," + 0 + "," + b + ")";
   $.fillRect(x, y, 1,1);
 }
 var R = function(x, y, t) {
   return( Math.floor(192 + 64*Math.cos( (x*x-y*y)/300 + t )) );
 }
 
 var G = function(x, y, t) {
   return( Math.floor(192 + 64*Math.sin( (x*x*Math.cos(t/4)+y*y*Math.sin(t/3))/300 ) ) );
 }
 
 var B = function(x, y, t) {
   return( Math.floor(192 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) ));
 }
 
 var t = 0;
 
 var run = function() {
   for(let x=0;x<=35;x++) {
     for(let y=0;y<=35;y++) {
       col(x, y, R(x-10,y,t), G(x,y,t), B(x+100,y,t+10));
     }
   }
   t = t + 0.01;
   window.requestAnimationFrame(run);
 }
 
 run();
 }, 0);
}
 

export default MainPage;
