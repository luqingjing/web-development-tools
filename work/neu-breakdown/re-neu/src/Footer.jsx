import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          <div className="campuses">
            <ul>
              <li><a href="">Boston</a></li>
              <li><a href="">Burlington</a></li>
              <li><a href="">Nahant</a></li>
              <li><a href="">San Francisco Bay Area</a></li>
              <li><a href="">Seattle</a></li>
              <li><a href="">Toronto</a></li>
              <li><a href="">Charlotte</a></li>
            </ul>
            <p>
              <a href="">360 Huntington Ave., Boston, Massachusetts 02115 |</a>
              <a href=""> 617.373.2000 |</a>
              <a href=""> TTY 617.373.3768 |</a>
              <a href=""> Emergency Information</a>
              <br/>
              © 2018  Northeastern University |
              <a href=""> MyNortheastern</a>
            </p>
          </div>
          <div className="connect">
            <p>
              <a href="">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;