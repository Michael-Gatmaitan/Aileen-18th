import React, { useRef, useEffect, useState } from 'react';

function GalleryContent(props) {
  
  let { path, count, date } = props.source;
  let pattern = ['1/3', '3/6', '1/4', '4/6', '1/3', '3/6', '1/4', '4/6', '1/3', '3/6', '1/4', '4/6', '1/3', '3/6', '1/4', '4/6', '1/3', '3/6', '1/4', '4/6', '1/3'];
  let dir = `../image/album`;

  // Card
  let [isCardOpen, setIsCardOpen] = useState(false);

  return (
    <React.Fragment>
      <div className="content-header">
        Album {path}
      </div>
      <div className="date">{date}</div>

      <div className="image-grid">
        {new Array(count).fill(0).map( (c, i) => (
          <div className="item"
            style={{ gridColumn: pattern[i] }}
            onClick={() => {

            }}  
          >
            <img src={require(`../image/album${path}/${i+1}.jpg`)} alt="grid-" />
            <div className="darken"></div>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default GalleryContent;