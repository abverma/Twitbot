var fs = require('fs');
var mailer = require('./mailer');

var filename = 'log.txt';	

var log = (tweet, retweetData, retweetErr) => {
	var msg = '';

	if (tweet) {
		msg += new Date() + '\n';
		msg += 'Tweet Fetched\n';
		msg += `id: ${tweet.id} \nuser: ${tweet.user.name} @${tweet.user.screen_name} \ntweet: ${tweet.text}\n`
	}

	if (retweetErr) {
		msg += retweetErr + '\n';
	}
	else if (retweetData) {
		msg +=`Retweet id: ${retweetData.id_str} \n\n`;
	}

	console.log(msg);

	fs.appendFile(filename, msg, (err) => {
		if (err) {
			console.log('Error in logging.');
			console.log(err);
		}
		mailer.send(msg);
	});
}

module.exports = {
	log: log
};

console.log('logger loaded...');