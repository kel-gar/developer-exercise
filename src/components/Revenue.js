import React, { Component } from 'react';
import {
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap'
import './Revenue.css';

class Revenue extends Component {
  constructor() {
    super()
    // "seed" data initially
    this.state = {
      revenue: [
        {
          name: 'Item 1',
          oneTime: 100,
          monthly: 50
        },
        {
          name: 'Item 2',
          oneTime: 50,
          monthly: 25
        },
        {
          name: 'Item 3',
          oneTime: 25,
          monthly: 85
        }]
    };

    this.handleDelete = this.handleDelete.bind(this)
    // this.handleAdd = this.handleAdd.bind(this)
  }

  // Delete expense or revenue from list
  handleDelete(type, index) {
    // listType will be 'expenses' or 'revenue' depending on item to delete
    let listType = this.state[type]
    // recalculate and set totals in state
    if (type === 'expenses') {
      this.setState({
        oneTimeExpense: this.state.oneTimeExpense - this.state.expenses[index]['oneTime'],
        monthlyExpense: this.state.monthlyExpense - this.state.expenses[index]['monthly'],
      })
    } else {
      // for revenue
      this.setState({
        oneTimeRevenue: this.state.oneTimeRevenue - this.state.revenue[index]['oneTime'],
        monthlyRevenue: this.state.monthlyRevenue - this.state.revenue[index]['monthly'],
      })
    }
    // remove list item from state array
    this.setState({
      [listType]: listType.splice(index, 1),
    })
  }

  render() {
    // create table rows from revenue state list
    let revenueTableData = this.state.revenue.map((item, index) => {
      return (
        <tr key={"revenue" + index}>
          <td>{item.name}</td>
          <td>${item.oneTime.toFixed(2)}</td>
          <td>${item.monthly.toFixed(2)}</td>
          <td><Button onClick={() => this.handleDelete('revenue', index)}>Delete</Button></td>
        </tr>
      )
    })

    return (
      <div>
        <div className="roi-tables">
          {/* Revenue Table */}
          <table className="revenue-table">
            <thead>
              <tr>
                <th>Revenue</th>
              </tr>
              <tr>
                <th></th>
                <th>One-Time</th>
                <th>Monthly</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {revenueTableData}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Revenue;
