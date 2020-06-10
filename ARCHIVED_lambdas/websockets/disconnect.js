const Dynamo = require('../common/Dynamo');
const Responses = require('../common/API_Responses');

const tableName = process.env.tableName;

exports.handler = async event => {
    console.log('event', event);

    const { connectionId } = event.requestContext;

    await Dynamo.delete(connectionId, tableName);

    return Responses._200({ message: 'disconnected' });
};
