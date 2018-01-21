// @flow

import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { createCompany } from './home-screen-mutations';
import { fetchAllCompanies } from './home-screen-queries';
import Form from '../shared/Form/Form';
import { initialFormState, companyInputs } from '../../helpers/company-inputs';
import CompanyList from '../shared/CompanyList/CompanyList';
import { Props, State } from '../../flow/components/home-screen-types';

import './home-screen-styles.css';


class HomeScreen extends Component<Props, State> {
  constructor(props) {
    super (props);

    this.state = {
      displayForm: false,
    };

    this.handleCreateCompany = this.handleCreateCompany.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
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
  toggleForm: () => void;
  toggleForm() {
    this.setState({ displayForm: !this.state.displayForm });
  }
  render() {
    const { getCompanies } = this.props.allCompanies;
    const form = this.state.displayForm && (
      <div className="home-screen__form">
        <Form
          onSubmit={this.handleCreateCompany}
          inputs={companyInputs}
          initialFormState={initialFormState}
          formType="company"
        />
      </div>
    )
    const chooseCompanyText = getCompanies && getCompanies.length > 0 && (
      <div>
        <h3 className="home-screen__title">- Or -</h3>
        <h3 className="home-screen__title">Choose from your existing companies:</h3>
      </div>
    )
    return (
      <div className="home-screen">
        <div className="headline">Start tracking your VCs today!</div>
        <button
          className="home-screen__title create-link"
          onClick={() => this.toggleForm()}
        >
          Create a new company
        </button>
        {form}
        {chooseCompanyText}
        <CompanyList
          companies={getCompanies}
        />
      </div>
    )
  }
}

export default compose(
    graphql(createCompany, { name: 'createCompany' }),
    graphql(fetchAllCompanies, { name: 'allCompanies' })
)(HomeScreen);
