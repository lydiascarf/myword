const Dynamo = require('../common/Dynamo');
const Responses = require('../common/API_Responses');
const WebSocket = require('../common/WebSocket');

const tableName = process.env.tableName;

exports.handler = async event => {
    console.log('event', event);

    const { connectionId } = event.requestContext;

    const { message } = JSON.parse(event.body);

    try {
        const record = await Dynamo.get(connectionId, tableName);
        const { domainName, messages, stage } = record;

        messages.push(message);

        const data = {
            ...record,
            messages
        };

        await Dynamo.write(data, tableName);

        await WebSocket.sendMessage({
            connectionId,
            domainName,
            message,
            stage,
        });

        return Responses._200({ message: 'got a message' });
    } catch (error) {
        return Responses._400({ message: 'message could not be received' });
    }
};
