import React from "react";

import { Card, Badge, CardBody } from "reactstrap";

const badgesColors = ["info", "primary", "secondary"];

const PracticeProfileCard = (props) => {
  const { closed, name, manager, location, providerCnt, memberCnt, gaps, risk } = props;

  return (
    <React.Fragment>
      {/* START Card */}
      <Card className="mb-3">
        <CardBody>
          <React.Fragment>
            <div className="d-flex justify-content-center my-3">
              <h3>{name}</h3>
            </div>
            <div className="mb-4 text-center">
              <a className="h6 text-decoration-none" href="#">
                Manager: {manager}
              </a>
              <div className="text-center">
                <i className="fa fa-map-marker mr-1"></i>
                {location}
              </div>
              <div className="text-center">
                <i className="mr-1"></i>
                Providers: {providerCnt}
              </div>
              <div className="text-center">
                <i className="mr-1"></i>
                Closed Gaps: {closed}
              </div>
              <div className="text-center">
                <i className="mr-1"></i>
                Open Gaps: {gaps}
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

export { PracticeProfileCard };
