var express = require('express');
var twitterApi = require('./twitter_api/index.js');
var cors = require('cors');
//Callback functions
var app = express();
// var sendResult = (res) => {
//     return (data) => {
//         res.send(data);
//     }
// }
app.use(cors());
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
    // twitterApi.searchTweets(query).then(tweet => {
    //     res.set('Content-Type', 'application/json');
    // }).then(tweet => {
    //     console.log('--------->',tweet);
    // }).catch( err => {
    //     console.log(err);
    // })
    twitterApi.searchTweets(query)
    .then(tweet => {
       res.send(tweet.statuses[0]);
    })
    
})
app.listen(4000,() => {
    console.log('Server run: http://localhost:4000')
})