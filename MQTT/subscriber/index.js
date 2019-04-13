var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://<mqtt server ip>')
client.on('connect', function () {
    client.subscribe('#');
});
client.on('message', function (topic, message) {
	context = message.toString();
	console.log(context)
});
