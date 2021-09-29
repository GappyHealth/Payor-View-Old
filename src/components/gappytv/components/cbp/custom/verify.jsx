import React, { Component } from "react";

class Verify extends Component {
  state = {
    patient: {
      firstName: "Zaid",
      lastName: "Uddin",
      dob: "1/4/1999",
      physicianName: "Chika Fujiwara",
    },
    found: false,
    name: false,
    dob: false,
    phys: false,
  };
  render() {
    const { patient } = this.state;

    return (
      <React.Fragment>
        <div className="" style={{ margin: "5%" }}>
          <React.Fragment>
            <h1>Patient Verification</h1>
            <hr></hr>
          </React.Fragment>

          <div
            className=""
            style={{ marginTop: "100px", marginBottom: "100px", width: "100%" }}
          >
            <h3 className="font-weight-light text-center">
              Payor records are indicating that {patient.firstName} {patient.lastName} is affiliated with
              doctor {patient.physicianName} however, no EMR
              records match {patient.firstName} {patient.lastName} and/or DOB. Please verify spelling in
              EMR and type patient name and/or dob in as seen in EMR
            </h3>
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
                <th className="font-weight-bold" style={{ width: "35%" }}>
                  Patient ID to Verify
                </th>
                <th className="font-weight-bold" style={{ width: "20%" }}>
                  Same as Payor
                </th>
                <th className="font-weight-bold" style={{ width: "30%" }}>
                  Practice Findings
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="4" className="">
                  Patient Verification
                </td>
                <td>Affiliated with Practice</td>
                <td className="d-flex">
                  <button className="btn btn-outline-success mr-3">Yes</button>
                  <button className="btn btn-outline-danger">No</button>
                </td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>
                  {patient.firstName} {patient.lastName}
                </td>
                <td
                  onClick={() => {
                    let name = this.state.name;
                    this.setState({ name: !name });
                  }}
                >
                  {this.state.name === true ? (
                    <i class="fa fa-check-square fa-2x text-success"></i>
                  ) : (
                    <i class="fa fa-check-square fa-2x"></i>
                  )}
                </td>
                <td>
                  <textarea></textarea>
                </td>
              </tr>
              <tr>
                <td>{patient.dob}</td>
                <td
                  onClick={() => {
                    let dob = this.state.dob;
                    this.setState({ dob: !dob });
                  }}
                >
                  {this.state.dob === true ? (
                    <i class="fa fa-check-square fa-2x text-success"></i>
                  ) : (
                    <i class="fa fa-check-square fa-2x"></i>
                  )}
                </td>
                <td>
                  <textarea></textarea>
                </td>
              </tr>
              <tr>
                <td>{patient.physicianName}</td>
                <td
                  onClick={() => {
                    let phys = this.state.phys;
                    this.setState({ phys: !phys });
                  }}
                >
                  {this.state.phys === true ? (
                    <i class="fa fa-check-square fa-2x text-success"></i>
                  ) : (
                    <i class="fa fa-check-square fa-2x"></i>
                  )}
                </td>
                <td>
                  <textarea></textarea>
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
        </div>
      </React.Fragment>
    );
  }
}

export default Verify;
