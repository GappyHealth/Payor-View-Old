import React from 'react';

const Profile = () => { 
    return (
        <React.Fragment>
            <div className="d-flex justify-content-center my-3">
                <h3>Rochester Medical Group</h3>
            </div>
            <div className="mb-4 text-center">
                <a className="h6 text-decoration-none" href="#">
                    Smith Willas
                </a>
                <div className="text-center">
                    <i className="fa fa-map-marker mr-1"></i>
                    Michigan
                </div>
                <div className="text-center">
                    <i className="mr-1"></i>
                    Providers: 4
                </div>
                <div className="text-center">
                    <i className="mr-1"></i>
                    Members: 55
                </div>
                <div className="text-center">
                    <i className="mr-1"></i>
                    Open Gaps: 32
                </div>
                <div className="text-center">
                    <i className="mr-1"></i>
                    Risk Level: 1
                </div>
            </div>
        </React.Fragment>
    )
}

export { Profile };