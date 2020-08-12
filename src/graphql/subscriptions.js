/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
export const onCreateGameWord = /* GraphQL */ `
  subscription OnCreateGameWord {
    onCreateGameWord {
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
export const onUpdateGameWord = /* GraphQL */ `
  subscription OnUpdateGameWord {
    onUpdateGameWord {
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
export const onDeleteGameWord = /* GraphQL */ `
  subscription OnDeleteGameWord {
    onDeleteGameWord {
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
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
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
export const onCreateTurn = /* GraphQL */ `
  subscription OnCreateTurn {
    onCreateTurn {
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
export const onUpdateTurn = /* GraphQL */ `
  subscription OnUpdateTurn {
    onUpdateTurn {
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
export const onDeleteTurn = /* GraphQL */ `
  subscription OnDeleteTurn {
    onDeleteTurn {
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
