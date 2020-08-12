/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      gameWords {
        game {
          id
          name
          createdAt
          updatedAt
        }
        gameID
        id
        playerID
        player {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      id
      name
      players {
        id
        title
        turns {
          nextToken
        }
        createdAt
        updatedAt
      }
      turns {
        items {
          gameID
          id
          playerID
          score
          content
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
      gameWords {
        game {
          id
          name
          createdAt
          updatedAt
        }
        gameID
        id
        playerID
        player {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      id
      name
      players {
        id
        title
        turns {
          nextToken
        }
        createdAt
        updatedAt
      }
      turns {
        items {
          gameID
          id
          playerID
          score
          content
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
      gameWords {
        game {
          id
          name
          createdAt
          updatedAt
        }
        gameID
        id
        playerID
        player {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      id
      name
      players {
        id
        title
        turns {
          nextToken
        }
        createdAt
        updatedAt
      }
      turns {
        items {
          gameID
          id
          playerID
          score
          content
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
export const createGameWord = /* GraphQL */ `
  mutation CreateGameWord(
    $input: CreateGameWordInput!
    $condition: ModelGameWordConditionInput
  ) {
    createGameWord(input: $input, condition: $condition) {
      game {
        gameWords {
          gameID
          id
          playerID
          createdAt
          updatedAt
        }
        id
        name
        players {
          id
          title
          createdAt
          updatedAt
        }
        turns {
          nextToken
        }
        createdAt
        updatedAt
      }
      gameID
      id
      playerID
      player {
        id
        title
        turns {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateGameWord = /* GraphQL */ `
  mutation UpdateGameWord(
    $input: UpdateGameWordInput!
    $condition: ModelGameWordConditionInput
  ) {
    updateGameWord(input: $input, condition: $condition) {
      game {
        gameWords {
          gameID
          id
          playerID
          createdAt
          updatedAt
        }
        id
        name
        players {
          id
          title
          createdAt
          updatedAt
        }
        turns {
          nextToken
        }
        createdAt
        updatedAt
      }
      gameID
      id
      playerID
      player {
        id
        title
        turns {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteGameWord = /* GraphQL */ `
  mutation DeleteGameWord(
    $input: DeleteGameWordInput!
    $condition: ModelGameWordConditionInput
  ) {
    deleteGameWord(input: $input, condition: $condition) {
      game {
        gameWords {
          gameID
          id
          playerID
          createdAt
          updatedAt
        }
        id
        name
        players {
          id
          title
          createdAt
          updatedAt
        }
        turns {
          nextToken
        }
        createdAt
        updatedAt
      }
      gameID
      id
      playerID
      player {
        id
        title
        turns {
          nextToken
        }
        createdAt
        updatedAt
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
      id
      title
      turns {
        items {
          gameID
          id
          playerID
          score
          content
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
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      title
      turns {
        items {
          gameID
          id
          playerID
          score
          content
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
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      title
      turns {
        items {
          gameID
          id
          playerID
          score
          content
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
export const createTurn = /* GraphQL */ `
  mutation CreateTurn(
    $input: CreateTurnInput!
    $condition: ModelTurnConditionInput
  ) {
    createTurn(input: $input, condition: $condition) {
      game {
        gameWords {
          gameID
          id
          playerID
          createdAt
          updatedAt
        }
        id
        name
        players {
          id
          title
          createdAt
          updatedAt
        }
        turns {
          nextToken
        }
        createdAt
        updatedAt
      }
      gameID
      id
      playerID
      player {
        id
        title
        turns {
          nextToken
        }
        createdAt
        updatedAt
      }
      score
      content
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
      game {
        gameWords {
          gameID
          id
          playerID
          createdAt
          updatedAt
        }
        id
        name
        players {
          id
          title
          createdAt
          updatedAt
        }
        turns {
          nextToken
        }
        createdAt
        updatedAt
      }
      gameID
      id
      playerID
      player {
        id
        title
        turns {
          nextToken
        }
        createdAt
        updatedAt
      }
      score
      content
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
      game {
        gameWords {
          gameID
          id
          playerID
          createdAt
          updatedAt
        }
        id
        name
        players {
          id
          title
          createdAt
          updatedAt
        }
        turns {
          nextToken
        }
        createdAt
        updatedAt
      }
      gameID
      id
      playerID
      player {
        id
        title
        turns {
          nextToken
        }
        createdAt
        updatedAt
      }
      score
      content
      createdAt
      updatedAt
    }
  }
`;
