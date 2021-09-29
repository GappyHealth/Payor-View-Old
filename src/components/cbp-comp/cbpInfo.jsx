import React, { Component } from 'react';
import { getSingleProvider, getPracticeProviders, getPractice } from '../services/fakePracticeService';

class CBPInfo extends Component {
    state = { 
        pathname: this.props.location.pathname,
        id: '',
        type: '',
        btn: '',
        data: [],
        patients: [],
        text: '',
        name: ''
    }

    handleData() {

        var array = this.state.pathname.split('/'),
            tmp = array[0], comp = array[1], id = array[2], type = array[3], btn = array[4];

        this.state.id = id;
        this.state.type = type;
        this.state.btn = btn;

        if (type === 'provider') {
            this.state.data = getSingleProvider(id);
            this.state.name = this.state.data.name;
            this.state.data = this.state.data.patients;

            if (btn === '5678') {
                this.state.text = 'Uncontrolled and Upcoming Appointment Scheduled BP Gaps'
                for (var i = 0;  i < this.state.data.length; i++) {
                    if(!this.state.data[i].next_visit.includes('Not'))
                        this.state.patients.push(this.state.data[i]);
                }
            } else {
                this.state.text = 'Uncontrolled and No Appointment Scheduled BP Gaps'
                for (var i = 0;  i < this.state.data.length; i++) {
                    if(this.state.data[i].next_visit.includes('Not'))
                        this.state.patients.push(this.state.data[i]);
                }
            }

        } else {
            this.state.data = getPracticeProviders(id);
            this.state.name = getPractice(id).name;

            if (btn === '5678') {
                this.state.text = 'Uncontrolled and Upcoming Appointment Scheduled BP Gaps'

                for (var i = 0;  i < this.state.data.length; i++) {
                    let patients = this.state.data[i].patients;
                    for (var j = 0; j < patients.length; j++){
                        if(!patients[j].next_visit.includes('Not')) {
                            patients[j]['provider'] = this.state.data[i].name;
                            this.state.patients.push(patients[j]);
                        }
                    }
                }
            } else {
                this.state.text = 'Uncontrolled and No Appointment Scheduled BP Gaps'

                for (var i = 0;  i < this.state.data.length; i++) {
                    let patients = this.state.data[i].patients;
                    for (var j = 0; j < patients.length; j++){
                        if(patients[j].next_visit.includes('Not')) {
                            patients[j]['provider'] = this.state.data[i].name;
                            this.state.patients.push(patients[j]);
                        }
                    }
                }
            }
        }

    }

    render() { 
        this.handleData();
        let patients = this.state.patients;

        return ( 
            <React.Fragment>
                <div>
                    <card className="card mt-5 bg-light text-center text-uppercase font-weight-bold">
                        <div class="card-body m-2">
                            <h4 class="card-title">{ this.state.name } CBP Report</h4>
                            <h4 class="card-title">{ this.state.text }</h4>
                        </div>
                    </card>
                </div>

                <div>
                    <card className="card mt-5 bg-danger text-white text-center text-uppercase font-weight-bold">
                        <div class="card-body">
                            <h3 class="card-title">Total BP Gaps = {patients.length}</h3>
                        </div>
                    </card>
                </div>

                <div>
                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th>Patient Name</th>
                            <th>Provider</th>
                            <th>Address</th>
                            <th>DOB</th>
                            <th>Phone</th>
                            <th>Gap</th>
                            <th>Last Visit</th>
                            <th>Next Visit</th>
                            <th>Risk Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   patients.map(patient => (
                            <tr>
                                <td>{ patient.name }</td>
                                <td>{ patient.provider }</td>
                                <td>{ patient.address }</td>
                                <td>{ patient.dob }</td>
                                <td>{ patient.phone }</td>
                                <td>{ patient.gap }</td>
                                <td>{ patient.last_visit }</td>
                                <td>{ patient.next_visit }</td>
                                <td>{ patient.risk_lvl }</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </React.Fragment>
        );
    }
}
 
export default CBPInfo;