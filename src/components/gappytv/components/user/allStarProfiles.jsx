// Root Imports
import React, { Component } from "react";

// Component Imports
import Profile from './profile';

// TEMPORARY ASSETS
import img from '../../assets/profile4.jpg';

class AllStarProfiles extends Component {
  state = {};
  render() {
    return (
      <div>
        <Profile 
            img={img}
            name="Zaid Uddin"
            points="8400"
        />
        <Profile 
            img={img}
            name="Zaid Uddin"
            points="8400"
        />
        <Profile 
            img={img}
            name="Zaid Uddin"
            points="8400"
        />
        <Profile 
            img={img}
            name="Zaid Uddin"
            points="8400"
        />
        <Profile 
            img={img}
            name="Zaid Uddin"
            points="8400"
        />
        <Profile 
            img={img}
            name="Zaid Uddin"
            points="8400"
        />
      </div>
    );
  }
}

export default AllStarProfiles;
