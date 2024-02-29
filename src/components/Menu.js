import React from "react";
import Container from "./Container";
import './component.css';
import pdf from './Little-Lemon-All-day-menu-2024_compressed.pdf';

export default function Menu(props) {
  const imgContent1 = {
    image1: 'image1.jpg',
    image3: 'image3.jpg',
    image5: 'image5.jpg',
    image7: 'image7.jpg',
  };

  const imgContent2 = {
    image2: 'image2.jpg',
    image4: 'image4.jpg',
    image6: 'image6.jpg',
    image8: 'image8.jpg',
  };

  return (
    <Container borderTop={props.cancelTopBorder ? '' :'gray solid 1px'} borderBottom= {'gray solid 1px'}>
      <section className="menu-container" id="menu">
          <a
            href={pdf}
            target="_blank"
            className="menu-pdf"
          >
            View Full PDF Menu
          </a>
        <div className="menu-image-area">
          <div className="menu-image-area-left">
          {Object.keys(imgContent1).map((image) => {
            return (
               <img src={imgContent1[image]} alt={image} key={image} className='menuImg' />
          )
          })}
          </div>
          <div className="menu-image-area-right">
          {Object.keys(imgContent2).map((image) => {
            return (
              <img src={imgContent2[image]} alt={image} key={image} className='menuImg' />
            )
          })}
          </div>
        </div>
      </section>
    </Container>
  );
}
