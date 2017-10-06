var twit = require('twit');
var config = require('./config');
var Twitter = new twit({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token: config.access_token_key,
    access_token_secret: config.access_token_secret,
});
var streamUser =  Twitter.stream('user');
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
var directMessageStream = (callback) => {
    streamUser.on('direct_message', (message) => {
        const data = {
            recipient_id: message.direct_message.recipient_id,
            text: message.direct_message.text,
            screen_name: message.direct_message.sender.screen_name,
            message_id: message.direct_message.id,
        }
        callback(data);
    });
}

module.exports = {
    createMessage,
    directMessageStream
}