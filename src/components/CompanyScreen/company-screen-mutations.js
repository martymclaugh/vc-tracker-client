import gql from 'graphql-tag';

export const updateCompany = gql`
  mutation updateCompany($id: ID, $budget: Int!,  $description: String!, $name: String!, $raised: Int!, $timeline: Date! ) {
    updateCompany(
      id: $id,
      budget: $budget,
      description: $description,
      name: $name,
      raised: $raised,
      timeline: $timeline,
    ) {
      slug,
      updated_at,
    }
  }
`;

export const destroyCompany = gql`
  mutation destroyCompany($id: ID) {
    destroyCompany(
      id: $id,
    ) {
      slug,
      updated_at,
    }
  }
`;

export const createVentureCapitalist = gql`
  mutation createVentureCapitalist(
    $companyId: ID!,
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
    createVentureCapitalist(
      companyId: $companyId
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
