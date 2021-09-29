// Root Imports
import React, { Component } from "react";
import "../App.css";

// External Library Imports
import { Row, Col, CardBody } from "reactstrap";
import { Accordion, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Services
import { getWeekly } from "../services/server";
import { getMBC } from "../services/server";

// React Components
// ...

// Assets
import img1 from "../assets/profile4.jpg";
import img2 from "../assets/profile4.jpg";
import img3 from "../assets/profile4.jpg";
import img4 from "../assets/profile4.jpg";
import img5 from "../assets/profile5.jpg";
import img6 from "../assets/profile6.png";

class DashBoard extends Component {
  state = {
    weekly: getWeekly(),
    monthly: getMBC(),
  };

  goToTask(task, ptID) {
    {
      (() => {
        switch (task) {
          case "wsa":
            return this.props.history.push(`/cbp/schedule/${ptID}`);
          case "mbc":
            return this.props.history.push(`/cbp/billing`);
          default:
            return <></>;
        }
      })();
    }
  }

  render() {
    const { weekly, monthly } = this.state;

    return (
      <React.Fragment>
        <h2 className="ml-5">Gap Closure All Stars</h2>

        <Row>
          <Col>
            <div className="mt-1 mb-3 justify-content-left">
              <CardBody>
                <div className="d-flex justify-content-center">
                  <Link to="/profile">
                    <img
                      src={img2}
                      alt=""
                      style={{
                        width: "156px",
                        height: "108px    ",
                        borderRadius: "50%",
                      }}
                      className=""
                    />
                  </Link>
                </div>
                <div className="mt-1 mb-4 text-center">
                  <p
                    className="h6 text-center text-overflow text-decoration-none"
                    href="#"
                  >
                    Lawren Rightwork
                  </p>
                  <div className="text-center text-success font-weight-bold">
                    85 Points
                  </div>
                </div>
              </CardBody>
            </div>
          </Col>
          <Col>
            <div className="mb-3 justify-content-left">
              <CardBody>
                <div className="d-flex justify-content-center">
                  <img
                    src={img3}
                    alt=""
                    style={{
                      width: "156px",
                      height: "108px    ",
                      borderRadius: "50%",
                    }}
                    className=""
                  />
                </div>
                <div className="mt-1 mb-4 text-center">
                  <p className="h6 text-center text-decoration-none" href="#">
                    Benjamin Casik
                  </p>
                  <div className="text-center text-success font-weight-bold">
                    60 Points
                  </div>
                </div>
              </CardBody>
            </div>
          </Col>
          <Col>
            <div className="mb-3 justify-content-left">
              <CardBody>
                <div className="d-flex justify-content-center">
                  <img
                    src={img4}
                    alt=""
                    style={{
                      width: "156px",
                      height: "108px    ",
                      borderRadius: "50%",
                    }}
                    className=""
                  />
                </div>
                <div className="mt-1 mb-4 text-center">
                  <p className="h6 text-center text-decoration-none" href="#">
                    Devin Johnson
                  </p>
                  <div className="text-center text-success font-weight-bold">
                    45 Points
                  </div>
                </div>
              </CardBody>
            </div>
          </Col>
          <Col>
            <div className="mb-3 justify-content-left">
              <CardBody>
                <div className="d-flex justify-content-center">
                  <img
                    src={img5}
                    alt=""
                    style={{
                      width: "156px",
                      height: "108px    ",
                      borderRadius: "50%",
                    }}
                    className=""
                  />
                </div>
                <div className="mt-1 mb-4 text-center">
                  <p className="h6 text-center text-decoration-none" href="#">
                    Kim Kamaleoning
                  </p>
                  <div className="text-center text-success font-weight-bold">
                    35 Points
                  </div>
                </div>
              </CardBody>
            </div>
          </Col>
          <Col>
            <div className="mb-3 justify-content-left">
              <CardBody>
                <div className="d-flex justify-content-center">
                  <img
                    src={img6}
                    alt=""
                    style={{
                      width: "156px",
                      height: "108px    ",
                      borderRadius: "50%",
                    }}
                    className=""
                  />
                </div>
                <div className="mt-1 mb-4 text-center">
                  <p className="h6 text-center text-decoration-none" href="#">
                    Frank Peterson
                  </p>
                  <div className="text-center text-success font-weight-bold">
                    35 Points
                  </div>
                </div>
              </CardBody>
            </div>
          </Col>
        </Row>

        <div>
          <Accordion defaultActiveKey="0" style={{ width: "100%" }}>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="" eventKey="0">
                  <h2 className="text-danger">
                    Complete by End of Day
                    <span style={{ marginLeft: "1133px" }}>
                      <i class="fa fa-plus"></i>
                    </span>
                  </h2>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <table
                    className="table table-hover"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <thead style={{ borderBottom: "1px solid lightGrey" }}>
                      <tr>
                        <th
                          className="font-weight-bold text-muted"
                          style={{ width: "30%" }}
                        >
                          Tasks
                        </th>
                        <th
                          className="font-weight-bold text-muted"
                          style={{ width: "30%" }}
                        >
                          Reason
                        </th>
                        <th
                          className="font-weight-bold text-muted"
                          style={{ width: "10%" }}
                        >
                          Patient Name
                        </th>
                        <th
                          className="font-weight-bold text-muted"
                          style={{ width: "10%" }}
                        >
                          Status
                        </th>
                        <th
                          className="font-weight-bold text-muted"
                          style={{ width: "30%" }}
                        >
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {weekly.map((ea) => (
                        <tr
                          key={ea.patientID}
                          onClick={() => this.goToTask(ea._id, ea.patientID)}
                        >
                          <td className="align-middle font-weight-bold">
                            <i class="fa fa-circle text-danger"></i>
                            {ea.task}
                          </td>
                          <td>
                            CPTII codes are reporting codes which allow payors
                            to ID where members’ BPs stand within a controlled
                            or uncontrolled range, any given year. Gappy has
                            automatically paired the appropriate CPTII codes
                            based on the systolic and diastolic readings for
                            you.
                            <span
                              className="ml-2 badge badge-pill text-white"
                              style={{ background: "green" }}
                            >
                              Call
                            </span>
                            <span
                              className="ml-2 badge badge-pill text-white"
                              style={{ background: "black" }}
                            >
                              Schedule
                            </span>
                          </td>
                          <td className="align-middle">
                            {ea.firstName} {ea.lastName}
                          </td>
                          <td className="align-middle">
                            <span
                              className="ml-2 badge badge-pill text-white"
                              style={{ background: "red" }}
                            >
                              {ea.status}
                            </span>
                          </td>
                          <td>
                            CPTII codes are reporting codes which allow payors
                            to ID where members’ BPs stand within a controlled
                            or uncontrolled range
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="" eventKey="1">
                  <h2 className="text-primary">
                    Complete by End of Week
                    <span style={{ marginLeft: "1112px" }}>
                      <i class="fa fa-plus"></i>
                    </span>
                  </h2>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <table
                    className="table table-hover"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <thead style={{ borderBottom: "1px solid lightGrey" }}>
                      <tr>
                        <th
                          className="font-weight-bold text-muted"
                          style={{ width: "30%" }}
                        >
                          Tasks
                        </th>
                        <th
                          className="font-weight-bold text-muted"
                          style={{ width: "30%" }}
                        >
                          Reason
                        </th>
                        <th
                          className="font-weight-bold text-muted"
                          style={{ width: "10%" }}
                        >
                          Patient Name
                        </th>
                        <th
                          className="font-weight-bold text-muted"
                          style={{ width: "10%" }}
                        >
                          Status
                        </th>
                        <th
                          className="font-weight-bold text-muted"
                          style={{ width: "30%" }}
                        >
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {weekly.map((ea) => (
                        <tr
                          key={ea.patientID}
                          onClick={() => this.goToTask(ea._id, ea.patientID)}
                        >
                          <td className="align-middle font-weight-bold">
                            <i class="fa fa-circle text-danger"></i>
                            {ea.task}
                          </td>
                          <td>
                            CPTII codes are reporting codes which allow payors
                            to ID where members’ BPs stand within a controlled
                            or uncontrolled range, any given year. Gappy has
                            automatically paired the appropriate CPTII codes
                            based on the systolic and diastolic readings for
                            you.
                            <span
                              className="ml-2 badge badge-pill text-white"
                              style={{ background: "green" }}
                            >
                              Call
                            </span>
                            <span
                              className="ml-2 badge badge-pill text-white"
                              style={{ background: "black" }}
                            >
                              Schedule
                            </span>
                          </td>
                          <td className="align-middle">
                            {ea.firstName} {ea.lastName}
                          </td>
                          <td className="align-middle">
                            <span
                              className="ml-2 badge badge-pill text-white"
                              style={{ background: "red" }}
                            >
                              {ea.status}
                            </span>
                          </td>
                          <td>
                            CPTII codes are reporting codes which allow payors
                            to ID where members’ BPs stand within a controlled
                            or uncontrolled range
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="d-flex">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="" eventKey="2">
                  <h2 className="text-info">
                    Complete by End of Month
                    <span style={{ marginLeft: "1100px" }}>
                      <i class="fa fa-plus"></i>
                    </span>
                  </h2>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <table
                    className="table table-borderless table-hover"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <thead style={{ borderBottom: "1px solid lightGrey" }}>
                      <tr>
                        <th
                          className="font-weight-light"
                          style={{ width: "30%" }}
                        >
                          Tasks
                        </th>
                        <th
                          className="font-weight-light"
                          style={{ width: "30%" }}
                        >
                          Reason
                        </th>
                        <th
                          className="font-weight-light"
                          style={{ width: "20%" }}
                        >
                          Patient Name
                        </th>
                        <th
                          className="font-weight-light"
                          style={{ width: "10%" }}
                        >
                          Status
                        </th>
                        <th
                          className="font-weight-light"
                          style={{ width: "20%" }}
                        >
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr onClick={() => this.goToTask("mbc")}>
                        <td>{monthly.meta.task}</td>
                        <td>
                          CPTII codes are reporting codes which allow payors to
                          ID where members’ BPs stand within a controlled or
                          uncontrolled range, any given year. Gappy has
                          automatically paired the appropriate CPTII codes based
                          on the systolic and diastolic readings for you.
                        </td>
                        <td>{monthly.meta.patientName}</td>
                        <td>Not Started</td>
                        <td>...</td>
                      </tr>
                    </tbody>
                  </table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="" eventKey="4">
                  <h2 className="text-success">
                    Completed Tasks
                    <span style={{ marginLeft: "1235px" }}>
                      <i class="fa fa-plus"></i>
                    </span>
                  </h2>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  <table
                    className="table table-borderless table-hover"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <thead style={{ borderBottom: "1px solid lightGrey" }}>
                      <tr>
                        <th
                          className="font-weight-bold text-muted"
                          style={{ width: "25%" }}
                        >
                          Tasks
                        </th>
                        <th
                          className="font-weight-bold text-muted"
                          style={{ width: "30%" }}
                        >
                          Reason
                        </th>
                        <th
                          className="font-weight-bold text-center text-muted"
                          style={{ width: "10%" }}
                        >
                          Patient Name
                        </th>
                        <th
                          className="font-weight-bold text-center text-muted"
                          style={{ width: "13%" }}
                        >
                          Status
                        </th>
                        <th
                          className="font-weight-bold text-center text-muted"
                          style={{ width: "5%" }}
                        >
                          User
                        </th>
                        <th
                          className="font-weight-bold text-muted"
                          style={{ width: "30%" }}
                        >
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="align-middle font-weight-bold">
                          <i class="fa fa-circle text-danger"></i>
                          BP Check Appointment Scheduling
                        </td>
                        <td>
                          CPTII codes are reporting codes which allow payors to
                          ID where members’ BPs stand within a controlled or
                          uncontrolled range, any given year. Gappy has done
                          paired the appropriate CPTII codes based on the stuff.
                          <span
                            className="ml-2 badge badge-pill text-white"
                            style={{ background: "blue" }}
                          >
                            Call
                          </span>
                          <span
                            className="ml-2 badge badge-pill text-white"
                            style={{ background: "black" }}
                          >
                            Schedule
                          </span>
                        </td>
                        <td className="align-middle text-center">JOHN LOE</td>
                        <td className="text-center align-middle">
                          <span className="badge badge-pill bg-success text-white">
                            Completed
                          </span>
                          <h6></h6>
                          <h6 className="text-center">3/10/21 12:01pm</h6>
                        </td>
                        <td className="align-middle">
                          <img
                            src={img2}
                            alt=""
                            style={{
                              width: "132px",
                              height: "84px",
                              borderRadius: "50%",
                            }}
                            className="m-2"
                          />
                        </td>
                        <td>
                          CPTII codes are reporting codes which allow payors to
                          ID where members’ BPs stand within a controlled or
                          uncontrolled range
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
        {/* <div>
          <table
            className="table table-borderless table-hover"
            style={{
              cursor: "pointer",
            }}
          >
            <thead style={{ borderBottom: "1px solid lightGrey" }}>
              <tr>
                <th className="font-weight-light" style={{ width: "20%" }}>
                  Tasks
                </th>
                <th className="font-weight-light" style={{ width: "40%" }}>
                  Reason
                </th>
                <th className="font-weight-light" style={{ width: "10%" }}>
                  Patient Name
                </th>
                <th className="font-weight-light" style={{ width: "10%" }}>
                  Status
                </th>
                <th className="font-weight-light" style={{ width: "30%" }}>
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr onClick={() => this.openModal("bill")}>
                <td>Bill CPTII</td>
                <td>
                  The following patients have controlled BP reads, The payor
                  needs the corresponding CPTII codes billed.
                </td>
                <td>Multiple</td>
                <td>Not Started</td>
                <td>0/10 Billed</td>
              </tr>
              <tr onClick={() => this.openModal("compliance")}>
                <td>BP Medication Compliance</td>
                <td>
                  Patient has a diagnosis of HTN, and needs a documented
                  controlled reading this year. Records show he is not compliant
                  on his medications
                </td>
                <td>Joe Doug</td>
                <td>Not Started</td>
                <td>No Attempt Made to Reach Patient Yet.</td>
              </tr>
              <tr onClick={() => this.openModal("schedule")}>
                <td>BP Check Appointment Scheduling</td>
                <td>Call patient in to measure BP</td>
                <td>Alice Smith</td>
                <td>Not Started</td>
                <td>No attempts made to schdeule appointment with patient</td>
              </tr>
              <tr onClick={() => this.openModal("upcoming")}>
                <td>Connect with patient before appointment</td>
                <td>
                  Call patient to review previous BP and appropriate steps to
                  take before coming to visit
                </td>
                <td>Josie Jay</td>
                <td>Not Started</td>
                <td>No attempts made to contact patient</td>
              </tr>
            </tbody>
          </table>
        </div> */}
      </React.Fragment>
    );
  }
}

export default DashBoard;
