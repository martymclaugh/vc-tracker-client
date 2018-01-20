import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { fetchVentureCapitalist } from './venture-capitalist-queries';
import { graphql, compose } from 'react-apollo';
import { vcInputs, initialFormState } from '../../helpers/vc-inputs';
import VentureCapatalistDisplay from './VentureCapitalistDisplay/VentureCapitalistDisplay';
import Form from '../shared/Form/Form';
import Button from '../shared/Button/Button';


class VentureCapitalistScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: 'show',
    }

    this.handleUpdateVC = this.handleUpdateVC.bind(this);
    this.handleDeleteVC = this.handleDeleteVC.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  handleUpdateVC: () => void;
  handleUpdateVC() {

  }
  handleDeleteVC: () => void;
  handleDeleteVC() {

  }
  toggleEdit: () => void;
  toggleEdit() {
    const display = this.state.display === 'show' ? 'edit' : 'show';
    this.setState({ display });
  }
  render() {
    console.log(this.state);
    if (this.props.data.loading) {
      return <div>loading...</div>
    }
    const ventureCapitalist = this.props.data.getVentureCapitalist;
    if (this.state.display === 'edit') {
      const {
        name,
        affiliation,
        website,
        contact,
        check_size,
        investments_per_year,
        status,
        location,
        potential,
        slug,
        interests,
      } = this.props.data.getVentureCapitalist;
      const defaultValues = {
        name,
        affiliation,
        website,
        contact,
        check_size,
        investments_per_year,
        status,
        location,
        potential,
        slug,
        interests,
      }
      return (
        <div className="vc-screen__form">
          <Form
            onSubmit={this.handleUpdateVC}
            inputs={vcInputs}
            initialFormState={initialFormState}
            formType="venture-capitalist"
            defaultValues={defaultValues}
          />
          <Button onClick={() => this.handleDeleteVC(slug)}>Delete</Button>
          <Button onClick={() => this.toggleEdit()}>Cancel</Button>
        </div>
      )
    }
    return (
      <div className="vc-screen">
        <VentureCapatalistDisplay
          onEditClick={this.toggleEdit}
          ventureCapitalist={ventureCapitalist}
        />
      </div>
    )
  }
}

export default compose(
// graphql(updateCompany, { name: 'updateCompany' }),
// graphql(destroyCompany, { name: 'destroyCompany' }),
graphql(fetchVentureCapitalist, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.match.params.slug
    }
  }),
}))(withRouter(VentureCapitalistScreen))
