import React, { useState, useRef, useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap';
import './scss/gallery.css';

import GalleryContent from './GalleryContent';

function Gallery() {

  let span1 = useRef(null);
  let span2 = useRef(null);
  let span3 = useRef(null);
  let span4 = useRef(null);

  useEffect(() => {
    TweenMax.staggerFrom([span1,span2,span3,span4], .8, {
      opacity: 0,
      y: 10,
      ease: Power3.easeOut,
      delay: 1.5
    }, .1);
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

  return (
    <div className="gallery-page page">
      <div className="header">
        <div ref={ e => span1 = e }>Explore<br /></div>
        <div ref={ e => span2 = e }>Aileen's<br /></div>
        <div ref={ e => span3 = e }>Gallery for<br /></div>
        <div ref={ e => span4 = e }>this October<br /></div>
      </div>

      <div className="content">
        {imageSource.map( src => (
          <GalleryContent source={src} />
        ))}
        {/* <div className="header">
          Album {source.path}
        </div>
      <div className="date">{source.date}</div>

      <div className="image-grid">
        {new Array(source.count).fill(0).map( (c, i) => (
          <div className="item" style={{ gridColumn: pattern[i] }}>
            <img src={require(`../image/album${source.path}/${i+1}.jpg`)} alt="grid-" />
            <div className="darken"></div>
          </div>
        ))} */}
      </div>

    </div>
  );
}

export default Gallery;