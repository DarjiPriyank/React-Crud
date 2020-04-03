import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employee: {}
    };
  }

  componentDidMount() {
    axios.get('/api/read/'+this.props.match.params.id)
      .then(res => {
        this.setState({ employee: res.data });
        console.log(this.state.employee);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('/api/read/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Record of {this.state.employee.name} Employee
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Employee List</Link></h4>
            <dl>
              <dt>Name:</dt>
              <dd>{this.state.employee.name}</dd>
              <dt>Email Address:</dt>
              <dd>{this.state.employee.email}</dd>
              <dt>Designation:</dt>
              <dd>{this.state.employee.designation}</dd>
              <dt>Phone No.:</dt>
              <dd>{this.state.employee.phoneNumber}</dd>
            </dl>
            <Link to={`/edit/${this.state.employee._id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.employee._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
