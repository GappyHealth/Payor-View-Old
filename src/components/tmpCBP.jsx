import React, { Component } from "react";
import {
  filterPatientsControlled,
  filterPatientsUnControlled,
  filterPatientsUnCompliant,
  filterPatientsCompliant,
  noReading,
  reading,
  readingNotScheduled,
  readingScheduled,
  noReadingNotScheduled,
  noReadingScheduled,
  filterPatientsCompleted,
  getVerified,
  getPending,
} from "./services/services";
import Modal from "react-bootstrap/Modal";
import "../cbp.css";
import ReactTable from "./reactTable";
import { COLUMNS } from "../utils/columns";
import { PayorCOLUMNS } from "../utils/payorColumns";
import { Container, Row, Col } from "reactstrap";
import { HeaderMain } from "./common/headerMain";
import axios from 'axios';

class cbpTest extends Component {
  state = {
    payor: [],
    unverified: [],
    data: [],
    insurance: {},
    patients: [],
    isLoading: true,
    loadingStatus: "Getting CBP Data...",
    visible: false,
    bcbsVisible: false,
    reportHeading: "Loading...",
    heading: "Heading",
  };

  async componentDidMount() {

    var path = this.props.location.pathname;
    var patients = [];
    var cbpData = [];

    if (path.includes("provider")) {
      var strArray = path.split("/");
      var id = strArray[2];

    } else if (path.includes("practice")) {
      var strArray = path.split("/");
      var id = strArray[2];

      const { data: heading } = await axios.get(
        process.env.REACT_APP_API_PRACTICES + id
      );

      this.setState({ reportHeading: heading.name });

      const { data: data } = await axios.get(
        process.env.REACT_APP_API_PRACTICES + id + "/measures/cbp"
      );

      cbpData = data;
      this.setState({ loadingStatus: "Getting Patient Data" });

      const { data: patientData } = await axios.get(
        process.env.REACT_APP_API_PRACTICES + id + "/patients"
      );

      patients = patientData;
    } else {
      this.setState({ reportHeading: "BCSB-M" });

      const { data: payor } = await axios.get('http://api.gapsclosure.com/v1/services/patientlist/BCBSM/2021');

      this.setState({ payor: payor })

      // Get Practices
      const { data: practices } = await axios.get(
        process.env.REACT_APP_API_PRACTICES
      );

      // Loop Practices and get each individual practice patients
      for (let i = 0; i < practices.length; i++) {
        const { data: data } = await axios.get(
          process.env.REACT_APP_API_PRACTICES +
            practices[i].id +
            "/measures/cbp"
        );
        cbpData = [...cbpData, ...data];
      }

      this.setState({ loadingStatus: "Getting Patient Data" });

      for (let i = 0; i < practices.length; i++) {
        const { data: data } = await axios.get(
          process.env.REACT_APP_API_PRACTICES + practices[i].id + "/patients"
        );
        patients = [...patients, ...data];
      }
    }
    
    this.refactorData(cbpData, patients);

  }

  refactorData(cbpData, patients) {
    var dataArr = [];
    let payorData = this.state.payor;

    console.log(payorData);

    for (let i = 0; i < cbpData.length; i++) {
      let tmp = {};
      let tmpCbp = {};
      let tmpPatients = {};

      tmpCbp = cbpData[i];

      for (let j = 0; j < patients.length; j++) {
        if (cbpData[i].patient.id == patients[j].id) {
          tmpPatients = patients[j];
          break;
        }
      }
      
      if (tmpCbp.systolic != '999')
        tmp.systolic = tmpCbp.systolic;
      else
        tmp.systolic = 'N/A';

      if (tmpCbp.diastolic != '11')
        tmp.diastolic = tmpCbp.diastolic;
      else
        tmp.diastolic = 'N/A';

      if (tmpCbp.date != '1111-11-11')
        tmp.date = tmpCbp.date;
      else
        tmp.date = 'N/A';

      tmp.is_controlled = tmpCbp.is_controlled;
      tmp.is_compliant = tmpCbp.is_compliant;
      tmp.is_current_year = tmpCbp.is_current_year;
      tmp.provider = tmpCbp.patient.provider.name;

      tmp.id = tmpPatients.id;
      tmp.first_name = tmpPatients.first_name;
      tmp.last_name = tmpPatients.last_name;
      tmp.dob = tmpPatients.dob;
      tmp.last_visit = tmpPatients.last_visit;
      tmp.next_visit = tmpPatients.next_visit;

      tmp.is_verified = true;

      dataArr.push(tmp);
    }

    this.getVerified(dataArr);
    this.getAggregates(dataArr);
  }

