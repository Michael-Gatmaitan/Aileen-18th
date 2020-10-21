import React, { Component } from 'react';
import './scss/home.css';
import { TweenMax } from 'gsap';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      homeGrid: [
        {id: 0, src: "col1.jpg" },
        {id: 1, src: "col2.jpg" },
        {id: 2, src: "col3.jpg" },
      ]
    }
  }
  
  render() {
    const { homeGrid } = this.state;
    let t = -70;
    return (
      <div className="home-page page">
      
        <div className="header">
          Happy 18th<br />
          Birthday,<br />
          Aileen<br />
          Joy<br />
          Molina
        </div>

        <div className="home-grid">
          { homeGrid.map( el => (
            <div key={el.id} className="grid" style={{ transform: `translateY(${t += 70}px)`}}>
              <img src={require(`../image/home-grid-images/${el.src}`)} alt="img" className="grid-image" />
            </div>
          )) }
        </div>

        <div className="content">
          <div className="header">Talks?</div>

          <div className="card">
            <div className="left-sec"></div>
            <div className="right-sec"></div>
          </div>
        </div>

      </div>
    )
  }
}

export default Home;