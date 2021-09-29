// Root Imports
import React, { Component } from "react";

// Component Imports
import TaskAccordion from "./taskAccordion";

class Accordions extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="pt-1 pb-1">
          <TaskAccordion
            color="blue"
            heading="End of Day"
            body="The Daily Tasks"
          />
        </div>
        <div className="pt-1 pb-1">
          <TaskAccordion
            color="orange"
            heading="End of Week"
            body="The Weekly Tasks"
          />
        </div>
        <div className="pt-1 pb-1">
          <TaskAccordion
            color="red"
            heading="End of Month"
            body="The Monthly Tasks"
          />
        </div>
        <div className="pt-1 pb-1">
          <TaskAccordion
            color="green"
            heading="Completed Tasks"
            body="The Completed Tasks"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Accordions;
