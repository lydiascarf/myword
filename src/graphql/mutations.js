/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
export const createGamePlayer = /* GraphQL */ `
  mutation CreateGamePlayer(
    $input: CreateGamePlayerInput!
    $condition: ModelGamePlayerConditionInput
  ) {
    createGamePlayer(input: $input, condition: $condition) {
      game {
        id
        keyword
        players {
          items {
            game {
              id
              keyword
              createdAt
              updatedAt
            }
            gameWord
            id
            player {
              id
              name
              createdAt
              updatedAt
            }
            turns {
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
      gameWord
      id
      player {
        games {
          items {
            game {
              id
              keyword
              createdAt
              updatedAt
            }
            gameWord
            id
            player {
              id
              name
              createdAt
              updatedAt
            }
            turns {
              nextToken
            }
            createdAt
            updatedAt
          }
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
  }
`;
export const updateGamePlayer = /* GraphQL */ `
  mutation UpdateGamePlayer(
    $input: UpdateGamePlayerInput!
    $condition: ModelGamePlayerConditionInput
  ) {
    updateGamePlayer(input: $input, condition: $condition) {
      game {
        id
        keyword
        players {
          items {
            game {
              id
              keyword
              createdAt
              updatedAt
            }
            gameWord
            id
            player {
              id
              name
              createdAt
              updatedAt
            }
            turns {
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
      gameWord
      id
      player {
        games {
          items {
            game {
              id
              keyword
              createdAt
              updatedAt
            }
            gameWord
            id
            player {
              id
              name
              createdAt
              updatedAt
            }
            turns {
              nextToken
            }
            createdAt
            updatedAt
          }
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
  }
`;
export const deleteGamePlayer = /* GraphQL */ `
  mutation DeleteGamePlayer(
    $input: DeleteGamePlayerInput!
    $condition: ModelGamePlayerConditionInput
  ) {
    deleteGamePlayer(input: $input, condition: $condition) {
      game {
        id
        keyword
        players {
          items {
            game {
              id
              keyword
              createdAt
              updatedAt
            }
            gameWord
            id
            player {
              id
              name
              createdAt
              updatedAt
            }
            turns {
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
      gameWord
      id
      player {
        games {
          items {
            game {
              id
              keyword
              createdAt
              updatedAt
            }
            gameWord
            id
            player {
              id
              name
              createdAt
              updatedAt
            }
            turns {
              nextToken
            }
            createdAt
            updatedAt
          }
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
  }
`;
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      games {
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
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      games {
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
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      games {
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
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createTurn = /* GraphQL */ `
  mutation CreateTurn(
    $input: CreateTurnInput!
    $condition: ModelTurnConditionInput
  ) {
    createTurn(input: $input, condition: $condition) {
      id
      score
      word
      createdAt
      updatedAt
    }
  }
`;
export const updateTurn = /* GraphQL */ `
  mutation UpdateTurn(
    $input: UpdateTurnInput!
    $condition: ModelTurnConditionInput
  ) {
    updateTurn(input: $input, condition: $condition) {
      id
      score
      word
      createdAt
      updatedAt
    }
  }
`;
export const deleteTurn = /* GraphQL */ `
  mutation DeleteTurn(
    $input: DeleteTurnInput!
    $condition: ModelTurnConditionInput
  ) {
    deleteTurn(input: $input, condition: $condition) {
      id
      score
      word
      createdAt
      updatedAt
    }
  }
`;
