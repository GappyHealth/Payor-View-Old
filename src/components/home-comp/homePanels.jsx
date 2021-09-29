import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Panel extends Component {

    styleCard = {
        width: '30rem',
        background: '',
        border: '3px solid #4169e1',
        color: '#4169e1'
    };

    styleBCBS = {
        color: '#4169e1',
    }

    styleGappy = {
        color: '',
        background: ''
    }

    styleBtn = {
        background: '#4169e1',
        color: 'white'
    }

    render() { 
        return ( 
            <div class="card text-center m-4" style={this.styleCard} >
                <div class="card-body mb-3">
                    <h1 class="card-title mb-4">{this.props.title}</h1>
                    <h5 class="card-text" style={this.styleBCBS}>BCBS: {this.props.bcbs}</h5>
                    <h5 class="card-text text-success" style={this.styleGappy}>Gappy: {this.props.gappy}</h5>
                    <NavLink to={this.props.link} style={this.styleBtn} class="btn btn-lg mt-4">View</NavLink>
                </div>
            </div>
        );
    }
}
 
export default Panel;