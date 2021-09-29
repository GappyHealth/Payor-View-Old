// Root Imports
import React, { Component } from "react";

// External Libraries
import axios from "axios";

// Utils
import { paginate } from "../utils/paginate";

// Components
import Pagination from "./common/pagination";
import { Container, Row, Col } from "react-bootstrap";
import { HeaderMain } from "./common/headerMain";

class Members extends Component {
  state = {
    pageSize: 25,
    currentPage: 1,
    patients: [],
  };

  async componentDidMount() {
    var patientList = [];

    const { REACT_APP_API_PRACTICES } = process.env;

    // Get Practices
    const { data: practices } = await axios.get(
      REACT_APP_API_PRACTICES
    );
    console.log(practices);

    // Loop Practices and get each individual practice patients
    for (let i = 0; i < practices.length; i++) {
      const { data: list } = await axios.get(
        REACT_APP_API_PRACTICES +
          practices[i].id +
          "/patients/"
      );
      patientList = [...patientList, ...list];
    }

    console.log(patientList);

    this.setState({ patients: patientList });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.patients;
    const { currentPage, pageSize, patients: allPatients } = this.state;

    const patients = paginate(allPatients, currentPage, pageSize);

    return (
      <div className="">
        <Container className="mt-5 mb-5">
          <Row>
            <Col>
              <HeaderMain title="Members List" className="" />
              <p className="text-left text-muted mt-5">
                Down below are listed the current and active members with open
                care gaps. Each patient has their respective information
                displayed, what practice they belong to and who their physician
                is. The far right column indicates the patients gap.
              </p>
            </Col>
          </Row>
          <Row className="ml-1"></Row>
          <Row className="ml-1 mt-1"></Row>
        </Container>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="font-weight-light">Practice</th>
              <th className="font-weight-light">Provider</th>
              <th className="font-weight-light">First Name</th>
              <th className="font-weight-light">Last Name</th>
              <th className="font-weight-light">DOB</th>
              <th className="font-weight-light">Gap</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr>
                <td>...</td>
                <td>{patient.provider.name}</td>
                <td>{patient.first_name}</td>
                <td>{patient.last_name}</td>
                <td>{patient.dob}</td>
                <td className="text-danger">CBP</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </div>
    );
  }
}

export default Members;
