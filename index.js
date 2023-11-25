const dgram = require('node:dgram');
const server = dgram.createSocket('udp4');

const { Sled } = require('./Sled')

// data 
let formattedData;
let intervalId;

function printResult()
{
  console.log(`${formattedData.toString()}`);
}

function onError(err) 
{
  console.error(`server error:\n${err.stack}`);
  clearInterval(intervalId);
  server.close();
}

function onMessage(msg, rinfo)
{
  formattedData = new Sled(msg);
}

function onConnect()
{
  const { address, port } = server.address();
  console.log(`server listening ${address}:${port}`);
  intervalId = setInterval(printResult, 1000);
}

// events
server.on('error', onError);
server.on('message', onMessage);
server.on('listening', onConnect);

// socket bind
server.bind(4321);