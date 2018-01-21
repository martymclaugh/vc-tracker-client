import gql from 'graphql-tag';

export const updateVentureCapitalist = gql`
  mutation updateVentureCapitalist(
    $id: ID,
    $name: String!,
    $affiliation: String!,
    $website: String!,
    $contact: String!,
    $check_size: Int!,
    $investments_per_year: Int!,
    $status: String!,
    $location: String!,
    $potential: String!,
    $interests: String!,
  ) {
    updateVentureCapitalist(
      id: $id,
      name: $name,
      affiliation: $affiliation,
      website: $website,
      contact: $contact,
      check_size: $check_size,
      investments_per_year: $investments_per_year,
      status: $status,
      location: $location,
      potential: $potential,
      interests: $interests,
    ) {
      slug,
      updated_at,
    }
  }
`;

export const destroyVentureCapitalist = gql`
  mutation destroyVentureCapitalist($id: ID) {
    destroyVentureCapitalist(
      id: $id,
    ) {
      slug,
      updated_at,
    }
  }
`;
