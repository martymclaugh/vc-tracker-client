import React from 'react';
import Button from '../../shared/Button/Button';

import './vc-display-styles.css';

export default (props) => {
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
      interests,
      notes,
      notableInvestments,
    } = props.ventureCapitalist;
  return (
    <div className="vc-display">
      <div className="item vc-display__name">{name}</div>
      <div className="item vc-display__location">Location: {location}</div>
      <div className="item vc-display__affiliation">Affiliation: {affiliation}</div>
      <div className="item vc-display__potential">{potential} Potential</div>
      <div className="item vc-display__website">Website: {website}</div>
      <div className="item vc-display__contact">Contact: {contact}</div>
      <div className="item vc-display__check_size">Typical Check Size: {check_size}</div>
      <div className="item vc-display__investments_per_year">Investments Per Year: {investments_per_year}</div>
      <div className="item vc-display__status">Current Status: {status}</div>
      <div className="item vc-display__interests">Interests: {interests}</div>
      {/* <div className="vc-display__notes">{notes.length}</div>
      <div className="vc-display__notableInvestments">{notableInvestments.length}</div> */}
      <Button class="vc-display__edit" onClick={() => props.onEditClick()}>&#x270E;</Button>
    </div>
  )
}
