// Root Imports
import React, { Component } from "react";

// External Libraries
import {
  CardTitle,
  CardFooter,
  CardBody,
  Card,
  Row,
  Col,
  Container,
} from "reactstrap";
import axios from 'axios';
import { Link } from 'react-router-dom';

// Components
import { HeaderMain } from "./common/headerMain";
import { Progress } from "./common/progress";
import { SessionsByDevice } from "./common/sessionsByDevice";

// Main
class Home extends Component {
  state = {
    practices: 0,
    providers: 0,
    patients: 0,
    openGaps: 0,
    payor: 0,
    enabled: 0
  };

  async componentDidMount() {

    // Variables
    var practiceSize = 0;
    var patientSize = 0;
    var providerSize = 0;
    var openGaps = 0;

    const { REACT_APP_API_PRACTICES } = process.env;

    // Get Payor Data
    const { data: payor } = await axios.get('http://api.gapsclosure.com/v1/services/patientlist/BCBSM/2021');
    let enabled = 0;
    
    for (let i = 0; i < payor.length; i++) {
      if (payor[i].is_enabled == true)
        enabled++;
    }

    // Get Practices
    const { data: practices } = await axios.get(REACT_APP_API_PRACTICES);
    practiceSize = practices.length;

    
    // Loop Practices and get each individual practice patients
    for (let i = 0; i < practices.length; i++) {
      
      const { data: patients } = await axios.get(REACT_APP_API_PRACTICES + practices[i].id + "/patients/");

      patientSize += patients.length;
      openGaps += practices[i].total_gaps;

    }

    // Loop Practices and get Providers
    for (let i = 0; i < practices.length; i++) {
      
      const { data: providers } = await axios.get(REACT_APP_API_PRACTICES + practices[i].id + "/providers/");
      providerSize += providers.length;

      console.log(providerSize);
      
    }

    this.setState({ practices: practiceSize, providers: providerSize, patients: patientSize, openGaps: openGaps, payor: payor.length, enabled: enabled})

  }

  styles = {
    position: "absolute",
  };

