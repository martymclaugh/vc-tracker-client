// @flow

import React, { Component } from 'react';
import Input from '../../shared/Input/Input';
import Button from '../../shared/Button/Button';
import { Props, State } from '../../../flow/shared/company-form-types';

import './form-styles.css';

class Form extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      form: props.initialFormState,
      error: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
  }
  handleSubmit: (event: any) => void;
  handleSubmit(event: any) {
    event.preventDefault();
    // check inputs for values
    let blankInputs = 0;
    Object.keys(this.state.form).forEach(key => {
      if (!this.state.form[key] && this.state.form[key] !== 0) {
        blankInputs ++
      }
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

    if (this.props.inputs[field].type === 'number') {
      val = parseInt(value, 10);
    } else if (this.props.inputs[field].type === 'date') {
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
    const { defaultValues, inputs, formType } = this.props;
    return Object.keys(inputs).map(key => (
      <Input
        key={`${formType} ${inputs[key].field}`}
        handleKeyPress={this.handleKeyPress}
        defaultValue={defaultValues && defaultValues[key]}
        {...inputs[key]}
      />
    ));
  }
  render() {
    const error = this.state.error && <div className="error">{this.state.error}</div>
    return (
      <div className={`${this.props.formType}-form`}>
        <form action="." onSubmit={(event) => this.handleSubmit(event)}>
          {this.renderInputs()}
          <Button onClick={(e) => this.handleSubmit(e)}>
            Submit
          </Button>
        </form>
        {error}
      </div>
    )
  }
}

export default Form;
