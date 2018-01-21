import gql from 'graphql-tag';

export const fetchVentureCapitalist = gql`
  query getVentureCapitalist($id: ID) {
    getVentureCapitalist(id: $id) {
      name,
      slug,
      affiliation,
      website,
      contact,
      check_size,
      investments_per_year,
      status,
      location,
      potential,
      interests,
      updated_at,
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
