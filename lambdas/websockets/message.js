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
        const { domainName, messages, stage } = record;

        messages.push(body.message);

        const data = {
            ...record,
            messages
        };

        await Dynamo.write(data, tableName);

        await WebSocket.send({
            connectionId,
            domainName,
            message: "This is a reply to your message",
            stage,
        })

        return Responses._200({ message: 'got a message' });
    } catch (error) {
        return Responses._400({ message: 'message could not be received' })
    }
}