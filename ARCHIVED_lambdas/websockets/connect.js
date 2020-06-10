const Dynamo = require('../common/Dynamo');
const Responses = require('../common/API_Responses');

const tableName = process.env.tableName;

exports.handler = async event => {
    console.log('event', event);

    const { connectionId, domainName, stage } = event.requestContext;
    const data = {
        date: Date.now(),
        domainName,
        ID: connectionId,
        messages: [],
        stage,
    };

    await Dynamo.write(data, tableName);


    return Responses._200({ message: 'connected' });
};
