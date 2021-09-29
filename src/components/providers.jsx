import React, { Component } from "react";
import { Link } from "react-router-dom";
import { paginate } from "../utils/paginate";
import Pagination from "./common/pagination";
import { Container, Row, Col } from "react-bootstrap";
import { HeaderMain } from "./common/headerMain";
import axios from 'axios';

class Providers extends Component {
  state = {
    providers: [],
    pageSize: 10,
    currentPage: 1,
    isLoading: true,
    isOpen: true
  };

  async componentDidMount() {

    var providers = [];

    const { data: practices } = await axios.get(process.env.REACT_APP_API_PRACTICES);

    for (let i = 0; i < practices.length; i++) {

      const { data: list } = await axios.get(process.env.REACT_APP_API_PRACTICES + practices[i].id + "/providers/");
      providers = [...providers, ...list];

    }

    this.setState({ providers: providers });

  }

  handleClosedGaps = () => {
    this.setState({ isOpen: false });
  };

  handleOpenGaps = () => {
    this.setState({ isOpen: true });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.providers;
    const { isOpen, pageSize, currentPage, providers: allProviders } = this.state;

    const providers = paginate(allProviders, currentPage, pageSize);

    return (
      <div className="container">
        <Container className="mt-5 mb-5">
          <Row>
            <Col>
              <HeaderMain title="Providers" className="" />
              <p className="text-left text-muted mt-5">
                Here is a list of the respective providers in the gappy system,
                you will find the respective providers practice they belong to,
                NPI and current gap information below. By clicking view on the
                far left of a respective provider will bring you to a more
                detailed page of the provider.
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
          className="table table-striped table-borderless table-responsive" style={{ overflowX: "auto", whiteSpace: "nowrap"}}
        >
          <thead style={{ borderTop:`${isOpen === true ? (
            "4px solid blue"
          ) : (
            "4px solid green"
          )}`, borderBottom: `${isOpen === true ? (
            "4px solid blue"
          ) : (
            "4px solid green"
          )}` }}>
            <tr className="text-muted">
              <th></th>
              <th className="font-weight-light">Full Name</th>
              <th className="font-weight-light">NPI</th>
              <th className="font-weight-light">Practice</th>
              <th className="font-weight-light">Members</th>
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
            {providers.map((provider) => (
              <tr key={provider.id}>
                <td>
                  <Link
                    className="btn btn-primary btn-sm"
                    to={`/providers/${provider.id}`}
                  >
                    View
                  </Link>
                </td>
                <td>{provider.name}</td>
                <td>{provider.npi}</td>
                <td>...</td>
                <td>{provider.patients}</td>
                <td>{isOpen === true ? (
                  <>{provider.total_gaps}</>
                ) : (
                <>{provider.patients - provider.total_gaps}</>
                )}</td>
                <td>{isOpen === true ? (
                  <>{provider.cbp_gaps}</>
                ) : (
                <>{provider.patients - provider.cbp_gaps}</>
                )}</td>
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

export default Providers;
