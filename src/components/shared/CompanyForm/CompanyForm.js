// @flow

import React, { Component } from 'react';
import Input from '../../shared/Input/Input';
import Button from '../../shared/Button/Button';
import { Props, State } from '../../../flow/shared/company-form-types';

import companyInputs from './company-inputs';

class CompanyForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      form: {
        name: null,
        description: null,
        budget: null,
        raised: null,
        timeline: null,
      },
      error: '',
    };

    this.handleCreateCompany = this.handleCreateCompany.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
  }
  componentDidMount() {
    const { defaultValues } = this.props
      defaultValues && this.setState({
        form: {
          ...defaultValues
        }
      });
      console.log(this.state);
  }
  handleCreateCompany: (event: any) => void;
  handleCreateCompany(event: any) {
    event.preventDefault();
    // check inputs for values
    let blankInputs = 0;
    Object.keys(this.state.form).forEach(key => {
      if (!this.state.form[key] && this.state.form[key] !== 0) {
        blankInputs ++
      }
      console.log(this.state.form[key], blankInputs);
    });
    const error = blankInputs > 0 && 'All fields are required'
    this.setState({ error });

    if (!error) {
      this.props.onSubmit(this.state.form);
    }
  }
  handleKeyPress: (e: any, field: string) => void;
  handleKeyPress(e: any, field: string) {
    let val;
    const value = e.target.value

    if (companyInputs[field].type === 'number') {
      val = parseInt(value, 10);
    } else if (companyInputs[field].type === 'date') {
      val = new Date(value)
    } else {
      val = value
    }

    this.setState({
      form: {
        ...this.state.form,
        [field]: val,
      }
    });
  }
  renderInputs: () => void;
  renderInputs() {
    const { defaultValues } = this.props;
    return Object.keys(companyInputs).map(key => (
      <Input
        key={`company ${companyInputs[key].field}`}
        handleKeyPress={this.handleKeyPress}
        placeholder={companyInputs[key].placeholder}
        field={companyInputs[key].field}
        textArea={companyInputs[key].textArea}
        type={companyInputs[key].type}
        prefix={companyInputs[key].prefix}
        defaultValue={defaultValues && defaultValues[key]}
      />
    ))
  }
  render() {
    const error = this.state.error && <div className="error">{this.state.error}</div>
    console.log(this.state);
    return (
      <div className="company-form">
        <form action="." onSubmit={(event) => this.handleCreateCompany(event)}>
          {this.renderInputs()}
          <Button onClick={(e) => this.handleCreateCompany(e)}>
            Submit
          </Button>
        </form>
        {error}
      </div>
    )
  }
}

export default CompanyForm;
