var tw = require('twitter');
var config = require('./config');
// File Config
var twitter = new tw({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token_key: config.access_token_key,
    access_token_secret: config.access_token_secret,
});

var params = {screen_name: 'nodejs'};

var getUserTimeLine = () => {
    return twitter.get('statuses/user_timeline', params);
}
var getFavoriteList = () => {
    return twitter.get('favorites/list');
}
var searchTweets = (query) => {
    return twitter.get('search/tweets', {
        q: query,
        count: 2
    });
}
var getUser = (id) => {
    return twitter.get('users/show', {
        user_id: id,
    })
}
var directMessageList = () => twitter.get('direct_messages/events/list');

var searchUser = (query) => {
    return twitter.get('users/search', {
        q: query,
    });
}
var createMessage = ({id, text}) => {
    console.log(id, text);
    return twitter.get('direct_messages/events/new',{
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
    })
}
var directMessageList = () => twitter.get('direct_messages/events/list');

var searchUser = (query) => {
    return twitter.get('users/search', {
        q: query,
        count: 2,
    });
}

module.exports = {
    getUserTimeLine,
    getFavoriteList,
    searchTweets,
    directMessageList,
    getUser,
    searchUser,
    createMessage
};