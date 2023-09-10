import Lottie from "lottie-react";
import CodeAnimation from "./assets/Hero-page/CodingAnimation.json"
import PersonCodingAnimation from "./assets/Hero-page//PersonCoding.json"
import './App.css'
import Navbar from './Components/Navbar.jsx'
import { useRef } from "react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Trophy from "./assets/Hero-page/Trophy.png"

const MainPage = () => {

  //For CodeAnimation
  const CodeRef = useRef(); 
 
  return (
    <>
      <div className="Hero-1">
        <Navbar />
        <section id="sec"> 
          <canvas id='canv'></canvas>
        </section>
        <div className="Header-Content">
          <div className='Hero-Page-Header'>Stack Overdose</div>
          <div className="Hero-Page-SubHeader">StackOverdose is the best platform to help you enhance your skills, expand your knowledge and fall in love with coding.</div>
          <button className="custom-btn btn-3" type="button" onClick={() =>{ location.href = '#' }}>
            <span>Start now</span>
          </button>
        </div>
        <div className="Lottie-Animation" >
          <Lottie
            lottieRef={CodeRef}
            animationData={CodeAnimation}
            onDOMLoaded={() => {
              CodeRef.current.setSpeed(.9)
            }}
            // loop={false}
            // aria-aria-labelledby="use lottie animation"
          />
        </div>
        <div className="Lottie-Animation-PersonCoding" >
            <Lottie animationData={PersonCodingAnimation} />
        </div>
		</div>
		<div id="content">
			<div className="Header">
				A New Way to Improve Your Coding Skills<br></br>
				<div>StackOverdose is the best platform to help you enhance your skills, expand your knowledge and practice.</div>
				<button> Create Account </button>
			</div>
			<div id="background-stripes--left" className="background-stripes--left stripes"></div>
			<div id="background-stripes--right" className="background-stripes--right stripes"></div>
			<div id="foreground-stripes" className="foreground-stripes stripes"></div>
			<div className="Snappify-Div-1"><div className="Snappify-Div-2"></div><iframe className="Snappify-Div-3" width="683" height="500" title="" src="https://snappify.com/embed/ae26d35e-619e-49dd-88cc-b0de62c19cbd?responsive=1&autoplay=1" allow="clipboard-write" allowFullScreen=""></iframe></div>
		</div>
		<div id="content-2">
			<div className="Header">
				Community & Contests <br></br>
				<div>Come and join our tech community with hundreds of thousands of active users and participate in our contests to challenge yourself and earn rewards.</div>
				<div className="SubLink"><a href="#">Join Our Community <ArrowRightAltIcon /></a></div>
				Questions <br></br>
				<div>Come and join our tech community with hundreds of thousands of active users and participate in our contests to challenge yourself and earn rewards.</div>
				<div className="SubLink"><a href="#">View Questions <ArrowRightAltIcon /></a></div>
			</div>
			<div className="Pic-Container">
				<div className="Pic-Background-1">
					<div className="Pic"></div>
				</div>
				<div className="Pic-Background"></div>
			</div>
		</div>
    </>
  );
}


// <div className="Snappify-Div-1">lpllpl
// 				<div className="Snappify-Div-2"></div>
// 				<iframe className="Snappify-Div-3" frameBorder='0' title="" src="https://snappify.com/embed/ae26d35e-619e-49dd-88cc-b0de62c19cbd?responsive=1&autoplay=1"  allow="clipboard-write" allowFullscreen="" ></iframe>
// 			</div>

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
 

 
 //For Content
'use strict';

// document.addEventListener( 'click', event => {
//   console.log('Clicked')
// 	generate();
// });

function generate() {
	
	let skew = Math.random() < 0.5 ? -8 : 8;
	
	new Stripes( 'foreground-stripes', {
		totalStripes: 5,
		minStripeHeight: 20,
		maxStripeHeight: 40,
		minStripeSpeed: 400 ,
		maxStripeSpeed: 1200,
		stripeColors: ['rgba(2,126,251,1)', 'rgba(0,172,232,1)', 'rgb(12, 78, 145);'],
		stripeSkews: [ skew ]
	});
	
	new Stripes( 'background-stripes--left', {
		totalStripes: 30,
		minStripeHeight: 100,
		maxStripeHeight: 200,
		minStripeSpeed: 400,
		maxStripeSpeed: 800,
		stripeColors: ['rgba(2,126,251,1)', '#0000FF', 'linear-gradient(0deg, rgba(0,172,238,1) 0%, rgba(2,126,251,1) 100%)'],
		stripeSkews: [ skew ]
	});
	
	new Stripes( 'background-stripes--right', {
		totalStripes: 30,
		minStripeHeight: 100,
		maxStripeHeight: 200,
		minStripeSpeed: 400,
		maxStripeSpeed: 800,
		stripeColors: ['rgba(2,126,251,1)', 'rgba(0,172,238,1)', 'rgba(0,172,222,1)'],
		stripeSkews: [ skew ]
	});

}

