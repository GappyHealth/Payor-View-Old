import React, { Component } from "react";

import MeasureBody from "./common/measureBody";
import { CardDeck, CardBody, Card, Row, Col, Container } from "reactstrap";
import { HeaderMain } from "./common/headerMain";
import axios from "axios";

class Gaps extends Component {
  state = {
    patients: [],
    openGaps: 0,
    closedGaps: 0,
    toggle: true,
    cards: [
      { id: 1, img: "img1", header: "CBP", bcbs: "466", gappy: "355" },
      { id: 1, header: "SUPD", bcbs: "0", gappy: "0" },
      { id: 1, header: "SPC", bcbs: "0", gappy: "0" },
      { id: 1, header: "CDC-N", bcbs: "0", gappy: "0" },
      { id: 1, header: "90-Day", bcbs: "0", gappy: "0" },
      { id: 1, header: "Mammogram", bcbs: "0", gappy: "0" },
    ],
  };

  async componentDidMount() {
    let patientSize = 0;
    let openGaps = 0;
    let closedGaps = 0;

    const { data: practices } = await axios.get(
      process.env.REACT_APP_API_PRACTICES
    );

    // Loop Practices and get each individual practice patients
    for (let i = 0; i < practices.length; i++) {
      const { data: patients } = await axios.get(
        process.env.REACT_APP_API_PRACTICES +
          practices[i].id +
          "/patients/"
      );

      patientSize += patients.length;
      openGaps += practices[i].total_gaps;
      closedGaps = patientSize - openGaps;
    }

    this.setState({
      patients: patientSize,
      openGaps: openGaps,
      closedGaps: closedGaps,
    });
  }

  handleCurrent = () => {
    this.setState({ toggle: true });
  };

  handlePreformance = () => {
    this.setState({ toggle: false });
  };

