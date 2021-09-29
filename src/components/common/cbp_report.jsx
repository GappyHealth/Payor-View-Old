import React, { Component } from 'react';
import { getPractice, getSingleProvider } from '../services/fakePracticeService';
import { Link } from 'react-router-dom';

class CBP extends Component {
    state = {
        data: [],
        type: ''
     }

    handleCBPReport() {
        let string = this.props.location.pathname;
        var pract = string.includes('practice');
        var prov = string.includes('provider')

        if(pract === true) {
            this.state.data = getPractice(this.props.match.params.id);
            this.state.type = 'practice';
        }
        else if (prov === true) {
            this.state.data = getSingleProvider(this.props.match.params.id);
            this.state.type = 'provider';
        }
    }

    render() {
        this.handleCBPReport();

        const id = this.props.match.params.id;
        const type = this.state.type;
        const cbp_report = this.state.data.cbp_report;
        const practice = this.state.data.name;
        console.log(cbp_report);
        
        return ( 
        <React.Fragment>
            <h1 className='m-3'>{ practice }</h1>
            <table className="table table-primary">
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col">First Stratification</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-light text-dark">
                        <th scope="row">1</th>
                        <td>BCBS-M Patients</td>
                        <td>{ cbp_report.bcbs }</td>
                        <td>Patients</td>
                    </tr>
                    <tr>
                        <th className="bg-light text-dark" scope="row">2</th>
                        <td>Documented Controlled Readings</td>
                        <td>{ cbp_report.controlled }</td>
                        <td>Patients</td>
                    </tr>
                    <tr>
                        <th className="bg-light text-dark" scope="row">3</th>
                        <td>Uncontrolled BP Gaps</td>
                        <td>{ cbp_report.uncontrolled }</td>
                        <td>Patients</td>
                    </tr>
                </tbody>
            </table>

            <div className="row">
                <div className="col card text-center bg-danger m-5">
                    <div class="card-header text-light">Non-Compliant with BP Meds</div>
                    <div class="card-body mb-3">
                        <h1 class="card-title text-light">{ cbp_report.non_compliant } Patients</h1>
                    </div>
                </div>
                <div className="col card text-center bg-success m-5">
                    <div class="card-header text-light">Compliant with BP Meds</div>
                    <div class="card-body mb-3">
                        <h1 class="card-title text-light">{ cbp_report.compliant } Patients</h1>
                    </div>
                </div>
            </div>

            <table className="table table-primary">
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col">No BP Reading in 2020</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-light text-dark">
                    <th scope="row">1</th>
                    <td>Total No Reading in 2020</td>
                    <td>{ cbp_report.no_reading }</td>
                    <td>Patients</td>
                    </tr>
                    <tr>
                    <th className="bg-light text-dark" scope="row">2</th>
                    <td>Scheduled for an Appointment in 2020</td>
                    <td>{ cbp_report.no_reading_scheduled }</td>
                    <td>Patients</td>
                    </tr>
                    <tr>
                    <th className="bg-light text-dark" scope="row">3</th>
                    <td>No Upcoming Appointment in 2020</td>
                    <td>{ cbp_report.no_reading_not_scheduled }</td>
                    <td>Patients</td>
                    </tr>
                </tbody>
            </table>

            <table className="table table-primary mt-5">
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col">Have a BP Reading in 2020</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-light text-dark">
                    <th scope="row">1</th>
                    <td>Total with Reading in 2020 but Not Controlled</td>
                    <td>{ cbp_report.yes_reading }</td>
                    <td>Patients</td>
                    <td></td>
                    </tr>
                    <tr>
                    <th className="bg-light text-dark" scope="row">2</th>
                    <td>Not Controlled and Upcoming for an Appointment in 2020</td>
                    <td>{ cbp_report.yes_reading_scheduled }</td>
                    <td>Patients</td>
                    <td>
                        <Link to={`/cbpinfo/${ id }/${ type }/5678`} className="btn btn-primary btn-sm">View</Link>
                    </td>
                    </tr>
                    <tr>
                    <th className="bg-light text-dark" scope="row">3</th>
                    <td>Not Controlled and No Upcoming Appointment in 2020</td>
                    <td>{ cbp_report.yes_reading_not_scheduled }</td>
                    <td>Patients</td>
                    <td>
                        <Link to={`/cbpinfo/${ id }/${ type }/1234`} className="btn btn-primary btn-sm">View</Link>
                    </td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment> );
    }
}
 
export default CBP;