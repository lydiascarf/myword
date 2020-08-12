/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
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
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getGameWord = /* GraphQL */ `
  query GetGameWord($id: ID!) {
    getGameWord(id: $id) {
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
export const listGameWords = /* GraphQL */ `
  query ListGameWords(
    $filter: ModelGameWordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGameWords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
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
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        turns {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTurn = /* GraphQL */ `
  query GetTurn($id: ID!) {
    getTurn(id: $id) {
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
export const listTurns = /* GraphQL */ `
  query ListTurns(
    $filter: ModelTurnFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTurns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        score
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
