import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import axios from 'axios';

import { HeaderMain } from "./common/headerMain";

class Practices extends Component {
  state = {
    practices: [],
    isLoading: true,
    isOpen: true
  };

  async componentDidMount() {
    
    const { data: practices } = await axios.get(process.env.REACT_APP_API_PRACTICES);

    this.setState({ practices: practices });

  }

  handleClosedGaps = () => {
    this.setState({ isOpen: false });
  };

  handleOpenGaps = () => {
    this.setState({ isOpen: true });
  };

  render() {
    const { practices, isOpen } = this.state;

    return (
      <React.Fragment>
        <Container className="mt-5 mb-5">
          <Row>
            <Col>
              <HeaderMain title="Practices" className="" />
              <p className="text-left text-muted mt-5">
                Listed below are all available practices within the gappy
                system, you can begin filtering through a selected practice by
                clicking on the view button located on the far left of the
                table. By doing so you will be sent to the details page of the
                respective practice, where you can view the practice, its
                providers and the current gap information.
              </p>
            </Col>
          </Row>
          <Row className="">
            <button
              onClick={this.handleOpenGaps}
              className="btn btn-primary m-2"
            >
              Open
            </button>
            <button
              onClick={this.handleClosedGaps}
              className="btn btn-success m-2"
            >
              Closed
            </button>
          </Row>
          <Row className="ml-1 mt-1"></Row>
        </Container>
        <table
          className="table table-striped table-responsive table-borderless"
          style={{ overflowX: "auto", whiteSpace: "nowrap" }}
        >
          <thead style={{ borderTop:`${isOpen === true ? (
            "3px solid blue"
          ) : (
            "3px solid green"
          )}`, borderBottom: `${isOpen === true ? (
            "3px solid blue"
          ) : (
            "3px solid green"
          )}` }}>
            <tr>
              <th></th>
              <th className="font-weight-light">Practice Name</th>
              <th className="font-weight-light">Members</th>
              <th className="font-weight-light">Providers</th>
              <th className="font-weight-light">Gaps</th>
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
            {practices.map((practice) => (
              <tr key={practice.id}>
                <td>
                  <Link
                    className="btn btn-primary btn-sm"
                    to={`/practices/${practice.id}`}
                  >
                    View
                  </Link>
                </td>
                <td>{practice.name}</td>
                <td>{practice.patients}</td>
                <td>{practice.providers}</td>
                <td>{isOpen === true ? (
                  <>{practice.total_gaps}</>
                ) : (
                <>{practice.patients - practice.total_gaps}</>
                )}</td>
                <td>{isOpen === true ? (
                  <>{practice.cbp_gaps}</>
                ) : (
                <>{practice.patients - practice.cbp_gaps}</>
                )}</td>
                <td>{practice.supd_gaps}</td>
                <td>{practice.spc_gaps}</td>
                <td>{practice.cdc_gaps}</td>
                <td>{practice.ninetyday_gaps}</td>
                <td>{practice.mammogram_gaps}</td>
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
      </React.Fragment>
    );
  }
}

export default Practices;
