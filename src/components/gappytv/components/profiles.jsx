import React, { Component } from "react";
import Profile from "./user/profile";
import '../App.css';


class Profiles extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Profile />
      </React.Fragment>
    );
  }
}

export default Profiles;
