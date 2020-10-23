import React, { useState, useRef } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { TweenMax, Power2 } from 'gsap';
import Home from './components/Home';

function App() {

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

  let menuBlock = useRef(null);
  let b1 = useRef(null);
  let b2 = useRef(null);
  let b3 = useRef(null);
  let b4 = useRef(null);
  let navButtons = [b1, b2, b3, b4];

  function menuAction(openState) {
    setIsOpen(openState);

    let open = _ => {
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
      TweenMax.staggerTo(navButtons, .4, {
        y: 24,
        opacity: 0,
        ease: Power2.easeOut,
        delay: 0.1
      }, 0.1);

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
          <div className="menu" onClick={ _ => menuAction(true) }>
            <img src={require('./svg/nav-open.svg')}
              alt="svg"
            />
          </div>
        </nav>

        <div className="menu-block"
          ref={ e => menuBlock = e }
          // style={{ top: isOpen ? 0 : "-100vh" }}
        >
          <ul>
            {links.map((l, i) => (
              <li key={l.id} ref={ e => navButtons[i] = e }>
                <Link to={l.link}
                  onClick={
                    () => {
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
        </div>

        <div className="render-box">

          <Switch>
            <Route path="/contact">
              <Contact />
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

function About() {
  return <h2>About</h2>;
}

function Gallery() {
  return <h2>Gallery</h2>;
}

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