  getVerified(patients) {

    let payor = this.state.payor;

    let unverified = [];

    for (let i = 0; i < payor.length; i++) {

      let flag = 0;

      for (let j = 0; j < patients.length; j++) {
        
        if (flag == 1)
          break;

        if (payor[i].patientname.includes(patients[j].first_name)
        && payor[i].patientname.includes(patients[j].last_name)) {
          if (payor[i].physicianname == patients[j].provider) {
            flag = 1;
          }
        }

      }

      if ( flag == 0) 
        unverified.push(payor[i]);

    }

    this.setState({unverified: unverified})

  }

  getAggregates(patients) {
    var dataArr = patients;
    var meta = {
      patients: 0,
      verified: 0,
      unverified: 0,
      controlled: 0,
      uncontrolled: 0,
      compliant: 0,
      uncompliant: 0,
      reading: 0,
      readingScheduled: 0,
      readingNotScheduled: 0,
      noReading: 0,
      noReadingScheduled: 0,
      noReadingNotScheduled: 0,
      completed: 0,
    };

    meta.patients = dataArr.length;

    for (let i = 0; i < dataArr.length; i++) {
        if (dataArr[i].is_verified == true) {
          meta.verified += 1;
          if (
            dataArr[i].is_controlled == false ||
            dataArr[i].is_controlled == null
          ) {
            meta.uncontrolled += 1;

            if (dataArr[i].is_compliant == true) {
              meta.compliant += 1;

              if (dataArr[i].is_current_year == true) {
                meta.reading += 1;

                if (dataArr[i].next_visit) meta.readingScheduled += 1;
                else meta.readingNotScheduled += 1;
              } else {
                meta.noReading += 1;

                if (dataArr[i].next_visit) meta.noReadingScheduled += 1;
                else meta.noReadingNotScheduled += 1;
              }
            } else meta.uncompliant += 1;
          } else meta.controlled += 1;
        } else meta.unverified += 1;
    }

    console.log(meta);

    this.setState({
      insurance: meta,
      data: dataArr,
      patients: dataArr,
      isLoading: false,
    });
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
    this.setState({ patients: this.state.payor, heading: "List from BCBS-M" });
  };

