// @flow

import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { createCompany } from './home-screen-mutations';
import { fetchAllCompanies } from './home-screen-queries';
import CompanyForm from '../Company/CompanyForm/CompanyForm';
import CompanyList from '../Company/CompanyList/CompanyList';


class HomeScreen extends Component {
  constructor(props) {
    super (props);

    this.handleCreateCompany = this.handleCreateCompany.bind(this);
  }
  handleCreateCompany(args) {
    this.props.mutate({ variables: args })
      .then((data) => {
        const slug = data.data.createCompany.slug
        slug && this.props.history.push(`/company/${slug}`);
      });
  }
  render() {
    return (
      <div className="home-screen">
        Home Screen
        <CompanyForm
          onSubmit={this.handleCreateCompany}
        />
        <CompanyList
          companies={this.props.allCompanies.getCompanies}
        />
      </div>
    )
  }
}

export default compose(
    graphql(createCompany),
    graphql(fetchAllCompanies, { name: 'allCompanies' })
)(HomeScreen);
