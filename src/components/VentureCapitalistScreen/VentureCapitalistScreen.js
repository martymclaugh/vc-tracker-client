import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import { fetchVentureCapitalist } from './venture-capitalis-screen-queries';
import { updateVentureCapitalist, destroyVentureCapitalist } from './venture-capitalist-screen-mutations';
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
  handleUpdateVC(args) {
    console.log(this.props.data.getVentureCapitalist.slug);
    this.props.updateVentureCapitalist({ variables: {
        id: this.props.data.getVentureCapitalist.slug,
        ...args,
      }
    }).then((data) => {
        const updatedAt = data.data.updateVentureCapitalist.updated_at
        if (updatedAt !== this.props.data.getVentureCapitalist.updated_at) {
          this.toggleEdit();
          this.props.data.refetch();
        }
      });
  }
  handleDeleteVC: () => void;
  handleDeleteVC(slug) {
    this.props.destroyVentureCapitalist({ variables: { id: slug }})
      .then((data) => {
        data.data.destroyVentureCapitalist.slug && this.props.history.push(`/`);
      });
  }
  toggleEdit: () => void;
  toggleEdit() {
    const display = this.state.display === 'show' ? 'edit' : 'show';
    this.setState({ display });
  }
  render() {
    if (this.props.data.loading) {
      return <div>loading...</div>
    }
    const ventureCapitalist = this.props.data.getVentureCapitalist;
    if (this.state.display === 'edit') {
      const { slug } = this.props.data.getVentureCapitalist;

      return (
        <div className="vc-screen__form">
          <Form
            onSubmit={this.handleUpdateVC}
            inputs={vcInputs}
            initialFormState={initialFormState}
            formType="venture-capitalist"
            defaultValues={this.props.data.getVentureCapitalist}
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
graphql(updateVentureCapitalist, { name: 'updateVentureCapitalist' }),
graphql(destroyVentureCapitalist, { name: 'destroyVentureCapitalist' }),
graphql(fetchVentureCapitalist, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.match.params.slug
    }
  }),
}))(withRouter(VentureCapitalistScreen))
