// @flow

import React from 'react';
import toCurrency from '../../../helpers/to-currency';
import formatDate from '../../../helpers/format-date';
import { Link } from 'react-router-dom';
import { Props } from '../../../flow/shared/company-list-types';

import './company-list-styles.css';

const renderCompanies = (companies) => {
  if (companies) {
    return companies.map(company => (
      <Link
        key={company.slug}
        className="company-list__item"
        to={`/companies/${company.slug}`}
      >
          <span className="company__title">{company.name}</span>
          <span className="company__raised">{toCurrency(company.raised)}  </span>
          <span className="company__timeline">Days Left: {formatDate(company.timeline).days}</span>
        </Link>
    ));
  }
  return null;
}

export default (props: Props) => {
  return (
    <div className="company-list">
      {renderCompanies(props.companies)}
    </div>
  )
}
