module.exports = {
	smtp_config: {
	    host: 'smtp.gmail.com',
	    port: 587,
	    secure: false, // true for 465, false for other ports
	    auth: {
	        user: 'lohekedoot@gmail.com', // generated ethereal user
	        pass: 'Gazinga41' // generated ethereal password
	    }
	},
	twitter_config: {
		consumer_key: '9knjVAJvCuxw4rxSqaFdXi0je',
		consumer_secret: 'vV8xEuDCBEr26hjStrdbwMBIk9DQoLI63tdbnBc0GZFXIxY7VG',     
	  	access_token: '59056737-UR7887RHldDjVACHXuZbDvYb6QW5YwQ6NTJ1LVcGb',
	  	access_token_secret:  '3vQ1piuPvAORllgrXn9WnbcZPKpPLtmjqhGUAbPrhZvbV',
	  	timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
	},
	mail_options: {
	    from: '"admin" <lohekedoot@gmail.com>', // sender address
	    to: 'abhinow.abhishek@gmail.com', // list of receivers
	    subject: 'Retweet Notification', // Subject line
	}
}