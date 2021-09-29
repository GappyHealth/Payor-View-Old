import React, { Component } from "react";
import {
  filterPatientsControlled,
  getPatients,
  filterPatientsUnControlled,
  filterPatientsUnCompliant,
  filterPatientsCompliant,
  noReading,
  reading,
  getPracticeProviders,
  readingNotScheduled,
  readingScheduled,
  noReadingNotScheduled,
  noReadingScheduled,
  getInsurance,
  getdata,
  getBCBSListWPath,
} from "./services/services";
import Modal from "react-bootstrap/Modal";
import img1 from "../assets/bloodpressure.png";
import "../cbp.css";
import ReactTable from "./reactTable";
import { COLUMNS } from "../utils/columns";
import { Container, Row, Col } from "reactstrap";
import { HeaderMain } from "./common/headerMain";

class CBP extends Component {
  state = {
    data: getdata(this.props.location.pathname),
    insurance: getInsurance(this.props.location.pathname),
    patients: getdata(this.props.location.pathname),
    isLoading: false,
    visible: false,
    bcbsVisible: false,
    heading: "Heading",
  };

  componentDidMount() {
    // let path = this.props.location.pathname;

    // if (path.includes("provider")) {
    //   var strArray = path.split("/");
    //   var id = strArray[2];

    //   fetch("http://192.168.130.224:5000/api/v1/provider?id=" + id)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       this.setState({
    //         data: data["patients"],
    //         patients: data["patients"],
    //         insurance: data["meta"],
    //         isLoading: false,
    //       });
    //     })
    //     .catch(console.log);
    // } else if (path.includes("practice")) {
    //   var strArray = path.split("/");
    //   var id = strArray[2];

    //   fetch("http://192.168.130.224:5000/api/v1/practice?id=" + id)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       this.setState({
    //         data: data["patients"],
    //         patients: data["patients"],
    //         insurance: data["meta"],
    //         isLoading: false,
    //       });
    //     })
    //     .catch(console.log);
    // } else {
    //   fetch("http://192.168.130.224:5000/api/v1/patients")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       this.setState({
    //         data: data["patients"],
    //         patients: data["patients"],
    //         insurance: data["meta"],
    //         isLoading: false,
    //       });
    //     })
    //     .catch(console.log);
    // }
  }

  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
      currentPage: 1,
    });
  }

  openBCBSModal() {
    this.setState({
      bcbsVisible: true,
    });
  }

  closeBCBSModal() {
    this.setState({
      bcbsVisible: false,
      currentPage: 1,
    });
  }

  handlePatients = () => {
    this.openBCBSModal();
    const patients = (this.state.patients = getBCBSListWPath(
      this.props.location.pathname
    ));
    this.setState({ patients, heading: "List from BCBS-M" });
  };

  handleControlled = () => {
    this.openModal();
    const patients = (this.state.patients = filterPatientsControlled(
      this.state.data
    ));
    this.setState({
      patients,
      heading: "Documented Controlled Reading in 2021",
    });
  };

  handleUnControlled = () => {
    this.openModal();
    const patients = (this.state.patients = filterPatientsUnControlled(
      this.state.data
    ));
    this.setState({ patients, heading: "Total Not Controlled in 2021" });
  };

  handleCompliant = () => {
    this.openModal();
    const patients = (this.state.patients = filterPatientsCompliant(
      this.state.data
    ));
    this.setState({ patients, heading: "Compliant with BP Medication" });
  };

  handleUnCompliant = () => {
    this.openModal();
    const patients = (this.state.patients = filterPatientsUnCompliant(
      this.state.data
    ));
    this.setState({ patients, heading: "Not Compliant with BP Medication" });
  };

  handleReading = () => {
    this.openModal();
    const patients = (this.state.patients = reading(this.state.data));
    this.setState({
      patients,
      heading: "Total with Reading in 2021 but Not Controlled Reading",
    });
  };

  handleReadingNotScheduled = () => {
    this.openModal();
    const patients = (this.state.patients = readingNotScheduled(
      this.state.data
    ));
    this.setState({
      patients,
      heading: "BP Not Controlled & No Scheduled Upcoming Appointment in 2021",
    });
  };

  handleReadingScheduled = () => {
    this.openModal();
    const patients = (this.state.patients = readingScheduled(this.state.data));
    this.setState({
      patients,
      heading: "BP Not Controlled & Upcoming Appointment is Scheduled in 2021",
    });
  };

  handleNoReading = () => {
    this.openModal();
    const patients = (this.state.patients = noReading(this.state.data));
    this.setState({ patients, heading: "Total with No BP Reading in 2021" });
  };

  handleNoReadingNotScheduled = () => {
    this.openModal();
    const patients = (this.state.patients = noReadingNotScheduled(
      this.state.data
    ));
    this.setState({
      patients,
      heading: "No BP Reading and No Upcoming Appointment",
    });
  };

  handleNoReadingScheduled = () => {
    this.openModal();
    const patients = (this.state.patients = noReadingScheduled(
      this.state.data
    ));
    this.setState({
      patients,
      heading: "No BP Reading with Upcoming Appointment",
    });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  styleNotCompliant = {
    width: "1400px",
  };

  styleCompliant = {
    width: "1400px",
    background: "#4169e1",
    color: "#FFFFFF",
  };

  styleNoReading = {
    width: "1200px",
    color: "#4169e1",
  };

  styleNoReadingSched = {
    width: "1000px",
    color: "#4169e1",
  };

  styleReading = {
    width: "1200px",
    color: "#4169e1",
  };

  styleReadingSched = {
    width: "1000px",
    color: "#4169e1",
  };

  styleIMG = {
    wdith: "48px",
    height: "48px",
  };

  styleBCBS = {
    width: "1500px",
  };

  render() {
    const columns = COLUMNS;
    const { insurance, patients, isLoading } = this.state;

    return (
      <React.Fragment>
        <Container className="mt-5 mb-5">
          <Row>
            <Col>
              <HeaderMain title={insurance.name} className="" />
              <p className="text-left text-muted mt-5">
                Below is the detailed report on Controlled Blood Pressure (CBP),
                to the far right of each category is the number of patients
                associated with the category, by clicking on view you will be
                brought to a table of patients assoicated with the category
                where you can filter through and see detailed information per
                patient. For example clicking on the controlled category will
                show you all patients with controlled readings for CBP.
              </p>
            </Col>
          </Row>
        </Container>
        <div className="cbp" style={{ width: "1500px", height: "1000px" }}>
          <div className="card ml-5 mr-5" style={this.styleBCBS}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item text-center text-primary font-weight-bold d-flex">
                <img
                  src={img1}
                  alt=""
                  style={this.styleIMG}
                  className="rounded"
                />
                <h2 className="ml-auto">Controlling Blood Pressure Overview</h2>
                <img
                  src={img1}
                  alt=""
                  style={this.styleIMG}
                  className="ml-auto rounded"
                />
              </li>
              <li className="list-group-item d-flex">
                <h5 class="font-weight-light">List from BCBS-M</h5>
                <span className="ml-auto">
                  <h1 className="font-weight-light">
                    {insurance.members_cnt}
                    <span>
                      <button
                        onClick={this.handlePatients}
                        className="btn btn-sm btn-primary ml-5"
                      >
                        View
                      </button>
                    </span>
                  </h1>
                </span>
              </li>
            </ul>
          </div>
          <div class="card ml-5 mt-3" style={this.styleBCBS}>
            <div class="card-body d-flex">
              <h5 className="text-success font-weight-light">
                Documented Controlled Readings in 2021
              </h5>
              <h1 className="ml-auto text-success font-weight-light">
                {insurance.controlled}
                <span>
                  <button
                    className="btn btn-sm btn-primary ml-5"
                    onClick={this.handleControlled}
                  >
                    View
                  </button>
                </span>
              </h1>
            </div>
          </div>
          <div class="card ml-5 mr-5 mt-3" style={this.styleBCBS}>
            <div class="card-body d-flex">
              <h5 className="text-danger font-weight-light">
                Total Not Controlled in 2021
              </h5>
              <h1 className="ml-auto text-danger font-weight-light">
                {insurance.uncontrolled}
                <span>
                  <button
                    className="btn btn-sm btn-primary ml-5"
                    onClick={this.handleUnControlled}
                  >
                    View
                  </button>
                </span>
              </h1>
            </div>
          </div>
          <div
            className="mt-3"
            style={{ paddingLeft: "100px", paddingRight: "100px" }}
          >
            <div class="card mx-auto" style={this.styleNotCompliant}>
              <div class="card-body d-flex">
                <h5 className="text-black">Not Compliant with BP Medication</h5>
                <h1 className="ml-auto text-black font-weight-light">
                  {insurance.uncompliant}
                  <span>
                    <button
                      className="btn btn-sm btn-primary ml-5"
                      onClick={this.handleUnCompliant}
                    >
                      View
                    </button>
                  </span>
                </h1>
              </div>
            </div>
            <div class="card mx-auto mt-3" style={this.styleCompliant}>
              <div class="card-body d-flex">
                <h5 className="text-black">Compliant with BP Medication</h5>
                <h1 className="ml-auto text-black font-weight-light">
                  {insurance.compliant}
                  <span>
                    <button
                      className="btn btn-sm btn-primary ml-5"
                      onClick={this.handleCompliant}
                    >
                      View
                    </button>
                  </span>
                </h1>
              </div>
            </div>
            <div
              className="mt-3"
              style={{ paddingLeft: "100px", paddingRight: "100px" }}
            >
              <div class="card mx-auto" style={this.styleNoReading}>
                <div class="card-body d-flex">
                  <h5 className="text-black font-weight-bold">
                    Total No Reading in 2021
                  </h5>
                  <h1 className="ml-auto text-black font-weight-light">
                    {insurance.noReading}
                    <span>
                      <button
                        className="btn btn-sm btn-primary ml-5"
                        onClick={this.handleNoReading}
                      >
                        View
                      </button>
                    </span>
                  </h1>
                </div>
              </div>
              <div class="card mx-auto" style={this.styleNoReadingSched}>
                <div class="card-body d-flex">
                  <h5 className="text-black font-weight-light">
                    Scheduled for an Appointment in 2021
                  </h5>
                  <h1 className="ml-auto text-black font-weight-light">
                    {insurance.noReadingScheduled}
                    <span>
                      <button
                        className="btn btn-sm btn-primary ml-5"
                        onClick={this.handleNoReadingScheduled}
                      >
                        View
                      </button>
                    </span>
                  </h1>
                </div>
              </div>
              <div class="card mx-auto" style={this.styleNoReadingSched}>
                <div class="card-body d-flex">
                  <h5 className="text-black font-weight-light">
                    No Upcoming Appointment in 2021
                  </h5>
                  <h1 className="ml-auto text-black font-weight-light">
                    {insurance.noReadingNotScheduled}
                    <span>
                      <button
                        className="btn btn-sm btn-primary ml-5"
                        onClick={this.handleNoReadingNotScheduled}
                      >
                        View
                      </button>
                    </span>
                  </h1>
                </div>
              </div>
              <div
                class="card mx-auto ml-5 mr-5 mt-3"
                style={this.styleReading}
              >
                <div class="card-body d-flex">
                  <h5 className="text-black font-weight-bold">
                    Total with Reading in 2021 but Not Controlled Reading
                  </h5>
                  <h1 className="ml-auto text-black font-weight-light">
                    {insurance.reading}
                    <span>
                      <button
                        className="btn btn-sm btn-primary ml-5"
                        onClick={this.handleReading}
                      >
                        View
                      </button>
                    </span>
                  </h1>
                </div>
              </div>
              <div class="card mx-auto" style={this.styleReadingSched}>
                <div class="card-body d-flex">
                  <h5 className="text-black font-weight-light">
                    Not Controlled with Upcoming Appointment Scheduled in 2021
                  </h5>
                  <h1 className="ml-auto text-black font-weight-light">
                    {insurance.readingScheduled}
                    <span>
                      <button
                        className="btn btn-sm btn-primary ml-5"
                        onClick={this.handleReadingScheduled}
                      >
                        View
                      </button>
                    </span>
                  </h1>
                </div>
              </div>
              <div class="card mx-auto" style={this.styleReadingSched}>
                <div class="card-body d-flex">
                  <h5 className="text-black font-weight-light">
                    Not Controlled and no Upcoming Appointment in 2021
                  </h5>
                  <h1 className="ml-auto text-black font-weight-light">
                    {insurance.readingNotScheduled}
                    <span>
                      <button
                        className="btn btn-sm btn-primary ml-5"
                        onClick={this.handleReadingNotScheduled}
                      >
                        View
                      </button>
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          dialogClassName="md"
          show={this.state.visible}
          effect="fadeInUp"
          onHide={() => this.closeModal()}
        >
          <div className="m-5">
            <h3 className="ml-auto">{patients.length}</h3>
            <ReactTable
              columns={columns}
              data={patients}
              isLoading={isLoading}
            />
            <button
              onClick={() => this.closeModal()}
              className="btn btn-danger"
            >
              Close
            </button>
          </div>
        </Modal>
        <Modal
          dialogClassName="md"
          show={this.state.bcbsVisible}
          effect="fadeInUp"
          onHide={() => this.closeBCBSModal()}
        >
          <div className="m-5">
            <h3 className="m-2">{this.state.heading}</h3>
            <h3 className="ml-auto">{patients.length}</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className="font-weight-light">Practice</th>
                  <th className="font-weight-light">Provider</th>
                  <th className="font-weight-light">Member Name</th>
                  <th className="font-weight-light">Member ID</th>
                  <th className="font-weight-light">DOB</th>
                  <th className="font-weight-light">Phone</th>
                  <th className="font-weight-light">Gap</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr>
                    <td>{patient.Practice}</td>
                    <td>{patient.physicianName}</td>
                    <td>{patient.name}</td>
                    <td>{patient.MemberID}</td>
                    <td>{patient.dob}</td>
                    <td>{patient.phone}</td>
                    <td className="text-danger">{patient.gaps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {patients.length === 0 ? (
              <h4 className="text-center font-italic">No Patients Found</h4>
            ) : (
              <></>
            )}

            <button
              onClick={() => this.closeBCBSModal()}
              className="btn btn-danger"
            >
              Close
            </button>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default CBP;
