// @flow

import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { createCompany } from './home-screen-mutations';
import { fetchAllCompanies } from './home-screen-queries';
import CompanyForm from '../shared/CompanyForm/CompanyForm';
import CompanyList from '../shared/CompanyList/CompanyList';
import { Props, State } from '../../flow/components/home-screen-types';


class HomeScreen extends Component<Props, State> {
  constructor(props) {
    super (props);

    this.state = {};

    this.handleCreateCompany = this.handleCreateCompany.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    nextProps.allCompanies.refetch();
  }
  handleCreateCompany: () => void;
  handleCreateCompany(args) {
    this.props.createCompany({ variables: args })
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
    graphql(createCompany, { name: 'createCompany' }),
    graphql(fetchAllCompanies, { name: 'allCompanies' })
)(HomeScreen);
