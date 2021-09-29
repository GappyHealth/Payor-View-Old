// Root Imports
import React, { Component } from "react";

// Component Imports
import OnSuccess from "./onSuccess";
import Confirmation from "./confirmation";

// Services
import { serverPOST } from "../../services/server";

class onComplete extends Component {
  state = {
    isLoading: false,
    show: false,
    pin: "",
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    // Set Loading to TRUE
    this.setState({ isLoading: true });

    // Create Patient POST Request
    const { pin } = this.state;
    const { pt } = this.props;

    let obj = {
      pin: pin,
      patient: pt,
    };

    // Send POST Request
    // TEMPORARY CODE TO MIMIC POST REQUEST
    let response = {
      staff: "Zaid Uddin",
      status: 0,
    };

    setTimeout(() => {
      if (obj.pin == "1234") {
        response.status = 200;
      } else {
        response.status = 500;
      }

      // Wait for Response
      console.log(response);

      // Call Function Based on Response
      if (response.status == 200) this.handleOnSuccess();
      else if (response.status == 500) this.handleOnError();
    }, 3000);
  };

  handleOnChange = ({ currentTarget: input }) => {
    let pin = this.state.pin;
    pin = input.value;

    this.setState({ pin });
  };

  handleOnSuccess() {
    console.log("Success!!!");

    this.setState({ show: true, isLoading: false });
  }

  handleOnError() {}

  render() {
    const { isLoading, show, pin } = this.state;
    const { count, pt } = this.props;

    return (
      <React.Fragment>
        {isLoading ? (
          <div className="m-5 d-flex justify-content-center">
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        ) : show ? (
          <OnSuccess />
        ) : (
          <Confirmation
            count={count}
            pt={pt}
            pin={pin}
            handleOnSubmit={this.handleOnSubmit}
            handleOnChange={this.handleOnChange}
          />
        )}
      </React.Fragment>
    );
  }
}

export default onComplete;
