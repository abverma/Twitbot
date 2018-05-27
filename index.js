var Twit = require('twit');
var twitterConfig = require('./config').twitter_config;
var logger = require('./logger');

var accountsToFollow = ['780402811792072705','717020664587227136'];

var T = new Twit(twitterConfig);

//wait for realtime tweets form above user ids;
var stream = T.stream('statuses/filter',{follow: accountsToFollow.join(',')});
 

stream.on('tweet', (tweet) => {

	if (tweet) {
		//filter out retweets of from other users
		var valid = accountsToFollow.find((userId) => {
			return userId === tweet.user.id_str;
		});

		if (valid) {
			//retweet
			T.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response) {
					logger.log(tweet, data, err);
			})
		}	
	}
	
});
