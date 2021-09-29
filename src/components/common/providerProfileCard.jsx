import React from "react";

import { Card, Badge, CardBody } from "reactstrap";

const ProviderProfileCard = (props) => {
  const { practice, address, NPI, memberCnt, gaps, open, risk } = props;

  return (
    <React.Fragment>
      {/* START Card */}
      <Card className="mb-3">
        <CardBody>
          <React.Fragment>
            <div className="d-flex justify-content-center my-3">
              <h3>{practice}</h3>
            </div>
            <div className="mb-4 text-center">
              <a className="h6 text-decoration-none" href="#">
                Manager: {NPI}
              </a>
              <div className="text-center">
                <i className="mr-1"></i>
                {address}
              </div>
              <div className="text-center">
                <i className="mr-1"></i>
                Open Gaps: {gaps}
              </div>
              <div className="text-center">
                <i className="mr-1"></i>
                Closed Gaps: {open}
              </div>
              <div className="text-center">
                <i className="mr-1"></i>
                Members: {memberCnt}
              </div>
              <div className="text-center">
                <i className="mr-1"></i>
                Risk Level: {risk}
              </div>
            </div>
          </React.Fragment>
          <div className="text-center mb-4">
            <div className="mb-2">
              <span className="small">Measures</span>
            </div>
            <Badge pill color="danger" className="mr-1">
              CBP
            </Badge>
          </div>
        </CardBody>
      </Card>
      {/* END Card */}
    </React.Fragment>
  );
};

export { ProviderProfileCard };
