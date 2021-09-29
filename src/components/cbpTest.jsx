import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { HeaderMain } from "./common/headerMain";

class cbpTest extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container className="mt-5 mb-5">
          <Row>
            <Col>
              <HeaderMain title="CBP Report" className="" />
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
        <table
          className="table table"
          style={{ overflowX: "auto", whiteSpace: "nowrap" }}
        >
          <thead>
            
          </thead>
          <tbody>
            <tr>
              <td style={{width: "90%"}}>List from BCBS-M</td>
              <td style={{width: "10%"}}>466</td>
            </tr>
            <tr>
              <td>Documented Controlled Readings in 2021</td>
              <td>60</td>
            </tr>
          </tbody>
        </table>

        <table
          className="table table-borderless"
          style={{
            marginLeft: "50px",
            marginTop: "-12px",
            borderTop: "1px solid blue",
            borderBottom: "1px solid blue",
            overflowX: "auto",
            whiteSpace: "nowrap",
            width: "1060px",
          }}
        >
          <tbody>
            <tr>
              <td className="font-weight-bold" style={{ width: "85%" }}>
                Total Not Controlled in 2021
              </td>
              <td className="font-weight-bold" style={{ width: "10%" }}>
                376
              </td>
            </tr>
          </tbody>
        </table>

        <table
          className="table table-borderless"
          style={{
            marginLeft: "100px",
            marginTop: "-14px",
            overflowX: "auto",
            whiteSpace: "nowrap",
            width: "1010px",
          }}
        >
          <tbody>
            <tr style={{ borderBottom: "1px lightgray solid" }}>
              <td style={{ width: "80%" }}>Not Compliant with BP Medication</td>
              <td style={{ width: "10%" }}>0</td>
            </tr>
            <tr>
              <td style={{ width: "80%" }}>Compliant with BP Medication</td>
              <td style={{ width: "5%" }}>376</td>
            </tr>
          </tbody>
        </table>

        <table
          className="table table-borderless"
          style={{
            marginLeft: "150px",
            borderTop: "1px solid blue",
            borderBottom: "1px solid blue",
            overflowX: "auto",
            whiteSpace: "nowrap",
            marginTop: "-12px",
            width: "960px",
          }}
        >
          <tbody>
            <tr>
              <td className="font-weight-bold" style={{ width: "75%" }}>
                Total no Reading in 2021
              </td>
              <td className="font-weight-bold" style={{ width: "10%" }}>
                34
              </td>
            </tr>
          </tbody>
        </table>

        <table
          className="table table-borderless"
          style={{
            marginLeft: "200px",
            overflowX: "auto",
            whiteSpace: "nowrap",
            marginTop: "-14px",
            width: "910px",
          }}
        >
          <tbody>
            <tr style={{ borderBottom: "1px lightgray solid" }}>
              <td style={{ width: "70%" }}>
                Scheduled for an Appointment in 2021
              </td>
              <td style={{ width: "10%" }}>90</td>
            </tr>
            <tr>
              <td style={{ width: "70%" }}>No Upcoming Appointment in 2021</td>
              <td style={{ width: "10%" }}>252</td>
            </tr>
          </tbody>
        </table>

        <table
          className="table table-borderless"
          style={{
            marginLeft: "150px",
            borderTop: "1px solid blue",
            borderBottom: "1px solid blue",
            overflowX: "auto",
            whiteSpace: "nowrap",
            marginTop: "-12px",
            width: "960px",
          }}
        >
          <tbody>
            <tr>
              <td className="font-weight-bold" style={{ width: "75%" }}>
                Total with Reading in 2021 but Not Controlled Reading
              </td>
              <td className="font-weight-bold" style={{ width: "10%" }}>
                34
              </td>
            </tr>
          </tbody>
        </table>

        <table
          className="table table-borderless"
          style={{
            marginLeft: "200px",
            overflowX: "auto",
            whiteSpace: "nowrap",
            marginTop: "-14px",
            width: "910px",
          }}
        >
          <tbody>
            <tr style={{ borderBottom: "1px lightgray solid" }}>
              <td style={{ width: "70%" }}>
                Not Controlled with Upcoming Appointment in 2021
              </td>
              <td style={{ width: "10%" }}>14</td>
            </tr>
            <tr>
              <td style={{ width: "70%" }}>
                Not Controlled and No Upcoming Appointment in 2021
              </td>
              <td style={{ width: "10%" }}>20</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default cbpTest;
