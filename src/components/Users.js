import React, { Component } from 'react';
import axios from 'axios';

import baseUrl from '../config/envirenment';

import UsersList from './UsersList';

class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      query: '',
      users: [],
      results: []
    };

    // Binding functions to 'this'
    this.getUsers = this.getUsersList.bind(this);
    this.loadMore = this.loadMoreUsers.bind(this);
    this.filter   = this.updateQuery.bind(this);
  }


  render() {
    return (
      <div className="Users container">
        <h1>Users list</h1>
        <span className="badge badge-danger">{ this.state.error }</span>
        <input type="text" className="form-control" onChange={ this.filter } placeholder="Find a user"/>
        <UsersList users={this.state.results} />
        <button className="btn btn-primary" onClick={ this.loadMore }>Load more</button>
      </div>
    );
  }

  componentWillMount() {
    this.getUsers();
  }

  // Get users from the api
  getUsersList() {
    axios.get(baseUrl, { params: {page: this.state.page} })
    .then( response => {
      this.setState((prevState => {
        return {
          users: prevState.users.concat(response.data.data),
          results: prevState.results.concat(response.data.data),
          page: ++prevState.page
        }
      }))
    })
    .catch( err => {
      console.log(err);
    })
  }

  // Get query when user type something
  updateQuery(e) {
    let query = e.target.value;
    if( query === '' ) {
      this.setState((prevState) => {
        return {results: prevState.users}
      })
    } else {
      this.setState((prevState) => {
        return {
          query: query,
          results: prevState.users.filter( user => user.first_name.indexOf(query) !== -1)
      }
      })
    }
  }

  // Load more users
  loadMoreUsers() {
    this.getUsers();
  }
}

export default Users;
