const Dynamo = require('../common/Dynamo');
const Responses = require('../common/API_Responses');
const WebSocket = require('../common/WebSocket');

const tableName = process.env.tableName;

function isValid() {
  return true;
}

exports.handler = async event => {
  console.log('event', event);

  const { connectionId } = event.requestContext;

  const body = JSON.parse(event.body);

  try {
    const record = await Dynamo.get(connectionId, tableName);
    const { domainName, game, stage } = record;
    const { p1, p2 } = game;
    let key = body.playerId === p1.id ? 'p1' : 'p2';
    if (body.playerId === p1.id) {
      key = 'p1';
    } else if (body.playerId === p2.id) {
      key = 'p2';
    } else {
      throw new Error('there is no player with that id');
    }

    const data = {
      ...record,
      game: {
        ...game,
        [key]: {
          ...game[key],
          guesses: [
            ...game[key].guesses,
            body.guess
          ]
        }
      }
    }

    if (isValid(body)) {
      await Dynamo.write(data, tableName);

      await WebSocket.emitBoard({
        board: data,
        connectionId,
        domainName,
        stage,
      });
      return Responses._200({ message: 'player set up' });
    }

    return Responses._400({ message: 'player could not be set up' })
  } catch (error) {
    return Responses._400({ message: 'player could not be set up' })
  }
}
