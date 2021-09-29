import React from 'react';

import { 
    Card,
    Badge,
    CardBody
} from 'reactstrap';

import {
    Profile
} from "./profile";


const badgesColors = [
    "info",
    "primary",
    "secondary"
];

const UsersResultsCard = () => (
    <React.Fragment>
        { /* START Card */}
        <Card className="mb-3">
            <CardBody>
                <Profile />
                <div className="text-center mb-4">
                    <div className="mb-2">
                        <span className="small">
                            Measures
                        </span>
                    </div>
                    <Badge pill color="danger" className="mr-1">
                        CBP
                    </Badge>
                </div>         
            </CardBody>
        </Card>
        { /* END Card */}
    </React.Fragment>
)

export { UsersResultsCard };