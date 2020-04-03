import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor(props) {
    super(props);
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangeDesignation = this.onChangeDesignation.bind(this);
      this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      designation: '',
      phoneNumber: '',
    };
  }
  onChangeName(e) {
      this.setState({
        name: e.target.value
      });
    }
    onChangeEmail(e) {
      this.setState({
        email: e.target.value
      })
    }
    onChangeDesignation(e) {
      this.setState({
        designation: e.target.value
      })
    }
    onChangePhoneNumber(e) {
      this.setState({
        phoneNumber: e.target.value
      })
    }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, designation, phoneNumber } = this.state;

    axios.post('/api/create', { name, email, designation, phoneNumber })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { name, email, designation, phoneNumber } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD Employee
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Book List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="isbn">Name:</label>
                <input type="text"
                class="form-control"
                name="name"
                onChange={this.onChangeName}
                placeholder="Name"
                value = {this.state.name}/>
              </div>
              <div class="form-group">
                <label for="title">Email:</label>
                <input type="email"
                  class="form-control"
                  name="email"
                  onChange={this.onChangeEmail}
                  placeholder="Email Address"
                  value = {this.state.email} />
              </div>
              <div class="form-group">
                <label for="author">Designation:</label>
                <input type="text"
                  class="form-control"
                  name="designation"
                  onChange={this.onChangeDesignation}
                  placeholder="designation"
                  value = {this.state.designation} />
              </div>
              <div class="form-group">
                <label for="publisher">Phone No.:</label>
                <input type="text"
                  class="form-control"
                  name="phoneNumber"
                  onChange={this.onChangePhoneNumber}
                  placeholder="Phone No"
                  value = {this.state.phoneNumber} />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
