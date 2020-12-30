import React, { useState, useRef, useEffect } from "react";
import "./scss/home.css";
import gsap, { TweenMax, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {

  let homeGrid = [
    { id: 0, src: "col1.jpg" },
    { id: 1, src: "col2.jpg" },
    { id: 2, src: "col3.jpg" },
  ];

  let t = -70;

  let gridBlockProps = [
    {
      id: 0,
      title: `Just want to make u :)`,
      para: `Happy 18th birthday Aileen (Joy joy), so this is a simple gift I made with a heart. I was only a boy na mukang adik sa gilid gilid pero u still trust me in everything. I just want to help u kaya lumapit ako sayo pero di lang pala tulong yung maitutulong ko sa 'yo, ako din pala magiging happy pill mo.
			
			Ur smile is the best smile I ever see :)) U also make me happy because I know that Im the reason of your smile.
			
			I just want to make u smile <3.`,
      src: `block1.jpeg`,
      order: 0,
    },
    {
      id: 1,
      title: `You just leveled up!`,
      para: `You just leveled up! hindi lang sa age, kundi sa pagiging isang mabuting anak din.

			Always think about lahat ng pangarap mo sa buhay para mas lumakas ka kung sakaling mabe-breakdown ka. Always make your papa proud of you not just by grades, pakita mo lalo na sobrang miss mo na sya.

			I will always be here for you, to support you, to teach you & to care you.`,
      src: `block2.jpeg`,
      order: -1,
    },
    {
      id: 2,
      title: `Be back never`,
      para: `You said that you want to travel around the world and make a happy life with someone. You said that you want to build a business with someone. You will become successful woman. "Study, work, house, car, travel, family". Pop.

			Stay optimistic.

			If you want it, work for it! Never stop learning something new everyday. Life is about learning, stay strong matutupad yang mga pangarap mo kasama ako.`,
      src: `block3.jpg`,
      order: 0,
    },
    {
      id: 3,
      title: `U're f*cking special!`,
      para: `When you are down, I'm here, when you need help, talk with me. I'm always be here to love and  support you because you are so f*cking special!

			Handa akong tumulong kahit kailan hanggat nasa tama ka. Pero kung ikaw yung may tama, pwede rin HAHAHA.
			
			You are f*cking special, yeah.`,
      src: `block4.jpg`,
      order: -1,
    },
  ];

  let [isCardOpen, setIsCardOpen] = useState(false);

  let [cardReadProps, setCardReadProps] = useState({
    title: ``,
    para: ``,
  });

	// let [animState, setAnimState] = useState(false);
	let startingAnimation = () => {
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

    console.log(textAnimation);

		TweenMax.staggerFromTo(".grid-image", 0.8, {
			opacity: 0,
			y: 30,
		}, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
			delay: 2.7 - 0.8,
    }, 0.1);
	}

  // useEffect for bgc of body and the nav
  useEffect(() => {
    // Animation of Text in Home page
    document.body.style.backgroundColor = "#FCCAC5";
    let nav = document.getElementsByTagName("nav")[0];
    nav.style.backgroundColor = "rgba(252, 202, 197, 0.8)";
  });

  // useEffect for animation of Intro
  let animHolder = null;
	useEffect(() => {
		startingAnimation();
	}, [animHolder]);

  // useEffect for ScrollTrigger
  let scrllTrggr = null;
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Loop to for all of cards
    let cardLength = [1, 2, 3, 4];

    cardLength.forEach((e, i) => {
      let curNum = i + 1
      let tl = gsap.from(`.card-animation${curNum}`, {
        opacity: 0,
        y: 60,
        ease: 'power1.out',
        stagger: {
          amount: 0.5
        },
        duration: 1.1
      });
  
      ScrollTrigger.create({
        trigger: `#card${curNum}`,
        start: "top center+=100px",
        animation: tl
      });
    })
  }, [scrllTrggr])

  // Card related elements
  let cardPara = useRef(null);

  let cardAction = (card, i, isCardOpenState) => {
    let body = document.body;

    let cardContainer = '.read-card-container';

    let openCard = () => {

      setCardReadProps(card);
      TweenMax.to(body, {
        overflowY: "hidden",
      });

      // Reset scroll position of Paragraph's container
      cardPara.scrollTo(0, 0);

      TweenMax.staggerFrom(`.read-card-to-animate`, 0.2, {
        y: 15,
        opacity: 0,
        ease: Power3.easeOut,
      }, 0.12);
      TweenMax.to(cardContainer, 0.2, {
        opacity: 1,
        pointerEvents: "auto",
      });
    };

    let closeCard = () => {
      TweenMax.to(body, {
        overflow: "visible",
      });

      TweenMax.to(cardContainer, 0.2, {
        opacity: 0,
        pointerEvents: "none",
      });
    };

    // Set state display of Card, { Header, Paragraph }
    // Set isCardOpen State
    setIsCardOpen(isCardOpenState);
    isCardOpen === !true ? openCard() : closeCard();
	};

  return (
    <div className='home-page page'>
      <div className='header'>
        <div className="textSpan">Happy 18th<br /></div>
        <div className="textSpan">Birthday,<br /></div>
        <div className="textSpan">Aileen<br /></div>
        <div className="textSpan">Joy<br /></div>
        <div className="textSpan">Molina</div>
      </div>

      <div className='home-grid' id='home-grid'>
        {homeGrid.map((el, i) => (
          <div className='grid' key={el.id}
            style={{ transform: `translateY(${(t += 70)}px)` }}
          >
            <img className='grid-image' alt='grid-images'
              src={require(`../image/home-grid-images/${el.src}`)}
            />
          </div>
        ))}
      </div>

      <div className='content'>
        <div className='header talks' id='talks'>Talks?</div>

        {gridBlockProps.map((card, i) => {

          // For animation purposes.
          let specId = `card${i + 1}`;
          let specClass = `card-animation${i + 1}`;

          return (
            <div id={specId} key={card.id} className='card'>

              <div className='left-sec'>

                {/* Header */}
                <div className={`sec-header ${specClass}`}>
                  {card.title}
                </div>

                {/* Paragraph */}
                <div className={`sec-para ${specClass}`}>
                  {card.para}

                  <div className='gradient-mask' />
                </div>

                {/* Button */}
                <div className={`read ${specClass}`}
                  onClick={() => {
                    cardAction(card, i, true);
                  }}
                >
                  Read
                </div>
              </div>

              {/* Image */}
              <div className={`right-sec ${specClass}`} style={{ order: card.order }}>
                <img src={require(`../image/block-grid-images/${card.src}`)} alt='cardImageGrid'/>
              </div>
            </div>
          )}
        )}

        <div className='back-to-top-container'>
          <div className='back-to-top-holder'>
            <div className='back-to-top'
              onClick={() => {
                document.body.scrollIntoView(true);
              }}
            >
              <img src={require("../svg/back-to-top.svg")} alt='back-to-top' />
              <div>Back to top</div>
            </div>
          </div>
        </div>
      </div>

      <div className='read-card-container'>
        <div />
        <div className='read-card read-card-to-animate'>
          <div className='card-head read-card-to-animate'>
            {cardReadProps.title}
          </div>
          <div className='card-para read-card-to-animate'
            ref={ e => cardPara = e }
          >
            {cardReadProps.para}
          </div>

          <div className='close-card read-card-to-animate' onClick={() => cardAction({}, null, false)}>
            Close
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// Elise Aira Z
