import React, { Component } from "react";

import Modal from "react-bootstrap/Modal";
import OnComplete from "../../taskSubmission/onComplete";

class UpcomingAppt extends Component {
  state = {
    option: "",
    visible: false,
    pt: [
      {
        id: "1",
        first_name: "AGNES",
        last_name: "DOCK",
        systolic: "128",
        syscpt: "3077F",
        diastolic: "64",
        diacpt: "3099F",
        status: "billed",
      },
    ],
  };

  handleOnChecked(text) {
    if (this.state.option == text) this.setState({ option: "" });
    else this.setState({ option: text });
  }

  render() {
    const { option, visible, pt } = this.state;

    return (
      <React.Fragment>
        <div className="" style={{ margin: "5%" }}>
          <div style={{}}></div>
          <React.Fragment>
            <h1>Upcoming Appointment</h1>
            <hr></hr>
          </React.Fragment>

          <div
            className=""
            style={{ marginTop: "100px", marginBottom: "100px", width: "100%" }}
          >
            <h3 className="font-weight-light text-center">
              Mrs. Jay is a hypertensive. The last time she came in her BP
              reading was xxx. In order to ensure a reading closer to control,
              appropriate measures need to be taken prior to the appointment.
              Please remind Mrs. Jay to take her BP medications as prescribed,
              and not drink any coffee / caffeine prior to the BP reading.
              Please try to identify any barriers Mrs. Jay will have in adhering
              to these instructions.
            </h3>
            <h3 className="font-weight-light text-center mt-5">
              Please also ensure that the Medical Assistant team taking the BP
              reads is aware of all protocols that need to be taken including,
              don’t cross legs during read, arm should be at heart level,
              sitting up-right etc.. And taking multiple reads to ensure
              accuracy
            </h3>
          </div>

          <table
            className="table table"
            style={{
              width: "100%",
              height: "25%",
              overflow: "auto",
            }}
          >
            <thead style={{ borderBottom: "1px solid lightGrey" }}>
              <tr>
                <th className="font-weight-bold" style={{ width: "20%" }}>
                  Task
                </th>
                <th className="font-weight-bold" style={{ width: "10%" }}>
                  Make Call
                </th>
                <th className="font-weight-bold" style={{ width: "40%" }}>
                  Record Outcome
                </th>
                <th className="font-weight-bold" style={{ width: "10%" }}>
                  Select One
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="4" className="">
                  Call Mrs. Jay to review previous BP and what needs to be done
                  before upcoming visit
                </td>
                <td rowspan="4">xxx.xxx.xxxx</td>
                <td>Patient education complete, reviewed all talking points</td>
                <td onClick={() => this.handleOnChecked("completed")}>
                  {option == "completed" ? (
                    <i class="fa fa-check-square fa-2x text-success"></i>
                  ) : (
                    <i class="fa fa-check-square fa-2x"></i>
                  )}
                </td>
              </tr>
              <tr>
                <td>Patient did not Pick Up</td>
                <td onClick={() => this.handleOnChecked("noAnswer")}>
                  {option == "noAnswer" ? (
                    <i class="fa fa-check-square fa-2x text-success"></i>
                  ) : (
                    <i class="fa fa-check-square fa-2x"></i>
                  )}
                </td>
              </tr>
              <tr>
                <td className="text-danger">
                  Patient not interested in education (0 points)
                </td>
                <td onClick={() => this.handleOnChecked("notInterested")}>
                  {option == "notInterested" ? (
                    <i class="fa fa-check-square fa-2x text-success"></i>
                  ) : (
                    <i class="fa fa-check-square fa-2x"></i>
                  )}
                </td>
              </tr>
              <tr>
                <td>Patient Deceased / Moved</td>
                <td onClick={() => this.handleOnChecked("other")}>
                  {option == "other" ? (
                    <i class="fa fa-check-square fa-2x text-success"></i>
                  ) : (
                    <i class="fa fa-check-square fa-2x"></i>
                  )}
                </td>
              </tr>
            </tbody>
          </table>

          <div style={{ marginTop: "100px" }}></div>

          <React.Fragment className="mt-5 d-flex justify-content-center">
            <button
              onClick={() => this.setState({ visible: true })}
              className="btn p-3 btn-success btn-block"
              disabled={this.state.option ? false : true}
            >
              <h3 className="font-weight-bold text-center">
                Complete to Unlock 5 Points
              </h3>
            </button>
          </React.Fragment>
        </div>

        <Modal dialogClassName="sm" show={visible} effect="fadeInUp">
          <button
            onClick={() => this.setState({ visible: false })}
            className="mt-2 btn ml-auto"
          >
            <i class="fa fa-times fa-2x"></i>
          </button>

          <OnComplete count={5} pt={pt} />
        </Modal>
      </React.Fragment>
    );
  }
}

export default UpcomingAppt;
