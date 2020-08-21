/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTurn = /* GraphQL */ `
  query GetTurn($id: ID!) {
    getTurn(id: $id) {
      id
      score
      word
      createdAt
      updatedAt
    }
  }
`;
export const listTurns = /* GraphQL */ `
  query ListTurns(
    $filter: ModelTurnFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTurns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        score
        word
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
