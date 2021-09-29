import React, { Component } from 'react';
import { CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

class MeasureBody extends Component {
  state = {
    isOpen: true
  };

  onToggle = () => {
    let bool = this.state.isOpen;

    if(bool == true)
      bool = false;
    else
      bool = true;

    this.setState({isOpen: bool});
  }

  render() {

    const {title, badgeTitle, badgeColor, controlled, value, valueTitle, link, toggle} = this.props;
 
    return (
      <div>
        <Link underline="none" to={link} style={{ textDecoration: 'none' }}>
        <div className="d-flex">
          <CardTitle tag="h6" className=" text-dark">{title}</CardTitle>
          {/* <Badge
            pill
            color={`${badgeColor}`}
            className="align-self-start ml-auto"
          >
            {badgeTitle}
          </Badge> */}
          <span className="badge badge-pill align-self-start ml-auto text-white" style={{"background": badgeColor}}>{badgeTitle}</span>
        </div>
        <div className="text-center my-4">
        <h2 className="text-success">{`${this.state.isOpen == true ? (value) : (controlled)}`}</h2>
          <span className="text-primary">{valueTitle}</span>
        </div>
        </Link>
        <div className="d-flex">
          <span onClick={() => this.onToggle()}><i className={`${this.state.isOpen == true ? (
              "fa text-dark fa-toggle-off"
            ) : (
              "fa text-dark fa-toggle-on"
            )}`}></i></span>
          <span className={`${this.state.isOpen == true ? (
              "ml-auto text-danger"
            ) : (
              "ml-auto text-success"
            )}`}>
            {`${this.state.isOpen == true ? (
              "Open"
            ) : (
              "Closed"
            )}`}
          </span>
        </div>
      </div>
    );
  }
}
 
export default MeasureBody;