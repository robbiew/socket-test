var io = require('socket.io-client');
const { exit } = require('yargs');

function pauseThenExit() {
  exit(0)
}

// read socket handle from Mystic door menu - e.g. %H
const argv = require("yargs/yargs")(process.argv.slice(1))
  .option("socket", {
    alias: "s",
    describe: "The socket handle to connect to"
  })
  .demandOption(["socket"], "Please pass the socket handle")
  .help().argv;

  // connec to to the socket
  var socket = io.connect('http://localhost:'+argv.socket, {reconnect: true});
  var msg2 = "hello to "+argv.socket;
  
  //write a message
  socket.emit(console.log(msg2));


setTimeout(pauseThenExit, 3000);