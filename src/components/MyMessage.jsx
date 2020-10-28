import React, { useRef, useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap';
import './scss/mymessage.css';

function MyMessage() {

  let messages = [
    {
      header: `Thank you!`,
      para: `Hi, Aileen 😊! I just want to thank sa lahat ng mabuti mong nagawa sakin like, pag cocomfort, pag papasaya, pag papangiti, pagtulong, pag motivate, etc. Dami mong natulong sakin kaya thankful ako kay God na dinala nya ako sa 'yo 🥰 Wag kang magbabago 😘 Lab na lab ka namin! Kaming mga nag papangiti sayo! ❤️`,
    }, {
      header: `Always here for u`,
      para: `Lagi mong isipin na nandito lang ako / kami 
      laging gagabay sayo, laging tutulong, laging 
      makakausap kahit busy, di kami mawawala, 
      o mag sasawa mag suporta sayo basta lagi 
      mo lang galingan sa lahat ng bagay! Nakikita 
      kong malakas kang tao, masiyahin, kalmado 
      pero misan ang harot HAHAHA. I always 
      love you! What ever it takes, mamahalin 
      parin kita kahit ano or saan marating ng 
      buhay ko, isasama kita ❤`,
    }, {
      header: `Smile forever`,
      para: `Never forget to smile dahil yan lang 
      makakapag palakas sakin lalo na kay papa 
      mo, ngiti lang lagi, wala nang gaganda pa sa 
      ngiti mo! Ngiti mo lang nakita kong 
      maganda, i mean, kada ngiti mo may 
      meaning e, kada ngiti mo lalo akong 
      nahuhulog sayo ❤ kahit anong mangyari, 
      wag mong tatanggalin smile mo! Yan lang 
      nagpapalakas sakin lalo na pag badtrip ako 
      dito sa bahay haha. I love you! Lagi kang 
      ngingit kahit di moko ka VC kasi 
      nararamdaman ko ngiti mo kahit sa chat e 
      ❤`
    }, {
      header: `Chase your dreams`,
      para: `U want to smile the whole world diba? 
      Gusto mong gawin yan kasama ako ❤ Wait 
      mo lang, may nakalaang oras si Lord para 
      sating dalawa basta Never forget to Chase 
      your Dreams, nandito lang kaming mga nag 
      iinspire sayo para mas tumatag pa sa 
      buhay, magkakaroon pa tayo ng Gaming 
      PC's tandaan mo yan! Lahat ng PC setup na 
      pangarap ko makukuha ko yan kasama ka! 
      ❤ Love you! Tuparin natin pangako natin 
      ng magkasama ha! LOVE YOUUUUUUUU ❤`
    }, {
      header: `Stay motivated`,
      para: `sa sa mga pinaka mahalagang bagay para 
      mag patuloy sa buhay is yung pagiging 
      motivated araw-araw, isa kang malakas na 
      tao, positive na tao, lagi ka lang tumingin sa 
      bright side ng buhay! Lagi mong ingatan 
      sarili mo para mas mabuhay ka pa ng 
      matagal ❤ Kasama mo kong tatanda kaya 
      araw-araw mamomotivate tayong dalawa 
      ❤ Puro heart lang na eemoji ko sa laptop 
      ko kasi tinypr to e HAHAHAHA LABYUUU! ❤`
    }, {
      header: `Be Optimistic, always`,
      para: `Study, Work, Parents, Car, Family, Travel ❤ 
      Yan yung basics ng pangarap natin! Wala 
      pang majors HAHAHA yan palang yan! Lista 
      mo na mga gusto mong gawin natin pag 
      nagkasama na tayo ❤ Always be optimistic, 
      okay lang kahit sa sobrang optimistic mo 
      maging manghuhula ka HAHAHA basta wag 
      na wag mong kakalimutan mga pangaerap 
      mo sa buhay kasama ako! ❤ Makakasama 
      kita hanggang sa pagtanda tandaan mo 
      yan!!! ❤ Love u ulit HAHAHA`
    }
  ];

  let span1 = useRef(null);
  let span2 = useRef(null);
  let span3 = useRef(null);
  let span4 = useRef(null);
  let span5 = useRef(null);

  useEffect(() => {
    let { body } = document;
    body.style.backgroundColor = "#121212";

    let nav = document.getElementsByTagName("nav")[0];
    nav.style.backgroundColor = "rgba(18, 18, 18, 0.8)";

    TweenMax.staggerFrom([span1,span2,span3,span4,span5], .8, {
      opacity: 0,
      y: 10,
      ease: Power3.easeOut,
      delay: 1.5
    }, .1);
  }, [])

  return (
    <div className="mymessage-page page">
      <div className="header">
        <div ref={ e=> span1 = e} >So, you're</div>
        <div ref={ e=> span2 = e} >now here,</div>
        <div ref={ e=> span3 = e} >here's my</div>
        <div ref={ e=> span4 = e} >message for</div>
        <div ref={ e=> span5 = e} >you.</div>
      </div>

      <div className="message-content">
        {messages.map((m, i) => (
          <div className="message-container" id={i}>
            <div className="message-header">{m.header}</div>
            <div className="message-para">{m.para}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyMessage;