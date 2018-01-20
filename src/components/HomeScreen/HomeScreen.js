// @flow

import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { createCompany } from './home-screen-mutations';
import { fetchAllCompanies } from './home-screen-queries';
import CompanyForm from '../shared/CompanyForm/CompanyForm';
import CompanyList from '../shared/CompanyList/CompanyList';


class HomeScreen extends Component {
  constructor(props) {
    super (props);

    this.handleCreateCompany = this.handleCreateCompany.bind(this);
  }
  handleCreateCompany(args) {
    this.props.createCompany({ variables: args })
      .then((data) => {
        const slug = data.data.createCompany.slug
        slug && this.props.history.push(`/company/${slug}`);
      });
  }
  componentWillReceiveProps(nextProps) {
    nextProps.allCompanies.refetch();
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
    graphql(createCompany, { name: 'createCompany' }),
    graphql(fetchAllCompanies, { name: 'allCompanies' })
)(HomeScreen);
