import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
    state = {  }

    styles = {
        max_width: '18rem',
        max_height: '18rem',
        border: '3px solid #4169e1',
        color: '#4169e1'
    }

    styleIMG = {
        width: '20rem',
        height: '12rem'
      }

    render() { 
        return (
        <React.Fragment>
            <div>
                <h3 className="text-center">{this.props.header}</h3>
            </div>
            <Link to="/cbp" className="card" style={this.styles}>
                    <div className="m-2">
                        <img src={this.props.img} style={this.styleIMG} alt="" className="card-img-top shadow bg-white rounded"/>
                    </div>
                <div className="card-body">
                    <div className="card-title">
                        <h5 className="">BCBS: {this.props.bcbs}</h5>
                        <h5 className="text-success">Gappy: {this.props.gappy}</h5>
                    </div>
                </div>
            </Link>
        </React.Fragment> );
    }
}
 
export default Card;