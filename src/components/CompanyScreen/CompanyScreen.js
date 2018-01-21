// @flow

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import { RingLoader } from 'react-spinners';
import { fetchCompany } from './company-screen-queries';
import { updateCompany, destroyCompany, createVentureCapitalist } from './company-screen-mutations';
import { initialFormState, companyInputs } from '../../helpers/company-inputs';
import { initialFormState as vcInitialFormState, vcInputs } from '../../helpers/vc-inputs';
import parseQueryParams from '../../helpers/parse-query-params';
import CompanyDisplay from './CompanyDisplay/CompanyDisplay';
import VentureCapitalistList from '../VentureCapitalistList/VentureCapatalistList';
import Button from '../shared/Button/Button';
import Form from '../shared/Form/Form';
import { Props, State } from '../../flow/components/company-screen-types'

import './company-screen-styles.css';

class CompanyScreen extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      display: 'show',
      ascending: true,
      order: 'id',
    }

    this.handleUpdateCompany = this.handleUpdateCompany.bind(this);
    this.handleDeleteCompany = this.handleDeleteCompany.bind(this);
    this.toggleVCForm = this.toggleVCForm.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.refetchByOrder = this.refetchByOrder.bind(this);
    this.handleCreateVC = this.handleCreateVC.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    // handle company not found
    console.log(this.props);
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
          this.toggleEdit();
          this.props.data.refetch();
        }
      });
  }
  handleCreateVC: () => void;
  handleCreateVC(args) {
    this.props.createVentureCapitalist({ variables: {
      companyId: this.props.data.getCompany.slug,
      ...args,
    } })
      .then((data) => {
        this.setState({ display: 'show' });
        this.props.data.refetch();
      });
  }
  handleDeleteCompany: (slug: string) => void;
  handleDeleteCompany(slug) {
  this.props.destroyCompany({ variables: { id: slug }})
    .then((data) => {
      data.data.destroyCompany.slug && this.props.history.push(`/`);
    });
  }
  toggleEdit: () => void;
  toggleEdit() {
    const display = this.state.display === 'show' ? 'edit' : 'show';
    this.setState({ display });
  }
  toggleVCForm: () => void;
  toggleVCForm() {
    const display = this.state.display === 'show' ? 'new' : 'show';
    this.setState({ display });
  }
  refetchByOrder: () => void;
  refetchByOrder(order){
    const ascending = this.state.order === order
      && this.state.ascending === 'ASC' ? 'DESC' : 'ASC';
    this.setState({
      order,
      ascending,
    })
    this.props.history.push({ search: `order=${order}&ascending=${ascending}` });
    this.props.data.refetch();
  }
  render() {
    if (this.props.data.loading) {
      return (
        <div className="loading">
          <RingLoader color={'#004a6d'} />
        </div>
      )
    }
    const {
      slug,
      budget,
      raised,
      description,
      name,
      timeline,
      ventureCapitalists,
    } = this.props.data.getCompany;

    if (this.state.display === 'edit') {
      return (
        <div className="company-screen__form">
          <Form
            onSubmit={this.handleUpdateCompany}
            inputs={companyInputs}
            initialFormState={initialFormState}
            formType="company"
            defaultValues={{ budget, raised, description, name, timeline }}
          />
          <Button class="company-screen__form-delete" onClick={() => this.handleDeleteCompany(slug)}>Delete</Button>
          <Button class="company-screen__form-cancel" onClick={() => this.toggleEdit()}>Cancel</Button>
        </div>
      )
    } else if (this.state.display === 'new') {
      return (
        <div className="company-screen__form-vc">
          <Form
            onSubmit={this.handleCreateVC}
            inputs={vcInputs}
            initialFormState={vcInitialFormState}
            formType="venture-capitalist"
          />
          <Button class="company-screen__form-cancel" onClick={() => this.toggleEdit()}>Cancel</Button>
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
          onEditClick={this.toggleEdit}
        />
        <VentureCapitalistList
          handleAddClick={this.toggleVCForm}
          investors={ventureCapitalists}
          refetchByOrder={this.refetchByOrder}
        />
      </div>
    )
  }
  }

export default compose(
  graphql(updateCompany, { name: 'updateCompany' }),
  graphql(destroyCompany, { name: 'destroyCompany' }),
  graphql(createVentureCapitalist, { name: 'createVentureCapitalist' }),
  graphql(fetchCompany, {
    options: (ownProps) => ({
      variables: {
        id: ownProps.match.params.slug,
        order_by: parseQueryParams(ownProps.location.search).order,
        ascending: parseQueryParams(ownProps.location.search).ascending,
      }
    }),
  }),
)(withRouter(CompanyScreen))
