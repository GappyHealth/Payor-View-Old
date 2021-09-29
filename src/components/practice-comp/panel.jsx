import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Panel extends Component {
    state = {  }

    styles = {
        max_width: '100px',
        max_height: '100px',
    }

    render() { 
        const { heading, bcbs, gappy, link } = this.props;
        return ( 
            <Link to={ link } class="card bg-light mb-3" style={this.styles}>
                    <div class="card-header text-center font-weight-bold text-dark"><h4>{ heading }</h4></div>
                <div class="card-body">
                    <h5 class="card-title text-primary">BCBS: { bcbs }</h5>
                    <h5 class="card-title text-success">Gappy: { gappy }</h5>
                </div>
            </Link> );
    }
}

export default Panel;