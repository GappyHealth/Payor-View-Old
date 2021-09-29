import React, { Component, useMemo } from "react";
import ReactTable from "./reactTable";
import { COLUMNS } from "../utils/columns";
import { getDateRangeFiltered } from '../utils/dateRangePicker';
import { DateRangePicker } from 'react-date-picker';

class BasicTable extends Component {
  state = {
    patients: [],
    isLoading: true,
  };

  componentDidMount() {
    fetch("https://gappyapi.ait-network.com/v1/practices/c2ba4d5f-85f2-465b-b0e9-2dece3a1888d/")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ patients: data['patients'], isLoading: false });
      })
      .catch(console.log);
  }

  handleDateFilter = ({startDate, endDate}) => {
    const patients = (this.state.patients = getDateRangeFiltered(this.state.patients, startDate, endDate, null));
    this.setState({ patients });
  }

  render() {
    const columns = COLUMNS;
    const { patients, isLoading } = this.state;

    return (
        <React.Fragment>
            {/* <button onClick={() => this.handleDateFilter(patients)} className="btn btn-success.m-2">Click Me!</button> */}
            <ReactTable columns={columns} data={patients} isLoading={isLoading}/>
        </React.Fragment>
    )   
  }
}

export default BasicTable;
