import React from 'react';

class Homepage extends React.Component {
  render() {
    return (
        <div className="categories">
          <div>
            <a className="category-image" href="">
              <img src={require('./images/Undergraduate.jpg')} alt=""/>
              <h2>UNDERGRADUATE</h2>
            </a>
            <ul className="category-list">
              <li><a href="">Academic Programs</a></li>
              <li><a href="">Admissions</a></li>
              <li><a href="">Visit Campus</a></li>
            </ul>
          </div>
          <div>
            <a className="category-image" href="">
              <img src={require('./images/Graduate.jpg')} alt=""/>
              <h2>GRADUATE</h2>
            </a>
            <ul className="category-list">
              <li><a href="">Graduate Programs</a></li>
              <li><a href="">Admissions</a></li>
              <li><a href="">PhD Education</a></li>
            </ul>
          </div>
          <div>
            <a className="category-image" href="">
              <img src={require('./images/Research.jpg')} alt=""/>
              <h2>RESEARCH</h2>
            </a>
            <ul className="category-list">
              <li><a href="">Health</a></li>
              <li><a href="">Security</a></li>
              <li><a href="">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <a className="category-image" href="">
              <img src={require('./images/Lifelong.jpg')} alt=""/>
              <h2>LIFELONG LEARNING</h2>
            </a>
            <ul className="category-list">
              <li><a href="">Professional Programs</a></li>
              <li><a href="">Campus Network</a></li>
              <li><a href="">Admissions</a></li>
            </ul>
          </div>
        </div>
    );
  }
}

export default Homepage;