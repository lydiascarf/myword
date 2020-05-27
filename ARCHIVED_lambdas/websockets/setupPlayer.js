const Dynamo = require('../common/Dynamo');
const Responses = require('../common/API_Responses');
const WebSocket = require('../common/WebSocketMessage');

const tableName = process.env.tableName;

exports.handler = async event => {
    console.log('event', event);

    const { connectionId } = event.requestContext;

    const body = JSON.parse(event.body);

    try {
        const record = await Dynamo.get(connectionId, tableName);
        const { domainName, game, stage } = record;
        let data;
        if (game.p1) {
            data = {
                ...record,
                game: {
                    ...game,
                    p2: body.p2,
                }
            };
        } else {
            data = {
                ...record,
                game: {
                    ...game,
                    p1: body.p1,
                }
            };
        }

        await Dynamo.write(data, tableName);
        await WebSocket.emitBoard({
            board: data,
            connectionId,
            domainName,
            stage,
        });

        return Responses._200({ message: 'player set up' });
    } catch (error) {
        return Responses._400({ message: 'player could not be set up' });
    }
};
