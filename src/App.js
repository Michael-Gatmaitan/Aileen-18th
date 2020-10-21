import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { TweenMax } from 'gsap';

// 
import Home from './components/Home';



class App extends Component {
  constructor(props) {
    super(props);

    // Declare REFS

    this.state = {
      colors: {
        primary: "#FCCAC5",
        secondary: "#85FFE0",
        white: "#fff"
      },
      
      isOpen: false,
      currentPage: "Home",

      links: [
        {id: 0, link: '/', page: "Home", },
        {id: 1, link: '/gallery', page: "Gallery", },
        {id: 2, link: '/about', page: "About", },
        {id: 3, link: '/contact', page: "Contact Dev", },
      ],
    }


  }

  render() {
    const { isOpen } = this.state;
    const { currentPage } = this.state;
    const { primary, secondary, white } = this.state.colors;

    return (
      <Router>

        <nav>
          <div className="menu">
            <img src={require('./svg/nav-open.svg')}
              alt="svg"
              onClick={ () => this.setState({ isOpen: true }) }
            />
          </div>
        </nav>

        <div className="menu-block" style={{ top: isOpen ? 0 : "-100vh" }}>
          <ul>
            {this.state.links.map((l, i) => (
              <li key={l.id}>
                <Link to={l.link}
                  onClick={
                    () => {
                      this.setState({ isOpen: false });
                      this.setState({ currentPage: l.page })
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