import Lottie from "lottie-react";
import './App.css'
import Navbar from './Components/Navbar.jsx'

function MainPage() {

  
  return (
    <>
      <section id="sec">
        <Navbar />
        <canvas id='canv'></canvas>
      </section>
      <div className='Hero-Page-Header'>Stack Overdose</div>
      <Lottie />
      <div className='Test'></div>
    </>
  );

  }

export default MainPage;
