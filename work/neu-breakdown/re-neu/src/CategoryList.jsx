import React from 'react';
import img1 from './images/Undergraduate.jpg';
import img2 from './images/Graduate.jpg';
import img3 from './images/Research.jpg';
import img4 from './images/Lifelong.jpg';

const imgsArr = [img1,img2,img3,img4];

const CategoryList = ({
  categories
}) => {
  const categoryText = categories.map(
    category => {
      const imgURL = imgsArr.shift();
      return(
        <div>
          <a className="category-image" href="">
            <img src={imgURL} alt=""/>
            <h2>{category.title}</h2>
          </a>
          <ul className="category-list">
            <li><a href="">{category.list[0]}</a></li>
            <li><a href="">{category.list[1]}</a></li>
            <li><a href="">{category.list[2]}</a></li>
          </ul>
        </div>
      );
    }
  );
  return (
    <div className="categories">
      { categoryText }
    </div>
  );
};

export default CategoryList;

