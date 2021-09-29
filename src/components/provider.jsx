import React, { Component } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./common/pagination";
import { Container, Row, Col } from "reactstrap";
import { HeaderMain } from "./common/headerMain";
import { Card, CardDeck, CardBody } from "reactstrap";
import MeasureBody from "./common/measureBody";
import { ProviderProfileCard } from "./common/providerProfileCard";
import axios from 'axios';

class Provider extends Component {
  state = {
    practice: {},
    provider: {},
    patients: [],
    pageSize: 10,
    currentPage: 1,
  };

  async componentDidMount() {

    let provider = {};
    let patientFiltered = [];

    let identifier = this.props.match.params.id;

    const { data: practice } = await axios.get(process.env.REACT_APP_API_PRACTICES);

    for (let i = 0; i < practice.length; i++) {
      const { data: providers } = await axios.get(process.env.REACT_APP_API_PRACTICES + practice[i].id + "/providers");

      for (let j = 0; j < providers.length; j++) {
        if (providers[j].id == identifier) {
          provider = providers[j];
        
          const { data: patients } = await axios.get(process.env.REACT_APP_API_PRACTICES + practice[i].id + "/patients");
          for (let k = 0; k < patients.length; k++) {
            
            if ( patients[k].provider.id == identifier )
              patientFiltered.push(patients[k]);
          }

          this.setState({ practice: practice[i], provider: provider, patients: patientFiltered });

          return;
        }
      }
    }
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleCurrent = () => {
    const cbp = this.state.provider.uncontrolled;
    this.setState({ cbp });
  };

  handlePerformance = () => {
    const cbp = this.state.provider.controlled;
    this.setState({ cbp });
  };

  render() {
    const { provider } = this.state;

    const { length: count } = this.state.patients;
    const { practice, pageSize, currentPage, patients: allPatients } = this.state;

    const patients = paginate(allPatients, currentPage, pageSize);

    return (
      <React.Fragment>
        <Container className="mt-5 mb-5">
          <Row>
            <Col>
              <HeaderMain title={provider.name} className="" />
              <h4 className="font-weight-light">{practice.name}</h4>
              <p className="text-left text-muted mt-5">
                Below is a detailed look into the information of the selected
                provider. On the left profile card, is listed the provider
                NPI, member count, and total open gaps. Under
                the measures heading, are listed only the measures that apply to
                the selected provider, clicking on the measure card will take
                you to the associated report. Under the members heading you
                will find the table of members associated with the selected
                provider.
              </p>
              <p className="text-left text-muted">Legend</p>
              <i className="fa fa-circle text-primary">
                <span className="ml-2">
                  Blue represents what BCBS-M believes are open gaps.
                </span>
              </i>
              <i className="fa fa-circle text-success ml-5">
                <span className="ml-2">
                  Green represents what gappy's are insights on the current open
                  gaps.
                </span>
              </i>
            </Col>
          </Row>
        </Container>
        <div>
          <div className="row ml-1">
            <ProviderProfileCard
              practice={practice.name}
              NPI={practice.manager}
              address={practice.address}
              memberCnt={provider.patients}
              gaps={provider.total_gaps}
              open={provider.patients - provider.total_gaps}
              risk="1"
            />
            <div className="ml-5 col-sm">
              <h1 className="font-weight-light text-muted">Measures</h1>
              <CardDeck className="" style={{ width: "50%" }}>
                <Card className="mb-3">
                  <CardBody>
                    <MeasureBody
                      title="Blood Pressure"
                      badgeTitle="CBP"
                      badgeColor="danger"
                      value={provider.total_gaps}
                      controlled={provider.patients - provider.cbp_gaps}
                      valueTitle={provider.patients}
                      link={`/cbp/${this.props.match.params.id}/provider`}
                    />
                  </CardBody>
                </Card>
              </CardDeck>
            </div>
          </div>

          <div className="mb-5">
            <h3 className="text-muted">Members</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className="font-weight-light">First Name</th>
                  <th className="font-weight-light">Last Name</th>
                  <th className="font-weight-light">Address</th>
                  <th className="font-weight-light">DOB</th>
                  <th className="font-weight-light">Last Visit</th>
                  <th className="font-weight-light">Next Visit</th>
                  <th className="font-weight-light">Gap</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr>
                    <td>{patient.first_name}</td>
                    <td>{patient.last_name}</td>
                    <td>{patient.address}</td>
                    <td>{patient.dob}</td>
                    <td>{patient.lastVisit}</td>
                    <td>{patient.nextVisit}</td>
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
        </div>
      </React.Fragment>
    );
  }
}

export default Provider;
