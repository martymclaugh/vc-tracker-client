// @flow

import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import CompanyForm from '../Company/CompanyForm/CompanyForm';
import { createCompany } from './home-screen-mutations';


class HomeScreen extends Component {
  constructor(props) {
    super (props);

    this.handleCreateCompany = this.handleCreateCompany.bind(this);
  }
  handleCreateCompany(args) {
    this.props.mutate({ variables: args });
  }
  render() {
    return (
      <div className="home-screen">
        Home Screen
        <CompanyForm
          onSubmit={this.handleCreateCompany}
        />
      </div>
    )
  }
}

export default graphql(createCompany)(HomeScreen);
