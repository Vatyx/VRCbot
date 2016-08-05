var fs = require('fs');
var needle = require('needle');
var request = require('request');
var jsonfile = require('jsonfile');

var jokes = []

request("https://www.reddit.com/r/dota2dadjokes/top/.json?sort=top&t=all&count=0&after=t3_2nr1hh", function(error, request, body) {
    body = JSON.parse(body);
    var posts = body.data.children;
    for(var i = 0; i < posts.length; i++) {
        jokes.push(posts[i].data.title + " " + posts[i].data.selftext);
    }
    var request = require('request');

request("https://www.reddit.com/r/dota2dadjokes/top/.json?sort=top&t=all&count=25&after=t3_2nr1hh", function(error, request, body) {
    body = JSON.parse(body);
    var posts = body.data.children;
    for(var i = 0; i < posts.length; i++) {
        jokes.push(posts[i].data.title + " " + posts[i].data.selftext);
    }

    var request = require('request');
request("https://www.reddit.com/r/dota2dadjokes/top/.json?sort=top&t=all&count=50&after=t3_2nr1hh", function(error, request, body) {
    body = JSON.parse(body);
    var posts = body.data.children;
    for(var i = 0; i < posts.length; i++) {
        jokes.push(posts[i].data.title + " " + posts[i].data.selftext);
    }

    var request = require('request');
request("https://www.reddit.com/r/dota2dadjokes/top/.json?sort=top&t=all&count=75&after=t3_2nr1hh", function(error, request, body) {
    body = JSON.parse(body);
    var posts = body.data.children;
    for(var i = 0; i < posts.length; i++) {
        jokes.push(posts[i].data.title + " " + posts[i].data.selftext);
    }

    jsonfile.writeFile("jokes.json", jokes, function() { console.log("done"); })

});

});

});

});

