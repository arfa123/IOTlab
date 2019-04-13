var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://<mqtt-server-ip>');
client.on('connect', function () {
	setInterval(function() {
	client.publish('onoff', 'Turn on the light');
	console.log('Message Sent');
	}, 5000);
});