class Stripe {

	constructor( options ) {

		this.container      = document.createElement( 'div' );
		this.width          = 0;
		this.startWidth     = 20;
		this.destWidth      = 80;
		this.height         = 0;
		this.bottom         = 0;
		this.color          = '#000';
		this.origin         = 'left';
		this.skew           = 0;
		this.animationStart = Date.now();
		this.animationSpeed = 4000;
		this.fps            = 60

		for( let key in options ) {
			if( options.hasOwnProperty( key ) ) {
				this[key] = options[key];
			}
		}

		this.container.className = 'stripe';

		this.interval = setInterval( this.update.bind( this ), 1000 / this.fps );
		setTimeout( this.finish.bind( this ), this.animationSpeed );

	}

	stylize() {

		let styles = [
			'height:' + this.height + 'px',
			'bottom:' + this.bottom + '%',
			'transform: skewY(' + this.skew + 'deg)'
		];

		if( 'left' === this.origin ) {
			styles.push( 'background: linear-gradient(90deg, ' + this.color + ' ' + this.width + '%, transparent ' + this.width + '%)' );
		} else {
			styles.push( 'background: linear-gradient(90deg, transparent ' + (100 - this.width) + '%, ' + this.color + ' ' + (100 - this.width) + '%)' );
		}

		this.container.setAttribute( 'style', styles.join(';') );

	}

	update() {

		this.width = this.easeOutQuad(
			Date.now() - this.animationStart,
			this.startWidth,
			this.destWidth - this.startWidth,
			this.animationSpeed
		);

		this.stylize();

	}

	finish() {

		this.width = this.destWidth;

		this.stylize();

		clearInterval(this.interval);

	}

	easeOutQuad( t, b, c, d ) {

		return -c * ( t /= d ) * ( t - 2 ) + b;

	}

}

class Stripes {

	constructor( containerId, options ) {

		this.containerId     = containerId;
		this.container       = document.getElementById( containerId );
		this.totalStripes    = 1;
		this.minStripeHeight = 20;
		this.maxStripeHeight = 80;
		this.minStripeSpeed  = 400;
		this.maxStripeSpeed  = 800;
		this.stripeColors    = [ '#000', '#FFF', '#972581', '#9D2E7E', '#AC4875', '#C57167', '#E7AA54' ];
		this.stripeOrigins   = [ 'left', 'right' ];
		this.stripeSkews     = [ '15', '-15' ],
		this.stripes         = [];

		for( let key in options ) {
			if( options.hasOwnProperty( key ) ) {
				this[key] = options[key];
			}
		}

		this.generateStripes();

	}

	generateStripes() {

		this.stripes             = [];
		this.container.innerHTML = '';

		for( let c = 0; c < this.totalStripes; c++ ) {

			this.generateStripe();

		}

	}

	generateStripe() {

		let startWidth = Math.random() * 100;
		let destWidth  = startWidth + Math.random() * ( 100 - startWidth );

		let stripe = new Stripe({
			startWidth: startWidth,
			destWidth: destWidth,
			height: this.randomBetween( this.minStripeHeight, this.maxStripeHeight ),
			color: this.randomItem( this.stripeColors ),
			bottom: Math.random() * 100,
			origin: this.randomItem( this.stripeOrigins ),
			skew: this.randomItem( this.stripeSkews ),
			animationSpeed: this.randomBetween( this.minStripeSpeed, this.maxStripeSpeed ),
		});

		this.container.appendChild( stripe.container );
		this.stripes.push( stripe );

	}

	randomBetween( min, max ) {

		return Math.random() * ( max - min ) + min;

	}

	randomItem( items ) {

		return items[Math.floor( Math.random() * items.length )];

	}

}

generate();

},0);

}

 

export default MainPage;
