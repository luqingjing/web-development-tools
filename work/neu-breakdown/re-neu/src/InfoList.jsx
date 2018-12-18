import React from 'react';
import img1 from './images/Athletics.jpg';
import img2 from './images/Alumni.jpg';
import img3 from './images/StudentLife.jpg';

const imgsArr = [img1,img2,img3];

const InfoList = ({
  infos
}) => {
  const infoText = infos.map(
    info => {
      const imgURL = imgsArr.shift();
      return(
        <li className="info">
          <a href="">
            <img className="info-image" src={imgURL} alt=""/>
            <h3>{info.title}</h3>
            <p>{info.text}</p>
          </a>
        </li>
      );
    }
  );
  return (
    <div className="infos">
      <ul>
        { infoText }
      </ul>
    </div>
  );
};

export default InfoList;