import React, { useState, useRef } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { TweenMax, Power2 } from 'gsap';

import Home from './components/Home';
import Gallery from './components/Gallery';
import About from './components/About';
import MyMessage from './components/MyMessage';

import svg1 from './svg/svg1.svg';
import svg2 from './svg/svg2.svg';

import svg3 from './svg/svg3.svg';
import svg4 from './svg/svg4.svg';

// eslint-disable-next-line
function App() {

  let [verd, setVerd] = useState(false);

  let primary = "#FCCAC5";
  let secondary = "#85FFE0";
  let white = "#fff";
  
  let [isOpen, setIsOpen] = useState(false);
  let [currentPage, setCurrentPage] = useState("Home");

  let links = [
    {id: 0, link: '/', page: "Home", },
    {id: 1, link: '/gallery', page: "Gallery", },
    {id: 2, link: '/about', page: "About", },
    {id: 3, link: '/contact', page: `Contact Dev`, },
  ];

  let menuButton = useRef(null);

  let menuBlock = useRef(null);
  let menuBlockMenu = useRef(null);
  let b1 = useRef(null);
  let b2 = useRef(null);
  let b3 = useRef(null);
  let b4 = useRef(null);
  let navButtons = [b1, b2, b3, b4];

  let menuAction = openState => {
    setIsOpen(openState);
    let body = document.getElementsByTagName("body")[0];

    let open = _ => {
      // Body disabled from scrolling if Card is Open || Opened
      TweenMax.to(body, {
        overflow: "hidden"
      });

      // Menu Open action prevent || Can't touch
      TweenMax.to(menuButton, 0, {
        pointerEvents: "none"
      });

      // Menu Block action show || Can touch
      TweenMax.staggerTo([menuBlockMenu, ...navButtons], 0, {
        pointerEvents: "auto"
      }, 0);

      // Main Animations for Opening Menu

      // Change into ==> clip path animation
      TweenMax.to(menuBlock, 0.4, {
        top: 0,
        ease: Power2.easeInOut
      });
      TweenMax.staggerTo(navButtons, .4, {
        y: 0,
        opacity: 1,
        ease: Power2.easeOut,
        delay: 0.8
      }, 0.1);
    }

    let close = _ => {
      // Body abled from scrolling if Card is Close || Closed
      TweenMax.to(body, {
        overflow: "visible"
      });

      // Menu Open action prevent || Can touch
      TweenMax.to(menuButton, 0, {
        pointerEvents: "auto"
      });

      // Menu Block action show || Can't touch
      TweenMax.staggerTo([menuBlockMenu, ...navButtons], 0, {
        pointerEvents: "none"
      }, 0);

      // Main Animations for Closing Menu
      TweenMax.staggerTo(navButtons, .4, {
        pointerEvents: "none",
        y: 24,
        opacity: 0,
        ease: Power2.easeOut,
        delay: 0.1
      }, 0.1);

      // Change into ===> clip path animation

      TweenMax.to(menuBlock, 0.4, {
        top: "-100vh",
        ease: Power2.easeInOut,
        delay: 0.45
      });
    }

    isOpen === !true ? open() : close();
  } 

  return (
    <Router>
        <nav>
          <div className="menu" onClick={ _ => menuAction(true) }
            ref={ e => menuButton = e }>
            <img src={require('./svg/nav-open.svg')}
              alt="svg"
            />
          </div>
        </nav>

        <div className="menu-block"
          ref={ e => menuBlock = e }
        >
          <div className="menu-block-nav">
            <div className="menu-block-menu-button"
              onClick={ () => menuAction(false) }
              ref={ e => menuBlockMenu = e }
            >
              <img src={require(`./svg/nav-close.svg`)} alt="close" />
            </div>
          </div>
          <ul>
            {links.map((l, i) => (
              <li key={l.id} ref={ e => navButtons[i] = e }>
                <Link to={l.link}
                  onClick={
                    () => {
                      window.scrollTo(0, 0);
                      menuAction(false);
                      setCurrentPage(l.page);
                    }
                  }
                  style={{
                    color: l.page === currentPage ? secondary : white
                  }}
                >
                  {l.page}
                </Link>
              </li>
            ))}
          </ul>

          <img src={svg1} alt="svg1" className="svg svg1" />
          <img src={svg2} alt="svg2" className="svg svg2" />
          <img src={svg3} alt="svg3" className="svg svg3" />
          <img src={svg4} alt="svg4" className="svg svg4" />
        </div>

        <div className="render-box">

          <Switch>
            <Route path="/myfuckingmessageforuaileen">
            </Route>
            <Route path="/contact">
              <MyMessage />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

        </div>

      </Router>
  )
}

export default App;

function Contact() {
  return <h2>Contact</h2>;
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.myRef = React.createRef();
//   }

//   componentDidMount() {
//     TweenMax.from(this.myRef.current, 3, { opacity: 0, x: 500});
//   }

//   render() {
//     return <div className="bx" ref={ this.myRef }></div>;
//   }
// }

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import ScrollMagic from 'scrollmagic';
// import './App.css';

// class App extends Component {

//     constructor(props) {
//         super(props);
//         this.controller = new ScrollMagic.Controller();
//         this.state = {
//             pinText: 'Unpinned.'
//         };
//     }

//     componentDidMount() {

//         // build scenes
//         new ScrollMagic.Scene({triggerElement: "#trigger", duration: 150})
//             .setPin("#pin")
//             .setClassToggle("#pin", "green")
//             .on("enter leave", this.updateBox)
//             .addIndicators() // add indicators (requires plugin)
//             .addTo(this.controller);

//         new ScrollMagic.Scene({triggerElement: "#trigger", duration: 150, offset: 300})
//             .setPin("#pin")
//             .setClassToggle("#pin", "green")
//             .on("enter leave", this.updateBox)
//             .addIndicators() // add indicators (requires plugin)
//             .addTo(this.controller);

//         new ScrollMagic.Scene({triggerElement: "#trigger", duration: 150, offset: 600})
//             .setPin("#pin")
//             .setClassToggle("#pin", "green")
//             .on("enter leave", this.updateBox)
//             .addIndicators() // add indicators (requires plugin)
//             .addTo(this.controller);

//     }

//     updateBox = (e) => {
//         let newPinText = '';
//         if (e.type === "enter") {
//             newPinText = 'Pinned.';
//         }else {
//             newPinText = 'Unpinned.';
//         }
//         this.setState({ pinText: newPinText });
//     };

//     render() {
//         const { pinText } = this.state;
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <img src={logo} className="App-logo" alt="logo" />
//                     <h1 className="App-title">Welcome to React</h1>
//                 </header>

//                 <div className="spacer s1" />
//                 <div id="trigger" className="spacer s1" />
//                 <div className="spacer s0" />
//                 <div id="pin" className="box1 red">
//                     <p>{pinText}</p>
//                     <a href="#" className="viewsource">view source</a>
//                 </div>
//                 <div className="spacer s2" />

//             </div>
//         );
//     }
// }