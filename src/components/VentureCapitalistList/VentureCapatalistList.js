// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import toCurrency from '../../helpers/to-currency';
import { Props, State } from '../../flow/components/vc-list-types';

import './venture-capitalist-styles.css';

class VentureCapitalistList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.renderVentureCapitalists = this.renderVentureCapitalists.bind(this);
    this.renderDescriptors = this.renderDescriptors.bind(this);
  }
  renderVentureCapitalists: () => void;
  renderVentureCapitalists() {
    if (this.props.investors) {
      return this.props.investors.map(investor => (
        <div key={investor.slug} className="vc__list-item">
          <Link to={`/venture-capitalists/${investor.slug}`}>
            <span className="item vc__name">{investor.name}</span>
            <span className="item vc__contact">{investor.contact}</span>
            <span className="item vc__location">{investor.location}</span>
            <span className="item vc__potential">{investor.potential}</span>
            <span className="item vc__status">{investor.status}</span>
            <span className="item vc__typical-check">{toCurrency(investor.check_size)}</span>
          </Link>
        </div>
      ))
    }
  }
  handleSort: (sortBy: string) => void;
  handleSort(sortBy: string) {
    this.props.refetchByOrder(sortBy)
  }
  renderDescriptors: () => void;
  renderDescriptors() {
    const descriptors = ['name', 'contact', 'location', 'potential', 'status', 'check size'];
    return descriptors.map(desc => (
      <button
        onClick={() => this.handleSort(desc.split(' ').join('_'))}
        className={`item vc__${desc.split(' ').join('-')}`}
      >
        {desc}
      </button>
    ))
  }
  render() {
    return (
      <div className="vc__list">
        <div className="vc__list-title">List of VCs:</div>
        <div className="vc__item vc__item-descriptors">
          {this.renderDescriptors()}
        </div>
        <div className="vc__list-container">
          {this.renderVentureCapitalists()}
        </div>
      </div>
    )
  }
}

export default VentureCapitalistList;
