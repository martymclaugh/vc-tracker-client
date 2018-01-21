// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { Props } from '../../../flow/shared/company-list-types';

const renderCompanies = (companies) => {
  if (companies) {
    return companies.map(company => (
      <Link to={`/companies/${company.slug}`}>
        <div key={company.slug} className="company/">
          <span>{company.name}  </span>
          <span>{company.raised}  </span>
          <span>{company.timeline}</span>
        </div>
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
