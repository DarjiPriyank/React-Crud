import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangeDesignation = this.onChangeDesignation.bind(this);
      this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
        _id:'',
        name: '',
        email: '',
        designation: '',
        phoneNumber: '',
      };
  }


  componentDidMount() {
    axios.get('/api/read/'+this.props.match.params.id)
      .then(res => {
        this.setState({
            _id:res.data._id,
            name: res.data.name,
            email: res.data.email,
            designation: res.data.designation,
            phoneNumber: res.data.phoneNumber,
         });
        console.log(this.state);
      }).catch(function (error) {
              console.log(error);
          });
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
    const employee = {
     _id:this.state._id,
     name: this.state.name,
     email: this.state.email,
     designation: this.state.designation,
     phoneNumber: this.state.phoneNumber
   };
  //  const { name, email, designation, phoneNumber } = this.state.employee;

    axios.put('/api/update/'+this.props.match.params.id, employee)
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT Employee Record
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Employee List</Link></h4>
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
              <button type="submit" class="btn btn-success">Update</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
