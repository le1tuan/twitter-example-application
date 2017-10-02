var express = require('express');
var twitterApi = require('./twitter_api/index.js');
var cors = require('cors');
var moment = require('moment');
var bodyParser = require('body-parser')
var multer = require('multer');
var twit = require('./twitter_api/twit.js');
//Callback functions
var app = express();
// var sendResult = (res) => {
//     return (data) => {
//         res.send(data);
//     }
// }
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/favorite/list', (req, res) => {
    twitterApi.getFavoriteList().then(data => {
        res.send(data)
    })
});
app.get('/statuses/user_timeline', (req, res) => {
    twitterApi.getUserTimeLine().then(data => {
        res.send(data);
    })
});
app.get('/search/tweets', (req,res) => {
    var query = req.query.q;
    twitterApi.searchTweets(query)
    .then(tweet => {
       res.send(tweet.statuses[0]);
    })
});
app.get('/direct_messages/events/list', (req, res) => {
    twitterApi.directMessageList().then(tweet => {
        var time = moment.utc(parseInt(tweet.events[0].created_timestamp));
        twitterApi.getUser(tweet.events[0].message_create.target.recipient_id).then(data => {
            res.send({
                recipient: {
                    name: data.name,
                    screen_name: data.screen_name,
                },
                content: {
                    text: tweet.events[0].message_create.message_data.text
                },
                created_timestamp: time,
            })
        })
    })
});
app.post('/direct_messages/events/new',(req, res) => {
    var id = "829924335947182082";
    twit.createMessage(id, req.body.text)
    .then(data => {
        res.send(data);
    })
    .catch( e => {
        console.log(e)
    });
})
app.listen(4000,() => {
    console.log('Server run: http://localhost:4000')
})