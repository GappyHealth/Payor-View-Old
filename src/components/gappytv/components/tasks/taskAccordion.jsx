// Root Imports
import { React } from "react";

// External Library Imports
import { Accordion, Button } from "react-bootstrap";

const TaskAccordion = (props) => {
  const { color, heading, body } = props;

  return (
    <Accordion>
      <div
        className="d-flex"
        style={{
          border: `1px solid ${color}`,
          borderRadius: "5px",
          width: "100%",
          height: "auto",
        }}
      >
        <div className="mr-auto">
          <Accordion.Toggle as={Button} variant="button" eventKey="0">
            <h3 style={{ color: `${color}` }}>{heading}</h3>
          </Accordion.Toggle>
        </div>
        <div>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <span className="ml-auto">
              <i class="fa fa-plus text-dark fa-2x"></i>
            </span>
          </Accordion.Toggle>
        </div>
      </div>
      <Accordion.Collapse eventKey="0">
        <table
          className="table table-hover table-responsive"
          style={{
            cursor: "pointer",
            overflowX: "auto"
          }}
        >
          <thead style={{ borderBottom: "1px solid lightGrey" }}>
            <tr>
              <th
                className="font-weight-bold text-muted"
                style={{ width: "15%" }}
              >
                Tasks
              </th>
              <th
                className="font-weight-bold text-muted"
                style={{ width: "5%" }}
              >
                Type
              </th>
              <th
                className="font-weight-bold text-muted"
                style={{ width: "30%" }}
              >
                Reason
              </th>
              <th
                className="font-weight-bold text-muted"
                style={{ width: "10%" }}
              >
                Patient Name
              </th>
              <th
                className="font-weight-bold text-muted"
                style={{ width: "10%" }}
              >
                Provider
              </th>
              <th
                className="font-weight-bold text-muted"
                style={{ width: "10%" }}
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
              <tr
                // key={ea.patientID}
                // onClick={() => this.goToTask(ea._id, ea.patientID)}
              >
                <td className="align-middle font-weight-bold">
                  <i class="fa fa-circle text-danger"></i>
                  Bill CPTII Codes
                </td>
                <td className="align-middle font-weight-bold">
                  MA
                </td>
                <td>
                  CPTII codes are reporting codes which allow payors to ID where
                  members’ BPs stand within a controlled or uncontrolled range,
                  any given year. Gappy has automatically paired the appropriate
                  CPTII codes based on the systolic and diastolic readings for
                  you.
                  <span
                    className="ml-2 badge badge-pill text-white"
                    style={{ background: "green" }}
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
                <td className="align-middle" style={{ overflowX: "auto"}}>
                  John Loe
                </td>
                <td className="align-middle" style={{ overflowX: "auto"}}>
                  Margolis Something
                </td>
                <td className="align-middle">
                  <span
                    className="ml-2 badge badge-pill text-white"
                    style={{ background: "red" }}
                  >
                    In-Complete
                  </span>
                </td>
                <td>
                  CPTII codes are reporting codes which allow payors to ID where
                  members’ BPs stand within a controlled or uncontrolled range
                </td>
              </tr>
          </tbody>
        </table>
      </Accordion.Collapse>
    </Accordion>
  );
};

export default TaskAccordion;
