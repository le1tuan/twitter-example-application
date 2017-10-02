var twit = require('twit');
var config = require('./config');
var Twitter = new twit({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token: config.access_token_key,
    access_token_secret: config.access_token_secret,
});
var createMessage = (id, text) => {
    return Twitter.post('direct_messages/events/new', {
        event: {
            type: "message_create",
            message_create: {
                target: {
                    recipient_id: id
                },
                message_data: {
                    text: text,
                }
            }
        }
    });
}

module.exports = {
    createMessage,
}