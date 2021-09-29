import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Test extends Component {
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
            <Row>
                <Col className="bg-primary p-5"></Col>
                <Col className="bg-warning p-5"></Col>
                <Col className="bg-danger p-5"></Col>
                <Col className="bg-success p-5"></Col>
            </Row>

            <Row>
                <Col className="bg-success p-5"></Col>
                <Col className="bg-success p-5"></Col>
                <Col className="bg-success p-5"></Col>
                <Col className="bg-success p-5"></Col>
            </Row>

            <Row>
                <Col className="bg-primary p-5"></Col>
                <Col className="bg-warning p-5"></Col>
                <Col className="bg-danger p-5"></Col>
                <Col className="bg-success p-5"></Col>
            </Row>

            <Row>
                <Col className="bg-danger p-5"></Col>
                <Col className="bg-danger p-5"></Col>
                <Col className="bg-danger p-5"></Col>
                <Col className="bg-danger p-5"></Col>
            </Row>
        </React.Fragment> );
    }
}
 
export default Test;