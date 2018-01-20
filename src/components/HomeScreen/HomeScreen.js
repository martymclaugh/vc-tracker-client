// @flow

import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { createCompany } from './home-screen-mutations';
import { fetchAllCompanies } from './home-screen-queries';
import Form from '../shared/Form/Form';
import { initialFormState, companyInputs } from '../../helpers/company-inputs';
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
        slug && this.props.history.push(`/companies/${slug}`);
      });
  }
  render() {
    return (
      <div className="home-screen">
        Home Screen
        <Form
          onSubmit={this.handleCreateCompany}
          inputs={companyInputs}
          initialFormState={initialFormState}
          formType="company"
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
