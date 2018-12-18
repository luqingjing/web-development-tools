import React from 'react';
import { Image, Button } from 'react-bootstrap';
import '../css/Logined.css';

const Logined = ({
  username,
  jumpToAddPage,
  jumpToPersonal
}) => {

  return (
    <div id="logined">
      <Image id="profile-picture" src={require("../images/cat.jpg")} responsive circle/>
      <p>{username}</p>
      <Button
        className="logined-button"
        bsStyle="primary"
        type="submit"
        onClick={jumpToAddPage}
      >
        New Blog
      </Button>
      <Button
        className="logined-button"
        bsStyle="primary"
        type="submit"
        onClick={jumpToPersonal}
      >
        Personal Homepage
      </Button>
    </div>
  );
};

export default Logined;