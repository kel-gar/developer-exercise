import React, { Component } from 'react';
import {
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap'
import './Expenses.css';

class Expenses extends Component {
  constructor() {
    super()
    // "seed" data initially
    this.state = {
      expenses: [{
        name: 'Expense 1',
        oneTime: 500,
        monthly: 20.00
      },
      {
        name: 'Expense 2',
        oneTime: 200,
        monthly: 40
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
    // create table rows from expenses state list
    let expensesTableData = this.state.expenses.map((expense, index) => {
      return (
        <tr key={"expense" + index}>
          <td>{expense.name}</td>
          <td>${expense.oneTime.toFixed(2)}</td>
          <td>${expense.monthly.toFixed(2)}</td>
          <td><Button onClick={() => this.handleDelete('expenses', index)}>Delete</Button></td>
        </tr>
      )
    })

    return (
      <div>
        <div className="roi-tables">
          {/* Expenses Table */}
          <table className="expenses-table">
            <thead>
              <tr>
                <th>Expenses</th>
              </tr>
              <tr>
                <th></th>
                <th>One-Time</th>
                <th>Monthly</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {expensesTableData}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Expenses;
