import React, { useState, useRef, useEffect } from 'react';
import './scss/about.css';
import { TweenMax, Power3 } from 'gsap';

function About() {

  let span1 = useRef(null);
  let span2 = useRef(null);
  let span3 = useRef(null);

  let [showVer, setShowVer] = useState(false);

  let [ver, setVer] = useState(false);

  let token = useRef(null);
  let cnumber = useRef(null);
  let cc = useRef(null);

  function changeDir() {
    console.log("Directing...");
    setVer(true);
  }

  function process() {

    if (token.value === "Xdb26klp02") {
      if (cnumber.value === "1026ajm") {
        if(cc.value === "M248Pb4A") {
          changeDir();
        }
      }
    }
  }

  useEffect(() => {
    let { body } = document;
    body.style.backgroundColor = "#121212";

    let nav = document.getElementsByTagName("nav")[0];
    nav.style.backgroundColor = "rgba(18, 18, 18, 0.8)";

    TweenMax.staggerFrom([span1,span2,span3], .8, {
      opacity: 0,
      y: 10,
      ease: Power3.easeOut,
      delay: 1.5
    }, .1);
  }, [])

  return (
    <div className="about-page page">
      <div className="header">
        <div ref={ e=> span1 = e} >About?</div>
        <div ref={ e=> span2 = e} >this?</div>
        <div ref={ e=> span3 = e} >I just ...</div>
      </div>

      <div className="about">
        <div className="about-head">About</div>
        <div className="about-para">
        Well, this website is just a Gift for Aileen's 18th birthday. This is the only way I know para ma-surprise ko sya. Di ko kaya mag regalo ng mga materyal na bagay so ginamit ko nalang skills na pinag aralan ko mag-isa for 2 years.<br/><br/>

"You’re off to great places, today is your day. Your mountain is waiting, so get on
your way.” - Dr. Suess<br/><br/>

Ikaw na umintindi ng quote Aileen, di ko maintindihan e HAHAHAHA
        </div>

        <div className="about-button" onClick={() => setShowVer(true)}>
          READ MICHAEL'S MESSAGE
        </div>
      </div>

      <div className="ver-page-container"
        // style={{
        //   opacity: showVer ? 1 : 0,
        //   pointerEvents: showVer ? "auto" : "none"
        // }}
      >

        <div className="verified">
          <div className="ver-cont">
            <img src={require(`../svg/checkmark.svg`)} alt="check" />
            <div className="verified-header">Hi, you just verified!</div>
          </div>
        </div>

        <div className="ver-form">
          <div className="ver-header">
            Verify
          </div>

          <div className="input-ver-container">
            <input type="password" ref={ e => token = e } placeholder="Input given Token" name="token"/>
            <input type="password" ref={ e => cnumber = e } placeholder="Input control number" name="control-number"/>
            <input type="password" ref={ e => cc = e } placeholder="Cc" name="cc"/>
          </div>

          <div className="ver-sub" onClick={ () => process() }>
            Submit
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;