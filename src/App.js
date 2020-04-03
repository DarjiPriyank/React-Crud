import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employee: []
    };
  }

  componentDidMount() {
    axios.get('/api/')
      .then(res => {
        this.setState({ employee: res.data });
        console.log(this.state.employee);
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Employees Records
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Employee</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email Address</th>
                  <th>Designation</th>
                  <th>Phone Number</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employee.map(employee =>
                  <tr>
                    <td><Link to={`/show/${employee._id}`}>{employee.name}</Link></td>
                    <td>{employee.email}</td>
                    <td>{employee.designation}</td>
                    <td>{employee.phoneNumber}</td>
                    <td>  <Link to={`/edit/${employee._id}`} class="btn btn-success">Edit</Link>&nbsp;<a href="{/edit/${employee._id}}" style={{marginRight: 10 + 'px'}}  class="btn btn-primary">Edit</a><a href=""  class="btn btn-danger">Delete</a></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
