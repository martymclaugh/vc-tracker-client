import gql from 'graphql-tag';

export const fetchVentureCapitalist = gql`
  query getVentureCapitalist($id: ID) {
    getVentureCapitalist(id: $id) {
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
      notes {
       description,
      },
      notableInvestments {
       company,
       amount,
      },
    }
  }
`;
