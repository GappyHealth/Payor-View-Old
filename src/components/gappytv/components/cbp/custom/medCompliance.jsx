import React, { Component } from "react";

import Modal from "react-bootstrap/Modal";
import OnComplete from "../../taskSubmission/onComplete";

class MedicationCompliance extends Component {
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

  handleConf() {
    this.setState({ visible: true });
  }

  handleClose() {
    this.setState({ visible: false });
  }

  render() {
    const { option, visible, pt } = this.state;

    return (
      <React.Fragment>
        <div className="" style={{ margin: "5%" }}>
          <div style={{}}></div>
          <React.Fragment>
            <h1>Medication Compliance</h1>
            <hr></hr>
          </React.Fragment>

          <div
            className=""
            style={{ marginTop: "100px", marginBottom: "100px", width: "100%" }}
          >
            <h3 className="font-weight-light text-center">
              Mr. Doug is Hypertensive and has been prescribed MET. His last
              fill was 8.4.19. Before we call him in to get a controlled reading
              for the year, we need to get him compliant on his BP Medication
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
                <td rowspan="8" className="">
                  Call Mr. Doug and Understand reason for non-compliance with
                  Medication
                </td>
                <td rowspan="8">248.989.9876</td>
                <td>Already Taking Mediation</td>
                <td onClick={() => this.handleOnChecked("taking")}>
                  {option == "taking" ? (
                    <i class="fa fa-check-square fa-2x text-success"></i>
                  ) : (
                    <i class="fa fa-check-square fa-2x"></i>
                  )}
                </td>
              </tr>
              <tr>
                <td>Physician Prescribed BP Medication</td>
                <td onClick={() => this.handleOnChecked("prescribed")}>
                  {option == "prescribed" ? (
                    <i class="fa fa-check-square fa-2x text-success"></i>
                  ) : (
                    <i class="fa fa-check-square fa-2x"></i>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  Cost Barrier, Physician Prescribed Alternative BP Medication
                </td>
                <td onClick={() => this.handleOnChecked("costBarrier")}>
                  {option == "costBarrier" ? (
                    <i class="fa fa-check-square fa-2x text-success"></i>
                  ) : (
                    <i class="fa fa-check-square fa-2x"></i>
                  )}
                </td>
              </tr>
              <tr>
                <td>Patient Access Issue Resolved</td>
                <td onClick={() => this.handleOnChecked("accessResolved")}>
                  {option == "accessResolved" ? (
                    <i class="fa fa-check-square fa-2x text-success"></i>
                  ) : (
                    <i class="fa fa-check-square fa-2x"></i>
                  )}
                </td>
              </tr>
              <tr>
                <td>Patient Education Requested and Scheduled</td>
                <td onClick={() => this.handleOnChecked("education")}>
                  {option == "education" ? (
                    <i class="fa fa-check-square fa-2x text-success"></i>
                  ) : (
                    <i class="fa fa-check-square fa-2x"></i>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  Adverse Effects Experienced, Physician Prescribed Alternative
                  BP Medication
                </td>
                <td
                  onClick={() => this.handleOnChecked("alternativePrescribed")}
                >
                  {option == "alternativePrescribed" ? (
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
                <td>Patient Compliance not Met (0 Pts.)</td>
                <td onClick={() => this.handleOnChecked("notMet")}>
                  {option == "notMet" ? (
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
              onClick={() => this.handleConf()}
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
            onClick={() => this.handleClose()}
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

export default MedicationCompliance;