  render() {
    return (
      <React.Fragment>
        {/* START Header */}
        <Container className="mt-5 mb-5">
          <Row>
            <Col>
              <HeaderMain title="Measures" className="" />
              <p className="text-left text-muted mt-5">
                Below you will see all measures and the corresponding gaps.
                Please note that you can toggle between open gaps and closed
                gaps by slecting open or closed buttons. You can view a detailed
                report on each gap by clicking on the appropriate card.
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
          <Row className="mt-2">
            
            <Col>
              <button
                onClick={this.handleCurrent}
                className="btn btn-primary m-2"
              >
                Open
              </button>
            </Col>
            <Col>
              <button
                onClick={this.handlePreformance}
                className="btn btn-success m-2"
              >
                Closed
              </button>
            </Col>
          </Row>
        </Container>x

        {/* START Gaps */}
        <CardDeck className="mt-5">
          <Card className="mb-3">
            <CardBody>
              <MeasureBody
                title="Blood Pressure"
                badgeTitle="CBP"
                badgeColor="#e74c3c"
                value={`${
                  this.state.toggle === true
                    ? `${this.state.openGaps}`
                    : `${this.state.closedGaps}`
                }`}
                controlled={this.state.closedGaps}
                valueTitle={this.state.patients}
                toggle={this.state.toggle}
                link={"/cbp"}
              />
            </CardBody>
          </Card>
          {/* START Card Widget */}
          <Card className="mb-3">
            <CardBody>
              <MeasureBody
                title="Statin Diabetes"
                badgeTitle="SUPD"
                badgeColor="#3498db"
                value="0"
                valueTitle="0"
                footerTitle="TOGGLE"
                footerTitleClassName="text-danger"
                footerValue="Open"
                footerIcon=""
              />
            </CardBody>
          </Card>
          {/* START Card Widget */}
          {/* START Card Widget */}
          <Card className="mb-3">
            <CardBody>
              <MeasureBody
                title="Statin Cardiovasular"
                badgeTitle="SPC"
                badgeColor="#1abc9c"
                value="0"
                valueTitle="0"
                footerTitle="TOGGLE"
                footerTitleClassName="text-success"
                footerValue="Closed"
                footerIcon=""
              />
            </CardBody>
          </Card>
          {/* START Card Widget */}
          {/* START Card Widget */}
          <Card className="mb-3">
            <CardBody>
              <MeasureBody
                title="Diabetes Care"
                badgeTitle="CDC-N"
                badgeColor="#0652DD"
                value="0"
                valueTitle="0"
                footerTitle="TOGGLE"
                footerTitleClassName="text-danger"
                footerValue="Open"
                footerIcon=""
              />
            </CardBody>
          </Card>
          {/* START Card Widget */}
        </CardDeck>
        <CardDeck className="mt-1">
          {/* START Card Widget */}
          <Card className="mb-3">
            <CardBody>
              <MeasureBody
                title="90-Day Meds"
                badgeTitle="90-Day"
                badgeColor="#34495e"
                value="0"
                valueTitle="0"
                footerTitle="TOGGLE"
                footerTitleClassName="text-danger"
                footerValue="Open"
                footerIcon=""
              />
            </CardBody>
          </Card>
          {/* START Card Widget */}
          {/* START Card Widget */}
          <Card className="mb-3">
            <CardBody>
              <MeasureBody
                title="Mammogram"
                badgeTitle="MAM"
                badgeColor="#9b59b6"
                value="0"
                valueTitle="0"
                footerTitle="TOGGLE"
                footerTitleClassName="text-danger"
                footerValue="Open"
                footerIcon=""
              />
            </CardBody>
          </Card>
          {/* START Card Widget */}
          {/* START Card Widget */}
          <Card className="mb-3">
            <CardBody>
              <MeasureBody
                title="Colorectal Cancer"
                badgeTitle="COL"
                badgeColor="#e67e22"
                value="0"
                valueTitle="0"
                footerTitle="TOGGLE"
                footerTitleClassName="text-success"
                footerValue="Closed"
                footerIcon=""
              />
            </CardBody>
          </Card>
          {/* START Card Widget */}
          {/* START Card Widget */}
          <Card className="mb-3">
            <CardBody>
              <MeasureBody
                title="Readmission Prevention"
                badgeTitle="PCR"
                badgeColor="#95a5a6"
                value="0"
                valueTitle="0"
                footerTitle="TOGGLE"
                footerTitleClassName="text-danger"
                footerValue="Open"
                footerIcon=""
              />
            </CardBody>
          </Card>
          {/* START Card Widget */}
        </CardDeck>

        <CardDeck className="mt-1 mb-5">
          {/* START Card Widget */}
          <Card className="mb-3">
            <CardBody>
              <MeasureBody
                title="Osteoporosis"
                badgeTitle="OMW"
                badgeColor="#9980FA"
                value="0"
                valueTitle="0"
                footerTitle="TOGGLE"
                footerTitleClassName="text-danger"
                footerValue="Open"
                footerIcon=""
              />
            </CardBody>
          </Card>
          {/* START Card Widget */}
          {/* START Card Widget */}
          <Card className="mb-3">
            <CardBody>
              <MeasureBody
                title="Rheumatoral"
                badgeTitle="ART"
                badgeColor="#e67e22"
                value="0"
                valueTitle="0"
                footerTitle="TOGGLE"
                footerTitleClassName="text-danger"
                footerValue="Open"
                footerIcon=""
              />
            </CardBody>
          </Card>
          {/* START Card Widget */}
          {/* START Card Widget */}
          <Card className="mb-3">
            <CardBody>
              <MeasureBody
                title="Post Discharge"
                badgeTitle="MRP"
                badgeColor="#f1c40f"
                value="0"
                valueTitle="0"
                footerTitle="TOGGLE"
                footerTitleClassName="text-success"
                footerValue="Closed"
                footerIcon=""
              />
            </CardBody>
          </Card>
          {/* START Card Widget */}
          {/* START Card Widget */}
          <Card className="mb-3">
            <CardBody>
              <MeasureBody
                title="Breast Cancer"
                badgeTitle="BCS"
                badgeColor="#FDA7DF"
                value="0"
                valueTitle="0"
                footerTitle="TOGGLE"
                footerTitleClassName="text-danger"
                footerValue="Open"
                footerIcon=""
              />
            </CardBody>
          </Card>
          {/* START Card Widget */}
        </CardDeck>
      </React.Fragment>
    );
  }
}

export default Gaps;
