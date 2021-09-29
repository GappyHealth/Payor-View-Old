import React, { Component } from "react";
import { getBillCPT } from "../../../services/server";
import Modal from "react-bootstrap/Modal";
import OnComplete from '../../taskSubmission/onComplete';

class BillCPT extends Component {
  state = {
    pt: getBillCPT(),
    visible: false,
    count: 0,
  };

  componentDidMount() {}

  handleOnCheck(data) {
    var patients = this.state.pt;
    var count = this.state.count;

    for (let i = 0; i < patients.length; i++) {
      if (patients[i].id == data.id) {
        if (patients[i].status == "billed") {
          patients[i].status = "null";
          count -= 1;
        } else {
          patients[i].status = "billed";
          count += 1;
        }
      }
    }

    this.setState({ pt: patients, count: count });
  }

  handleAllCheck() {
    var patients = this.state.pt;
    var count = this.state.count;

    if (count == patients.length) {
      for (let i = 0; i < patients.length; i++) {
        patients[i].status = "null";
      }
      count = 0;
    } else {
      for (let i = 0; i < patients.length; i++) {
        patients[i].status = "billed";
      }
      count = patients.length
    }

    this.setState({ pt: patients, count: count });
  }

  handleConf() {
    this.setState({ visible: true });
  }

  handleClose() {
    this.setState({ visible: false });
  }

  render() {
    const { pt, count } = this.state;
    console.log(count);

    return (
      <React.Fragment>
        <div className="" style={{ margin: "5%" }}>
          <React.Fragment>
            <h1>CPTII Billing</h1>
            <hr></hr>
          </React.Fragment>

          <div
            className=""
            style={{ marginTop: "100px", marginBottom: "100px", width: "100%" }}
          >
            <h3 className="font-weight-light text-center">
              CPTII codes are reporting codes which allow payors to ID where
              members’ BPs stand within a controlled or uncontrolled range, any
              given year. Gappy has automatically paired the appropriate CPTII
              codes based on the systolic and diastolic readings for you
            </h3>
          </div>

          <table
            className="table table-responsive"
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
                <th className="font-weight-bold" style={{ width: "20%" }}>
                  Patient Name
                </th>
                <th className="font-weight-bold" style={{ width: "10%" }}>
                  Systolic
                </th>
                <th className="font-weight-bold" style={{ width: "10%" }}>
                  CPTII
                </th>
                <th className="font-weight-bold" style={{ width: "10%" }}>
                  Diastolic
                </th>
                <th className="font-weight-bold" style={{ width: "10%" }}>
                  CPTII
                </th>
                <th
                  className="font-weight-bold text-center"
                  style={{ width: "20%" }}
                  onClick={() => this.handleAllCheck()}
                >
                  {count == pt.length ? (
                    <i class="fa fa-check-square text-success fa-2x"></i>
                  ) : (
                    <i class="fa fa-check-square fa-2x"></i>
                  )}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan={pt.length + 1} className="">
                  Please submit the corresponding CPTII Codes for the patients
                  listed
                </td>
              </tr>
              {pt.map((ea) => (
                <tr key={ea.id}>
                  <td>
                    {ea.first_name} {ea.last_name}
                  </td>
                  <td style={{ borderLeft: "1px solid black" }}>
                    {ea.systolic}
                  </td>
                  <td>{ea.syscpt}</td>
                  <td style={{ borderLeft: "1px solid black" }}>
                    {ea.diastolic}
                  </td>
                  <td>{ea.diacpt}</td>
                  <td
                    className="text-center"
                    onClick={() => this.handleOnCheck(ea)}
                  >
                    {ea.status == "billed" ? (
                      <i class="fa fa-check-square text-success fa-2x"></i>
                    ) : (
                      <i class="fa fa-check-square fa-2x"></i>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: "100px" }}></div>

          <React.Fragment className="mt-5 d-flex justify-content-center">
            <button
              onClick={() => this.handleConf()}
              className="btn p-3 btn-success btn-block"
              disabled={count >= 1 ? false : true}
            >
              <h3 className="font-weight-bold text-center">
                Complete to Unlock {count}/{pt.length} Points
              </h3>
            </button>
          </React.Fragment>

          <Modal
            dialogClassName="sm"
            show={this.state.visible}
            effect="fadeInUp"
          >
            <button
              onClick={() => this.handleClose()}
              className="mt-2 btn ml-auto"
            >
              <i class="fa fa-times fa-2x"></i>
            </button>

            <OnComplete 
              count={`${count}/${pt.length}`}
              pt={pt}
            />

          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

export default BillCPT;
