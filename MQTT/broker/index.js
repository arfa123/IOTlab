var mosca = require('mosca');
var settings = {
	port:1883,
  interfaces: [
    { type: "mqtt", port: 1883 },
    { type: "http", port: 3000, bundle: true, static: './' }
  ],
}

var server = new mosca.Server(settings);

server.on('ready', function(){
	console.log("ready");
});
server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});

// fired when a message is received
server.on('published', function(packet, client) {
  console.log('Published', packet.payload);
});