  render() {

    const { practices, providers, patients, openGaps, payor, enabled } = this.state; 
    
    return (
      
      <React.Fragment>
        <Container className="mt-5 mb-5">
          <Row>
            <Col>
              <HeaderMain title="Admin Dashboard" className="" />
              <p className="text-left text-muted mt-5">
                Welcome to the GAPPY website, gappy is designed to provide you with the most relevant information first. Please click on one of the cards below to begin.
              </p>
            </Col>
          </Row>
          <Row className="ml-1"></Row>
          <Row className="ml-1 mt-1"></Row>
        </Container>

        <Container>
          <Row>
            <Col lg={6}>
              {/* START Card Widget */}
              <Link to={"/members"} style={{ cursor: "pointer", textDecoration: 'none' }}>
                <Card className="mb-3">
                  <CardBody>
                    <CardTitle tag="h6" className="mb-4 text-dark">
                      Member List
                    </CardTitle>
                    <Row>
                      <Col sm={4}>
                        <SessionsByDevice
                          title="BCBS-M"
                          valuePercent={payor}
                          valuePercentColor="text-primary"
                          value="Members"
                          valueColor="text-primary"
                        />
                      </Col>
                      <Col sm={4}>
                        <SessionsByDevice
                          title="Gappy"
                          valuePercent={enabled}
                          valuePercentColor="text-success"
                          value="Members"
                          valueColor="text-success"
                        />
                      </Col>
                    </Row>
                    <Progress multi className="mb-2" style={{ height: "5px" }}>
                      <Progress bar value="25" />
                      <Progress bar color="success" value="30" />
                      <Progress bar color="secondary" value="45" />
                    </Progress>
                  </CardBody>
                  <CardFooter className="small text-dark">
                    <i className="fa fa-fw fa-info-circle mr-2"></i>
                    Here provided is a list of all current and active members that have a care gap, both open and closed.
                  </CardFooter>
                </Card>
              </Link>
            </Col>
            <Col lg={6}>
              {/* START Card Widget */}
              <Link to={"/gaps"} style={{ cursor: "pointer", textDecoration: 'none'  }}>
                <Card className="mb-3">
                  <CardBody>
                    <CardTitle tag="h6" className="mb-4 text-dark">
                      Measures
                    </CardTitle>
                    <Row>
                      <Col sm={4}>
                        <SessionsByDevice
                          title="BCBS-M"
                          valuePercent={patients}
                          valuePercentColor="text-primary"
                          value="Open Gaps"
                          valueColor="text-primary"
                        />
                      </Col>
                      <Col sm={4}>
                        <SessionsByDevice
                          title="Gappy"
                          valuePercent={openGaps}
                          valuePercentColor="text-success"
                          value="Open Gaps"
                          valueColor="text-success"
                        />
                      </Col>
                    </Row>
                    <Progress multi className="mb-2" style={{ height: "5px" }}>
                      <Progress bar value="25" />
                      <Progress bar color="success" value="30" />
                      <Progress bar color="secondary" value="45" />
                    </Progress>
                  </CardBody>
                  <CardFooter className="small text-dark">
                    <i className="fa fa-fw fa-info-circle mr-2"></i>
                    Gappy provides the most up-to date information regarding the gap closure process, the measures page is where you can find an overview of all measures.
                  </CardFooter>
                </Card>
              </Link>
            </Col>
          </Row>
          <Row>
          <Col lg={6}>
              {/* START Card Widget */}
              <Link to={"/practices"} style={{ cursor: "pointer", textDecoration: 'none'  }}>
                <Card className="mb-3">
                  <CardBody>
                    <CardTitle tag="h6" className="mb-4 text-dark">
                      Practices
                    </CardTitle>
                    <Row>
                      <Col sm={4}>
                        <SessionsByDevice
                          title="BCBS-M"
                          valuePercent={practices}
                          valuePercentColor="text-primary"
                          value="Practices"
                          valueColor="text-primary"
                        />
                      </Col>
                      <Col sm={4}>
                        <SessionsByDevice
                          title="Gappy"
                          valuePercent={practices}
                          valuePercentColor="text-success"
                          value="Practices"
                          valueColor="text-success"
                        />
                      </Col>
                    </Row>
                    <Progress multi className="mb-2" style={{ height: "5px" }}>
                      <Progress bar value="25" />
                      <Progress bar color="success" value="30" />
                      <Progress bar color="secondary" value="45" />
                    </Progress>
                  </CardBody>
                  <CardFooter className="small text-dark">
                    <i className="fa fa-fw fa-info-circle mr-2"></i>
                    Here is where you can begin filtering by seeing a list of the current practices available to you.
                  </CardFooter>
                </Card>
              </Link>
            </Col>
            <Col lg={6}>
              {/* START Card Widget */}
              <Link to={"/providers"} style={{ cursor: "pointer", textDecoration: 'none'  }}>
                <Card className="mb-3">
                  <CardBody>
                    <CardTitle tag="h6" className="mb-4 text-dark">
                      Providers
                    </CardTitle>
                    <Row>
                      <Col sm={4}>
                        <SessionsByDevice
                          title="BCBS-M"
                          valuePercent={providers}
                          valuePercentColor="text-primary"
                          value="Providers"
                          valueColor="text-primary"
                        />
                      </Col>
                      <Col sm={4}>
                        <SessionsByDevice
                          title="Gappy"
                          valuePercent={providers}
                          valuePercentColor="text-success"
                          value="Providers"
                          valueColor="text-success"
                        />
                      </Col>
                    </Row>
                    <Progress multi className="mb-2" style={{ height: "5px" }}>
                      <Progress bar value="25" />
                      <Progress bar color="success" value="30" />
                      <Progress bar color="secondary" value="45" />
                    </Progress>
                  </CardBody>
                  <CardFooter className="small text-dark">
                    <i className="fa fa-fw fa-info-circle mr-2"></i>
                    Here is where you can begin filtering by seeing a list of the current providers available to you.
                  </CardFooter>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
