import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './venture-capitalist-styles.css';

class VentureCapitalistList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderVentureCapitalists() {
    if (this.props.investors) {
      return this.props.investors.map(investor => (
        <Link to={`/venture-capitalists/${investor.slug}`}>
          <div key={investor.slug} className="vc__item">
            <div className="item vc__name">{investor.name}</div>
            <div className="item vc__contact">{investor.contact}</div>
            <div className="item vc__location">{investor.location}</div>
            <div className="item vc__name"></div>
            <div className="item vc__potential">{investor.potential}</div>
            <div className="item vc__status">{investor.status}</div>
            <div className="item vc__typical-check">{investor.check_size}</div>
          </div>
        </Link>
      ))
    }
    return null;
  }
  render() {
    return (
      <div className="vc__list">
        <div className="vc__item vc_item-descriptors">
          <div className="item vc__name">name</div>
          <div className="item vc__contact">contact</div>
          <div className="item vc__location">location</div>
          <div className="item vc__name"></div>
          <div className="item vc__potential">potential</div>
          <div className="item vc__status">status</div>
          <div className="item vc__typical-check">check_size</div>
        </div>
        {this.renderVentureCapitalists()}
      </div>
    )
  }
}

export default VentureCapitalistList;
