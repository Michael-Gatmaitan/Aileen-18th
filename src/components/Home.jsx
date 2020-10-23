import React, { useState, useRef, useEffect } from 'react';
import './scss/home.css';
import { TweenMax, Power3 } from 'gsap';

function Home() {

  let span1 = useRef(null);  
  let span2 = useRef(null);
  let span3 = useRef(null);
  let span4 = useRef(null);
  let span5 = useRef(null);

  let homeGrid = [
    {id: 0, src: "col1.jpg" },
    {id: 1, src: "col2.jpg" },
    {id: 2, src: "col3.jpg" },
  ];

  let mask1 = useRef(null);
  let mask2 = useRef(null);
  let mask3 = useRef(null);

  let t = -70;

  let gridBlockProps = [
    {
      id: 0,
      title: `Just want to make u :)`,
      para: `Happy 18th birthday Aileen (Joy joy), so this is a simple gift made with heart. I was only a boy na mukang adik sa gilid gilid pero u still trust me in everything. I just want to help u kaya lumapit ako sayo pero di lang pala tulong yung maitutulong ko sa 'yo, ako din pala magiging happy pill mo.
      Ur smile is the best smile I ever see :)) U also make me happy because I know that Im the reason of your smile.
      I just want to make u smile <3.`,
      src: `block1.jpeg`,
      order: 0,
    }, {
      id: 1,
      title: `You just leveled up!`,
      para: `You just leveled up! hindi lang sa age, kundi sa pagiging isang mabuting anak din. Always think about lahat ng pangarap mo sa buhay para mas lumakas ka kung sakaling mabe-breakdown ka. Always make your papa proud of you not just by grades, pakita mo lalo na sobrang miss mo na sya.
      I will always be here for you, to support you, to teach you & to care you.`,
      src: `block2.jpeg`,
      order: -1,
    }, {
      id: 2,
      title: `Be back never`,
      para: `You said that you want to travel around the world and make a happy life with someone. You said that you want to build a business with someone. You will become successful woman. "Study, work, house, car, travel, family". Pop.
      Stay optimistic.
      If you want it, work for it! Never stop learning something new everyday. Life is about learning, stay strong matutupad yang mga pangarap mo kasama ako.`,
      src: `block3.jpg`,
      order: 0,
    }, {
      id: 3,
      title: `U're f*cking special!`,
      para: `When you are down, I'm here, when you need help, talk with me. I'm always be here to love and  support you because you are so f*cking special!

      Handa akong tumulong kahit kailan hanggat nasa tama ka. Pero kung ikaw yung may tama, pwede rin HAHAHA
      
      You are f*cking special, yeah.`,
      src: `block4.jpg`,
      order: -1,
    }
  ];

  let [isCardOpen, setIsCardOpen] = useState(false);

  let [cardReadProps, setCardReadProps] = useState({
    title: `Be back never`,
    para: `You said that you want to travel around the world and make a happy life with someone. You said that you want to build a business with someone. You will become successful woman. "Study, work, house, car, travel, family". Pop.
    Stay optimistic.
    If you want it, work for it! Never stop learning something new everyday. Life is about learning, stay strong matutupad yang mga pangarap mo kasama ako.`,
  });

  useEffect(() => {
    // Animation of Text in Home page

    TweenMax.staggerFrom([span1,span2,span3,span4, span5], .8, {
      opacity: 0,
      y: 10,
      ease: Power3.easeOut,
      delay: 1.5
    }, .1);

    // Animation of Home-grid-images' masks

  }, []);

  let cardAction = () => {
    
  }

  return (
    <div className="home-page page">
    
      <div className="header">
        <div ref={ e => span1 = e }>Happy 18th<br /></div>
        <div ref={ e => span2 = e }>Birthday,<br /></div>
        <div ref={ e => span3 = e }>Aileen<br /></div>
        <div ref={ e => span4 = e }>Joy<br /></div>
        <div ref={ e => span5 = e }>Molina</div>
      </div>

      <div className="home-grid">
        { homeGrid.map( el => (
          <div key={el.id} className="grid" style={{ transform: `translateY(${t += 70}px)`}}>
            <div className="mask"></div>
            <img src={require(`../image/home-grid-images/${el.src}`)} alt="img" className="grid-image" />
          </div>
        )) }
      </div>

      <div className="content">
        <div className="header">Talks?</div>

        {gridBlockProps.map(card => (
          <div className="card" key={card.id}>
            <div className="left-sec">
              
              <div className="sec-header">
                {card.title}
              </div>

              <div className="sec-para">
                {card.para}
                
                <div className="gradient-mask" />
              </div>

              <div className="read"
                onClick={
                  () => {
                    cardAction(card);
                  }
                }>Read</div>

            </div>
            <div className="right-sec" style={{ order: card.order }}>
              <img src={require(`../image/block-grid-images/${card.src}`)} alt="image" />
            </div>
          </div>
        ))}

      </div>

      <div className="read-card-container">
        <div />
        <div className="read-card">
          <div className="card-head">
            {cardReadProps.title}
          </div>
          <div className="card-para">
            {cardReadProps.para}
          </div>

          <div className="close-card" onClick={ () => setIsCardOpen(true) }>
            Close
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home;