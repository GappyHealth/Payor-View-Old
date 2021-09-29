import React, { Component } from 'react';

class Info extends Component {
    state = {  }

    styles={
        max_width: "18rem",
    }

    render() { 

        const { name, members_cnt, gaps, address, city, phone } = this.props;

        return ( 
            <div>
                <div className="card bg-light mb-2" style={this.styles}>
                    <div className="card-header">Information</div>
                    <div className="card-body">
                        <h2>{ name }</h2>
                        <h5>Address: { address }</h5>
                        <h5>City: { city }</h5>
                        <h5>Phone: { phone }</h5>
                        <h5>---------------</h5>
                        <h5>Members: { members_cnt }</h5>
                        <h5>Open Gaps: { gaps }</h5>
                    </div>
                </div>
            </div>

        );
    }
}
 
export default Info;