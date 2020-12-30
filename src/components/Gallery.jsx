import React, { useState, useRef, useEffect } from 'react';
import './scss/gallery.css';
import gsap, { TweenMax, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Gallery() {

  let animationEffect = null;
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let albumLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    albumLength.forEach((e, i) => {
      let curNum = i + 1
      let tl = gsap.from(`.album-animation${curNum}`, {
        opacity: 0,
        y: 60,
        ease: 'power1.out',
        stagger: {
          amount: 1.3
        },
        duration: 0.8
      });
  
      ScrollTrigger.create({
        trigger: `#album-container${curNum}`,
        start: "top center+=100px",
        animation: tl
      });
    })
  }, [animationEffect])

  useEffect(() => {
    document.body.style.backgroundColor = "#FCCAC5";
    let nav = document.getElementsByTagName("nav")[0];
    nav.style.backgroundColor = "rgba(252, 202, 197, 0.8)";
    
    let textAnimation =
    TweenMax.staggerFromTo(".textSpan", 0.8, {
			opacity: 0,
			y: 20,
		}, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
			delay: 1.5,
    }, 0.1);
  }, []);

  let imageSource = [
    {
      path: 1,
      count: 12,
      date: 'Oct 24',
    }, {
      path: 2,
      count: 15,
      date: 'Oct 22',
    }, {
      path: 3,
      count: 6,
      date: 'Oct 18',
    }, {
      path: 4,
      count: 21,
      date: 'Oct 14',
    }, {
      path: 5,
      count: 15,
      date: 'Oct 10',
    }, {
      path: 6,
      count: 16,
      date: 'Oct 10',
    }, {
      path: 7,
      count: 13,
      date: 'Oct 5',
    }, {
      path: 8,
      count: 12,
      date: 'Oct 3',
    }, {
      path: 9,
      count: 8,
      date: 'Oct 3',
    }, {
      path: 10,
      count: 16,
      date: 'Oct 1',
    }, 
  ];

  let pattern = ['1/3', '3/6', '1/4', '4/6', '1/3', '3/6', '1/4', '4/6', '1/3', '3/6', '1/4', '4/6', '1/3', '3/6', '1/4', '4/6', '1/3', '3/6', '1/4', '4/6', '1/3'];

  let imageCardMainContainer = useRef(null);
  let imageCardContainer = useRef(null);
  let imageCardImage = useRef(null);
  let imageCardButton = useRef(null);

  let [cardState, setCardState] = useState(false);

  let cardAction = (state) => {

    let {body} = document;
    let open = () => {
      TweenMax.to(body, 0, {
        overflow: "hidden"
      });
      TweenMax.to(imageCardMainContainer, 0.3, {
        opacity: 1,
        pointerEvents: "auto"
      });
      TweenMax.staggerFromTo([imageCardContainer, imageCardImage, imageCardButton], 0.3, {
        y: 20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        ease: Power3.easeOut,
      }, 0.2);
    }
    
    let close = () => {
      TweenMax.to(body, 0, {
        overflow: "auto"
      });
      TweenMax.to(imageCardMainContainer, 0.3, {
        opacity: 0,
        pointerEvents: "none",
        delay: 0.3
      });
      TweenMax.staggerFromTo([imageCardButton, imageCardImage, imageCardContainer], 0.3, {
        y: 0,
        opacity: 1
      }, {
        y: 20,
        opacity: 0,
        ease: Power3.easeOut,
      }, 0.2);
    }
    setCardState(state);
    state ? open() : close();
  }

  let [imageCard, setImageCard] = useState({
    src: `1/1`,
  })

  return (
    <div className="gallery-page page">
      <div className="header">
        <div className="textSpan">Explore<br /></div>
        <div className="textSpan">Aileen's<br /></div>
        <div className="textSpan">Gallery for<br /></div>
        <div className="textSpan">this October<br /></div>
      </div>

      <div className="content">
        {imageSource.map( (source, i) => {
          
          let specId = `album-container${i + 1}`;
          let specClass = `album-animation${i + 1}`;

          return (
            <div className="album-container" id={specId} key={i}>
              <div className={`content-header ${specClass}`}>
                Album {source.path}
              </div>
              <div className={`date ${specClass}`}>{source.date}</div>
        
              <div className="image-grid">
                {new Array(source.count).fill(0).map( (c, i) => (
                  <div
                    // We need this to animate :)
                    style={{ gridColumn: pattern[i] }}
                    className={`item ${specClass}`}
                    key={i}
                    onClick={() => {
                      setImageCard({
                        src: `${source.path}/${i+1}`
                      });
                      cardAction(true);
                    }}
                  >
                    <img src={require(`../image/album${source.path}/${i+1}.jpg`)} alt="grid-" />
                    <div className="darken"></div>
                  </div>
                ))}
              </div>
            </div>
          )}
        )}

        <div className="goto">
          <div className="goto-header">Go to</div>

          <div className="goto-button-container">
            {imageSource.map((s, i) => (
              <div className="goto-button"
                key={i}
                onClick={() => {
                  let head = document.getElementsByClassName("content-header")[i];
                  head.scrollIntoView(true);
                }}  
              >Album {s.path}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="image-card-container" ref={ e => imageCardMainContainer = e }>
        <div />
        <div className="image-card" ref={ e => imageCardContainer = e}>
          <img src={require(`../image/album${imageCard.src}.jpg`)} alt="card" ref={ e => imageCardImage = e} />
          {/* <img src={require(`../image/album1/1.jpg`)} alt="card" ref={ e => imageCardImage = e} /> */}

          <div className="close-image-card"
            ref={ e => imageCardButton = e}
            onClick={() => {
              cardAction(false);
            }}
          >Close</div>
        </div>
      </div>

    </div>
  );
}

export default Gallery;