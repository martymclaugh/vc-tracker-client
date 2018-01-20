// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const renderCompanies = (companies) => {
  if (!companies) {
    return null;
  }
  return companies.map(company => (
    <Link to={`/company/${company.slug}`}>
      <div key={company.slug} className="company">
        <span>{company.name}  </span>
        <span>{company.raised}  </span>
        <span>{company.timeline}</span>
      </div>
    </Link>
  ))
}

export default (props) => {
  return (
    <div className="company-list">
      {renderCompanies(props.companies)}
    </div>
  )
}
