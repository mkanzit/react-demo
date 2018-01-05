import React, { Component } from 'react';

class UsersList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="list-group container">
        {
          this.props.users.map( user => <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">{ user.first_name }</li>)
        }
      </ul>
    );
  }

}

export default UsersList;
