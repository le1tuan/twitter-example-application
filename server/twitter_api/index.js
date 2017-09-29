var tw = require('twitter');
// File Config
var twitter = new tw({
    consumer_key: "k7uj4qFbAl3bTlpsCyJAv0Kz8",
    consumer_secret: "jxYLS0F14lBGVnjWv6QbxnWNSlmPb3jUrJj7WtKe4JQBBqD9Ug",
    access_token_key: "2653641894-Ptr9GzokkWERWaH1xDR0fupBPVQ8fT1qrnsW806",
    access_token_secret: "eSPRYeTDRCBwORqBSW7IvzWvCpHdWflLLwHKZ3HTusBJm",
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

module.exports = {
    getUserTimeLine,
    getFavoriteList,
    searchTweets,
    directMessageList,
    getUser,
    createMessage
};