const aws = require('aws-sdk');

const send = ({
    connectionId: ConnectionId,
    domainName,
    message: Data,
    stage,
}) => {
    const ws = new aws.ApiGatewayManagementApi({
        apiVersion: '2018-11-29',
        endpoint: `${domainName}/${stage}`,
    });

    return ws.postToConnection({
        ConnectionId,
        Data,
    }).promise();
}

module.exports = {
    send,
}