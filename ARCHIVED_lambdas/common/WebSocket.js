const aws = require('aws-sdk');

const emitBoard = ({
  board: Data,
  connectionId: ConnectionId,
  domainName,
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

const sendMessage = ({
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
  emitBoard,
  sendMessage,
}
