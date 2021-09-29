import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  getPracticeProviders,
  getPracticePerformance,
  getPractice,
} from "./services/services";
import { PracticeProfileCard } from "./common/practiceProfileCard";
import { Container, Row, Col } from "reactstrap";
import { HeaderMain } from "./common/headerMain";
import { Card, CardDeck, CardBody } from "reactstrap";
import MeasureBody from "./common/measureBody";
import axios from 'axios';

class Practice extends Component {
  state = {
    providers: [],
    practice: [],
    cbp: [],
  };

  async componentDidMount() {

    let id = this.props.match.params.id;

    const { data: practice } = await axios.get(process.env.REACT_APP_API_PRACTICES + id);
    const { data: providers } = await axios.get(process.env.REACT_APP_API_PRACTICES + id + "/providers");
    
    this.setState({ practice: practice, providers: providers });
  }

  handleCurrent = () => {
    const cbp = this.state.practice.uncontrolled;
    const providers = getPracticeProviders(this.props.match.params.id);
    this.setState({ cbp, providers });
  };

  handlePerformance = () => {
    const cbp = this.state.practice.controlled;
    const providers = getPracticePerformance(this.props.match.params.id);
    this.setState({ cbp, providers });
  };

  render() {
    const { providers } = this.state;
    var practice = this.state.practice;

    return (
      <div>
        <Container className="mt-5 mb-5">
          <Row>
            <Col>
              <HeaderMain title={this.state.practice.name} className="" />
              <p className="text-left text-muted mt-5">
                Below is a detailed look into the information of the selected
                practice. On the left profile card, is listed the practice
                manager, provider count, member count and total open gaps. Under
                the measures heading, are listed only the measures that apply to
                the selected practice, clicking on the measure card will take
                you to the associated report. Under the providers heading you
                will find the table of providers associated with the selected
                practice, clicking the view button on a provider will bring you
                to the details page of the provider.
              </p>
              <p className="text-left text-muted">Legend</p>
              <i className="fa fa-circle text-primary">
                <span className="ml-2">
                  Blue represents what BCBS-M believes are open gaps
                </span>
              </i>
              <i className="fa fa-circle text-success ml-5">
                <span className="ml-2">
                  Green represents what gappy's insights are on the current open
                  gaps
                </span>
              </i>
            </Col>
          </Row>
        </Container>
        <div>
          <div className="row ml-1">
            <PracticeProfileCard
              name={practice.name}
              manager={practice.manager}
              location={practice.address}
              providerCnt={practice.providers}
              memberCnt={practice.patients}
              closed={practice.patients - practice.total_gaps}
              gaps={practice.total_gaps}
              risk="1"
            />
            <div className="col ml-5">
              <h1 className="font-weight-light text-muted">Measures</h1>
              <CardDeck className="" style={{ width: "50%" }}>
                <Card className="mb-3">
                  <CardBody>
                      <MeasureBody
                        title="Blood Pressure"
                        badgeTitle="CBP"
                        badgeColor="danger"
                        value={practice.cbp_gaps}
                        controlled={practice.patients - practice.cbp_gaps}
                        valueTitle={practice.patients}
                        link={`/cbp/${this.props.match.params.id}/practice`}
                      />
                  </CardBody>
                </Card>
              </CardDeck>
            </div>
          </div>

          <div className="mb-5">
            <h3 className="text-muted">Providers</h3>
            <table
              className="table table-striped table-responsive"
              style={{ overflowX: "auto", whiteSpace: "nowrap" }}
            >
              <thead>
                <tr>
                  <th></th>
                  <th className="font-weight-light">Full Name</th>
                  <th className="font-weight-light">Members</th>
                  <th className="font-weight-light">Open Gaps</th>
                  <th className="font-weight-light">CBP</th>
                  <th className="font-weight-light">SUPD</th>
                  <th className="font-weight-light">SPC</th>
                  <th className="font-weight-light">CDC-N</th>
                  <th className="font-weight-light">90-Day</th>
                  <th className="font-weight-light">MAM</th>
                  <th className="font-weight-light">COL</th>
                  <th className="font-weight-light">PCR</th>
                  <th className="font-weight-light">OMW</th>
                  <th className="font-weight-light">ART</th>
                  <th className="font-weight-light">MRP</th>
                  <th className="font-weight-light">BCS</th>
                </tr>
              </thead>
              <tbody>
                {providers.map((provider) => (
                  <tr key={provider._id}>
                    <td>
                      <Link
                        className="btn btn-primary btn-sm"
                        to={`/providers/${provider.id}`}
                      >
                        View
                      </Link>
                    </td>
                <td>{provider.name}</td>
                    <td>{provider.patients}</td>
                    <td>{provider.total_gaps}</td>
                    <td>{provider.cbp_gaps}</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Practice;
