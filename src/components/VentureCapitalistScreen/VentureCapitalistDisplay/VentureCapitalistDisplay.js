import React from 'react';
import Button from '../../shared/Button/Button';

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
      <div className="vc-display__name">{name}</div>
      <div className="vc-display__affiliation">{affiliation}</div>
      <div className="vc-display__website">{website}</div>
      <div className="vc-display__contact">{contact}</div>
      <div className="vc-display__check_size">{check_size}</div>
      <div className="vc-display__investments_per_year">{investments_per_year}</div>
      <div className="vc-display__status">{status}</div>
      <div className="vc-display__location">{location}</div>
      <div className="vc-display__potential">{potential}</div>
      <div className="vc-display__interests">{interests}</div>
      <div className="vc-display__notes">{notes.length}</div>
      <div className="vc-display__notableInvestments">{notableInvestments.length}</div>
      <Button onClick={() => props.onEditClick()}>edit</Button>
    </div>
  )
}