  handleCompleted = () => {
    this.openModal();
    const patients = (this.state.patients = filterPatientsCompleted(
      this.state.data
    ));
    this.setState({ patients, heading: "Closed Gaps" });
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

  handlePending = () => {
    this.openBCBSModal();
    this.setState({ patients: this.state.unverified, heading: "Patients Pending Verification" });
  };

  handleVerified = () => {
    this.openModal();
    const patients = (this.state.patients = getVerified(this.state.data));
    this.setState({ patients, heading: "Patients Verified" });
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
    const { 
      payor,
      insurance,
      patients,
      isLoading,
      loadingStatus,
      reportHeading,
      heading,
      unverified
    } = this.state;

    return (
      <div>
        <Container className="mt-5 mb-5">
          <Row>
            <Col>
              <HeaderMain
                title={`CBP Report for ${reportHeading}`}
                className=""
              />
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
        
        {isLoading == true ? (
          <div>
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <h5 className="mt-2 font-weight-light">{loadingStatus}</h5>
          </div>
        ) : (
          <section>
            <table
              className="table table table-hover"
              style={{
                overflowX: "auto",
                whiteSpace: "nowrap",
                cursor: "pointer",
              }}
            >
              <thead></thead>
              <tbody>
                <tr onClick={this.handlePatients}>
                  <td style={{ width: "90%" }}>List from BCBS-M</td>
                  <td style={{ width: "10%" }}>{payor.length}</td>
                </tr>
                <tr onClick={this.handlePending}>
                  <td style={{ width: "90%" }}>
                    Patient Affiliation Being Verified
                  </td>
                  <td style={{ width: "10%" }}>{unverified.length}</td>
                </tr>
                <tr onClick={this.handleVerified}>
                  <td>Patient Affiliation Verified</td>
                  <td>{insurance.verified}</td>
                </tr>
              </tbody>
            </table>

            <table
              className="table table-borderless table-hover"
              style={{
                marginLeft: "50px",
                marginTop: "-12px",
                borderTop: "1px solid blue",
                borderBottom: "1px solid blue",
                overflowX: "auto",
                whiteSpace: "nowrap",
                width: "1060px",
                cursor: "pointer",
              }}
            >
              <tbody>
                <tr onClick={this.handleControlled} style={{ borderBottom: "1px solid lightgrey" }}>
                  <td>Documented Controlled Readings in 2021</td>
                  <td>{insurance.controlled}</td>
                </tr>
                <tr onClick={this.handleUnControlled}>
                  <td className="font-weight-bold" style={{ width: "85%" }}>
                    Total Not Controlled in 2021
                  </td>
                  <td className="font-weight-bold" style={{ width: "10%" }}>
                    {insurance.uncontrolled}
                  </td>
                </tr>
              </tbody>
            </table>

            <table
              className="table table-borderless table-hover"
              style={{
                marginLeft: "100px",
                marginTop: "-14px",
                overflowX: "auto",
                whiteSpace: "nowrap",
                width: "1010px",
                cursor: "pointer",
              }}
            >
              <tbody>
                <tr
                  onClick={this.handleUnCompliant}
                  style={{ borderBottom: "1px lightgray solid" }}
                >
                  <td style={{ width: "80%" }}>
                    Not Compliant with BP Medication
                  </td>
                  <td style={{ width: "10%" }}>{insurance.uncompliant}</td>
                </tr>
                <tr onClick={this.handleCompliant}>
                  <td style={{ width: "80%" }}>Compliant with BP Medication</td>
                  <td style={{ width: "5%" }}>{insurance.compliant}</td>
                </tr>
              </tbody>
            </table>

            <table
              className="table table-borderless table-hover"
              style={{
                marginLeft: "150px",
                borderTop: "1px solid blue",
                borderBottom: "1px solid blue",
                overflowX: "auto",
                whiteSpace: "nowrap",
                marginTop: "-12px",
                width: "960px",
                cursor: "pointer",
              }}
            >
              <tbody>
                <tr onClick={this.handleNoReading}>
                  <td className="font-weight-bold" style={{ width: "75%" }}>
                    Total no Reading in 2021
                  </td>
                  <td className="font-weight-bold" style={{ width: "10%" }}>
                    {insurance.noReading}
                  </td>
                </tr>
              </tbody>
            </table>

            <table
              className="table table-borderless table-hover"
              style={{
                marginLeft: "200px",
                overflowX: "auto",
                whiteSpace: "nowrap",
                marginTop: "-14px",
                width: "910px",
                cursor: "pointer",
              }}
            >
              <tbody>
                <tr
                  onClick={this.handleNoReadingScheduled}
                  style={{ borderBottom: "1px lightgray solid" }}
                >
                  <td style={{ width: "70%" }}>
                    Scheduled for an Appointment in 2021
                  </td>
                  <td style={{ width: "10%" }}>
                    {insurance.noReadingScheduled}
                  </td>
                </tr>
                <tr onClick={this.handleNoReadingNotScheduled}>
                  <td style={{ width: "70%" }}>
                    No Upcoming Appointment in 2021
                  </td>
                  <td style={{ width: "10%" }}>
                    {insurance.noReadingNotScheduled}
                  </td>
                </tr>
              </tbody>
            </table>

            <table
              className="table table-borderless table-hover"
              style={{
                marginLeft: "150px",
                borderTop: "1px solid blue",
                borderBottom: "1px solid blue",
                overflowX: "auto",
                whiteSpace: "nowrap",
                marginTop: "-12px",
                width: "960px",
                cursor: "pointer",
              }}
            >
              <tbody>
                <tr>
                  <td
                    className="font-weight-bold"
                    onClick={this.handleReading}
                    style={{ width: "75%" }}
                  >
                    Total with Reading in 2021 but Not Controlled Reading
                  </td>
                  <td className="font-weight-bold" style={{ width: "10%" }}>
                    {insurance.reading}
                  </td>
                </tr>
              </tbody>
            </table>

            <table
              className="table table-borderless table-hover"
              style={{
                marginLeft: "200px",
                overflowX: "auto",
                whiteSpace: "nowrap",
                marginTop: "-14px",
                width: "910px",
                cursor: "pointer",
              }}
            >
              <tbody>
                <tr
                  onClick={this.handleReadingScheduled}
                  style={{ borderBottom: "1px lightgray solid" }}
                >
                  <td style={{ width: "70%" }}>
                    Not Controlled with Upcoming Appointment in 2021
                  </td>
                  <td style={{ width: "10%" }}>{insurance.readingScheduled}</td>
                </tr>
                <tr onClick={this.handleReadingNotScheduled}>
                  <td style={{ width: "70%" }}>
                    Not Controlled and No Upcoming Appointment in 2021
                  </td>
                  <td style={{ width: "10%" }}>
                    {insurance.readingNotScheduled}
                  </td>
                </tr>
              </tbody>
            </table>

            <table
              className="table table-borderless table-hover"
              style={{
                overflowX: "auto",
                whiteSpace: "nowrap",
                cursor: "pointer",
                backgroundColor: "blue",
              }}
            >
              <thead></thead>
              <tbody>
                <tr
                  style={{ color: "white", fontWeight: "bold" }}
                  onClick={this.handleCompleted}
                >
                  <td style={{ width: "90%" }}>Completed Gaps</td>
                  <td style={{ width: "10%" }}>{insurance.completed}</td>
                </tr>
              </tbody>
            </table>
          </section>
        )}

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
            {patients.length === 0 ? (
              <h4 className="text-center font-italic">No Patients Found</h4>
            ) : (
              <></>
            )}
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
            <h3 className="ml-auto">{patients.length}</h3>
            <ReactTable
              columns={PayorCOLUMNS}
              data={patients}
              isLoading={isLoading}
            />
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
      </div>
    );
  }
}

export default cbpTest;
