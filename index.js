const dgram = require('node:dgram');
const server = dgram.createSocket('udp4');

const { Sled } = require('./Sled')

// data 
let buffer
let formattedData;
let intervalId;

function printResult()
{
  formattedData = new Sled(buffer);
  console.log(formattedData.toString());
}

function onError(err) 
{
  console.error(`server error:\n${err.stack}`);
  clearInterval(intervalId);
  server.close();
}

function onConnect()
{
  const { address, port } = server.address();
  console.log(`server listening ${address}:${port}`);
  intervalId = setInterval(printResult, 100);
}

function onMessage(msg, rinfo)
{
  buffer = msg;
}

// events
server.on('error', onError);
server.on('message', onMessage);
server.on('listening', onConnect);

// socket bind
server.bind(4321);