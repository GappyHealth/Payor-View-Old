import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";

// Services
import { getPatient, finishTask } from "../../../services/server";

// Component Imports
import OnComplete from '../../taskSubmission/onComplete';

class ScheduleAppt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: "",
      patient: {
        firstName: "Zaid",
        LastName: "Uddin",
        phone: "123432543254",
      },
      value: "",
      visible: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    //this.setState({ patient: getPatient(this.props.location.pathname) });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    // finishTask(this.state.checked, this.state.patient, this.state.value);
    this.setState({ award: true });
  }

  render() {
    const { patient, visible } = this.state;

    return (
      <React.Fragment>
        <div className="" style={{ margin: "5%" }}>
          <React.Fragment>
            <h1>Appointment Scheduling</h1>
            <hr></hr>
          </React.Fragment>

          <div
            className=""
            style={{ marginTop: "100px", marginBottom: "100px", width: "100%" }}
          >
            <h3 className="font-weight-light text-center">...</h3>
          </div>
          <table
            className="table table"
            style={{
              width: "100%",
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
                  Call {patient.firstName} {patient.lastName} in for an
                  appointment to obtain her BP
                </td>
                <td rowspan="4">{patient.phone}</td>
                <td>Appointment Scheduled</td>
                <td onClick={() => this.setState({ checked: "scheduled" })}>
                  {this.state.checked === "scheduled" ? (
                    <i class="fa fa-check-square fa-2x text-success"></i>
                  ) : (
                    <i class="fa fa-check-square fa-2x"></i>
                  )}
                </td>
              </tr>
              <tr>
                <td>Patient did not Pick Up</td>
                <td onClick={() => this.setState({ checked: "noAnswer" })}>
                  {this.state.checked === "noAnswer" ? (
                    <i class="fa fa-check-square fa-2x text-success"></i>
                  ) : (
                    <i class="fa fa-check-square fa-2x"></i>
                  )}
                </td>
              </tr>
              <tr>
                <td className="text-danger">
                  Patient not interested in scheduling appointment (0 pts.)
                </td>
                <td onClick={() => this.setState({ checked: "notInterested" })}>
                  {this.state.checked === "notInterested" ? (
                    <i class="fa fa-check-square fa-2x text-success"></i>
                  ) : (
                    <i class="fa fa-check-square fa-2x"></i>
                  )}
                </td>
              </tr>
              <tr>
                <td>Patient Deceased / Moved</td>
                <td onClick={() => this.setState({ checked: "other" })}>
                  {this.state.checked === "other" ? (
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
              disabled={!this.state.checked}
            >
              <h3 className="font-weight-bold text-center">
                Complete to Unlock 15 Points
              </h3>
            </button>
          </React.Fragment>

          <Modal dialogClassName="sm" show={visible} effect="fadeInUp">
            <button
              onClick={() => this.setState({ visible: false })}
              className="mt-2 btn ml-auto"
            >
              <i class="fa fa-times fa-2x"></i>
            </button>

            <OnComplete count={5} pt={patient} />
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

export default ScheduleAppt;
