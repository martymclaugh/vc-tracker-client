// @flow

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import { fetchCompany } from './company-screen-queries';
import { updateCompany, destroyCompany } from './company-screen-mutations';
import CompanyDisplay from './CompanyDisplay/CompanyDisplay';
import VentureCapitalistList from '../VentureCapitalist/VentureCapatalistList';
import Button from '../shared/Button/Button';
import CompanyForm from '../shared/CompanyForm/CompanyForm';
import { Props, State } from '../../flow/components/company-screen-types'

class CompanyScreen extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      display: 'show',
    }

    this.handleUpdateCompany = this.handleUpdateCompany.bind(this);
    this.handleDeleteCompany = this.handleDeleteCompany.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    // handle company not found
    console.log('NEXT', nextProps.data.error);
  }
  handleUpdateCompany: () => void;
  handleUpdateCompany(args) {
    this.props.updateCompany({ variables: {
        id: this.props.data.getCompany.slug,
        ...args,
      }
    }).then((data) => {
        const updatedAt = data.data.updateCompany.updatedAt
        if (updatedAt !== this.props.data.getCompany.updated_at) {
          this.handleEditClick();
          this.props.data.refetch();
        }
      });
  }
  handleDeleteCompany: (slug: string) => void;
   handleDeleteCompany(slug) {
    this.props.destroyCompany({ variables: { id: slug }
    }).then((data) => {
        data.data.destroyCompany.slug && this.props.history.push(`/`);
      });
  }
  handleEditClick: () => void;
  handleEditClick() {
    const display = this.state.display === 'show' ? 'edit' : 'show';
    this.setState({ display });
  }
  render() {
    if (this.props.data.loading) {
      return <div className="loading">Loading....</div>
    }
    const {
      slug,
      budget,
      raised,
      description,
      name,
      timeline,
      ventureCapitalists,
      updated_at,
    } = this.props.data.getCompany;

    if (this.state.display === 'edit') {
      return (
        <div className="company-screen__form">
          <CompanyForm
            onSubmit={this.handleUpdateCompany}
            defaultValues={{ budget, raised, description, name, timeline }}
          />
          <Button onClick={() => this.handleDeleteCompany(slug)}>Delete</Button>
          <Button onClick={() => this.handleEditClick()}>Cancel</Button>
        </div>
      )
    }

    return (
      <div className="company-screen">
        <CompanyDisplay
          name={name}
          budget={budget}
          raised={raised}
          description={description}
          timeline={timeline}
          slug={slug}
          onEditClick={this.handleEditClick}
        />
        <VentureCapitalistList
          investors={ventureCapitalists}
        />
      </div>
    )
  }
}

export default compose(
graphql(updateCompany, { name: 'updateCompany' }),
graphql(destroyCompany, { name: 'destroyCompany' }),
graphql(fetchCompany, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.match.params.slug
    }
  }),
}))(withRouter(CompanyScreen))
