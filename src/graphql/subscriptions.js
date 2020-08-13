/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
      id
      keyword
      players {
        items {
          game {
            id
            keyword
            players {
              nextToken
            }
            createdAt
            updatedAt
          }
          gameWord
          id
          player {
            games {
              nextToken
            }
            id
            name
            createdAt
            updatedAt
          }
          turns {
            items {
              id
              score
              word
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
      id
      keyword
      players {
        items {
          game {
            id
            keyword
            players {
              nextToken
            }
            createdAt
            updatedAt
          }
          gameWord
          id
          player {
            games {
              nextToken
            }
            id
            name
            createdAt
            updatedAt
          }
          turns {
            items {
              id
              score
              word
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
      id
      keyword
      players {
        items {
          game {
            id
            keyword
            players {
              nextToken
            }
            createdAt
            updatedAt
          }
          gameWord
          id
          player {
            games {
              nextToken
            }
            id
            name
            createdAt
            updatedAt
          }
          turns {
            items {
              id
              score
              word
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTurn = /* GraphQL */ `
  subscription OnCreateTurn {
    onCreateTurn {
      id
      score
      word
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTurn = /* GraphQL */ `
  subscription OnUpdateTurn {
    onUpdateTurn {
      id
      score
      word
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTurn = /* GraphQL */ `
  subscription OnDeleteTurn {
    onDeleteTurn {
      id
      score
      word
      createdAt
      updatedAt
    }
  }
`;
