import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div className="header">
        <div id="navbar">
          <div id="logo">
            <a href="logo"><img src={require('./images/Logo.jpg')} alt=""/></a>
          </div>
          <div id="menu">
            <ul className="dropdowns">
              <li><a href="">PRESIDENT AOUN</a></li>
              <li><a href="">ADMISSIONS</a></li>
              <li><a href="">ADACEMICS</a></li>
              <li><a href="">RESEARCH</a></li>
              <li><a href="">MAKE A GIFT</a></li>
            </ul>
            <div className="search">
              <a href=""><img src={require('./images/Search.jpg')} alt=""/></a>
            </div>
            <div className="supernav">
              <a href=""><img src={require('./images/More.jpg')} alt=""/></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;