// Root Imports
import React, { Component } from "react";

// External Library Imports
//...

// Component Imports
import { Header } from "../common/header";
import AllStarProfiles from "../user/allStarProfiles";
import Accordions from '../tasks/accordions';

class Dash extends Component {
  state = {};
  render() {
    return (
      <div style={{paddingLeft: "5%", paddingRight: "5%"}}>
        <div>
          <h3 className="text-center">Gap Closure All Stars</h3>
        </div>
        <section
          className="d-flex"
          style={{
            overflow: "auto",
            whiteSpace: "nowrap",
            height: "auto",
            width: "auto",
          }}
        >
          <AllStarProfiles />
        </section>
        
        <section className="">
          <Accordions />
        </section>

      </div>
    );
  }
}

export default Dash;
