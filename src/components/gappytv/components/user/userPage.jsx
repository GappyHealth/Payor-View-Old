import React, { Component } from "react";

// Root CSS
import "../../css/styles.css";

// External Libraries
import { Row, Col, Card, CardTitle, CardBody, Button, Badge } from "reactstrap";
import Modal from "react-bootstrap/Modal";

// Components
import { Header } from "../common/header";
import EditBilling from "../forms/editBilling";
import ResetPin from "../forms/resetPin";

// Assets
import img2 from "../../assets/profile4.jpg";

class UserPage extends Component {
  state = {
    visible: false,
    form: "",
  };

  renderForm(param) {
    switch (param) {
      case 'editbilling':
        return <EditBilling />

      case 'resetpin':
        return <ResetPin />

      default:
        break;
    }
  }

  render() {

    const { form, visible } = this.state;

    return (
      <React.Fragment>
        <section style={{ margin: "5%" }}>
          <Header title="Profile Details" className="mb-5 mt-4" />
          {/* START Content */}
          <Row>
            <Col lg={4}>
              <Card>
                <CardBody>
                  <div className="d-flex justify-content-center">
                    <img
                      src={img2}
                      alt=""
                      style={{
                        width: "50%",
                        height: "50%",
                        borderRadius: "50%",
                      }}
                      className=""
                    />
                  </div>
                  <div className="mt-3 mb-4 text-center">
                    <p
                      className="h6 text-center text-overflow text-decoration-none"
                      href="#"
                    >
                      Lawren Rightwork
                    </p>
                    <div className="text-center text-success font-weight-bold">
                      <h2>8500</h2>
                    </div>
                    <span>
                      <i class="fa fa-star fa-2x" style={{ color: "gold" }}></i>
                    </span>
                  </div>
                  <div className="text-center pb-1">
                    <ul className="list-inline">
                      <li className="list-inline-item text-center">
                        <h2 className="mb-1">2</h2>
                        <span>Tasks In-Progress</span>
                      </li>
                      <li className="list-inline-item text-center">
                        <h2 className="mb-1">126</h2>
                        <span>Tasks Completed</span>
                      </li>
                    </ul>
                  </div>
                  <Row className="mt-3">
                    <Col sm={6} md={6}>
                      <Button
                        color="primary"
                        block
                        to="/apps/new-email"
                        className="mb-3 mb-lg-0"
                      >
                        Message
                      </Button>
                    </Col>
                    <Col sm={6} md={6}>
                      <Button
                        color="secondary"
                        outline
                        block
                        to="/apps/profile-edit"
                      >
                        Edit
                      </Button>
                    </Col>
                  </Row>
                  <div></div>
                  <p className="mt-4 small text-left">Profile</p>
                  <p className="text-left">Office Staff Biller</p>
                  <p className="mt-4 small text-left">Awards</p>
                  <div className="text-left mb-4">
                    <span className="mr-2 badge badge-pill bg-warning text-white">
                      Weekly Leader
                    </span>
                    <Badge pill color="info" className="mr-2">
                      Monthly Leader
                    </Badge>
                    <Badge pill color="success" className="mr-1">
                      Yearly Leader
                    </Badge>
                  </div>
                  <p className="mt-4 small text-left">Practice Info</p>
                  <dl className="row">
                    <dt className={`col-sm-3 text-lg-left`}>Address</dt>
                    <dd className={`col-sm-9 text-lg-right text-inverse`}>
                      700 Zemlak Glen
                    </dd>
                    <dt className={`col-sm-3 text-lg-left`}>City</dt>
                    <dd className={`col-sm-9 text-lg-right text-inverse`}>
                      Jacobiton
                    </dd>
                    <dt className={`col-sm-3 text-lg-left`}>State</dt>
                    <dd className={`col-sm-9 text-lg-right text-inverse`}>
                      West Virginia
                    </dd>
                    <dt className={`col-sm-3 text-lg-left`}>ZIP</dt>
                    <dd className={`col-sm-9 text-lg-right text-inverse`}>
                      87032
                    </dd>
                  </dl>

                  <p className="mt-4 small text-left">Settings</p>
                  <div>
                    <Button
                      color="primary"
                      block
                      onClick={() => this.setState({ visible: true, form: "resetpin" })}
                      className="mb-3 mb-lg-0"
                    >
                      Reset Pin
                    </Button>
                    <Button
                      color="primary"
                      block
                      to="/apps/new-email"
                      className="mb-3 mb-lg-0"
                    >
                      Edit User Details
                    </Button>
                    <Button
                      color="primary"
                      block
                      to="/apps/new-email"
                      className="mb-3 mb-lg-0"
                    >
                      Contact Support
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={8}>
              <div className="hr-sect">Funds</div>
              <Row className="mb-5">
                <Col>
                  <Card className="mb-3">
                    <CardBody>
                      <CardTitle tag="h6" className="text-center mb-4">
                        Reedamable Points
                      </CardTitle>
                      <div className="content-left">
                        <h2 className="text-center">4000 </h2>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card className="mb-3">
                    <CardBody>
                      <CardTitle tag="h6" className="text-center mb-4">
                        Points Pending Gap Closure
                      </CardTitle>
                      <div>
                        <h2 className="text-center">1470</h2>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card className="mb-3">
                    <CardBody>
                      <CardTitle tag="h6" className="text-center mb-4">
                        Lifetime Total Points
                      </CardTitle>
                      <div>
                        <h2 className="text-center">8500</h2>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>

              <Row className="mb-5">
                <Col>
                  <Button color="success" outline block to="/apps/profile-edit">
                    Redeem Points
                  </Button>
                </Col>
                <Col>
                  <Button
                    color="primary"
                    outline
                    block
                    onClick={() => this.setState({ visible: true, form: "editbilling" })}
                  >
                    Edit Billing Info
                  </Button>
                </Col>
              </Row>

              <Col lg={12}>
                <div className="hr-sect">In-Progress</div>
                <table
                  className="table table-hover table-responsive"
                  style={{
                    cursor: "pointer",
                    overflowX: "auto",
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
                        style={{ width: "10%", whiteSpace: "nowrap" }}
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
                        className="font-weight-bold text-muted"
                        style={{ width: "30%" }}
                      >
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        className="align-middle font-weight-bold"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <i class="fa fa-circle text-danger"></i>
                        BP Check Appointment Scheduling
                      </td>
                      <td>
                        We need to ensure that patient BP is controlled to avoid
                        HTN related complications. It is important that we have
                        a controlled BP on file every calendar year.
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
                      <td className="align-middle text-center">
                        Amy Wrightworth
                      </td>
                      <td className="text-center align-middle">
                        <span className="badge badge-pill bg-info text-white">
                          In-Progress
                        </span>
                        <h6></h6>
                        <h6 className="text-center">3/10/21 12:01pm</h6>
                      </td>
                      <td>Call to patient in progress, awaiting outcome.</td>
                    </tr>
                    <tr>
                      <td
                        className="align-middle font-weight-bold"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <i class="fa fa-circle text-danger"></i>
                        BP Check Appointment Scheduling
                      </td>
                      <td>
                        We need to ensure that patient BP is controlled to avoid
                        HTN related complications. It is important that we have
                        a controlled BP on file every calendar year.
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
                      <td className="align-middle text-center">
                        Duck Worthslight
                      </td>
                      <td className="text-center align-middle">
                        <span className="badge badge-pill bg-info text-white">
                          In-Progress
                        </span>
                        <h6></h6>
                        <h6 className="text-center">3/10/21 12:01pm</h6>
                      </td>
                      <td>Call to patient in progress, awaiting outcome.</td>
                    </tr>
                  </tbody>
                </table>

                <div className="hr-sect mt-5">Completed</div>
                <table
                  className="table table-hover table-responsive"
                  style={{
                    cursor: "pointer",
                    overflowX: "auto",
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
                        style={{ width: "10%", whiteSpace: "nowrap" }}
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
                        className="font-weight-bold text-muted"
                        style={{ width: "30%" }}
                      >
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        className="align-middle font-weight-bold"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <i class="fa fa-circle text-danger"></i>
                        BP Check Appointment Scheduling
                      </td>
                      <td>
                        We need to ensure that patient BP is controlled to avoid
                        HTN related complications. It is important that we have
                        a controlled BP on file every calendar year.
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
                      <td className="align-middle text-center">John Loe</td>
                      <td className="text-center align-middle">
                        <span className="badge badge-pill bg-success text-white">
                          Completed
                        </span>
                        <h6></h6>
                        <h6 className="text-center">3/10/21 12:01pm</h6>
                      </td>
                      <td>
                        Successfully scheduled patient for blood pressure
                        measurement. Placed appointment flag in EMR.
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle font-weight-bold">
                        <i class="fa fa-circle text-danger"></i>
                        BP Check Appointment Scheduling
                      </td>
                      <td>
                        We need to ensure that patient BP is controlled to avoid
                        HTN related complications. It is important that we have
                        a controlled BP on file every calimport EditBilling from calendar year.
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
                      <td className="align-middle text-center">Dove Madison</td>
                      <td className="text-center align-middle">
                        <span className="badge badge-pill bg-success text-white">
                          Completed
                        </span>
                        <h6></h6>
                        <h6 className="text-center">3/8/21 1:03pm</h6>
                      </td>
                      <td>
                        Successfully scheduled patient for blood pressure
                        measurement. Placed appointment flag in EMR.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Col>
            </Col>
          </Row>
          {/* END Content */}

          <Modal
            dialogClassName="sm"
            show={visible}
            effect="fadeInUp"
          >
            <div className="modal-header d-flex m-2">
              <h4 className="modal-title">Form...</h4>
              <Button
                color="danger"
                className="close"
                onClick={() => this.setState({ visible: false })}
              ><i class="fa fa-times-circle"></i></Button>
            </div>
            <div className="modal-body">
              {this.renderForm(form)}
            </div>
          </Modal>
        </section>
      </React.Fragment>
    );
  }
}

export default UserPage;
