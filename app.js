var Discord = require('discord.js');
var jokes = require('./jokes.json');

var vrcbot = new Discord.Client();

vrcbot.on("message", function(message) {
    if(message.content === "ping") {
        vrcbot.reply(message.channel, "pong");
    }

    if(message.content.toLowerCase().includes("tell me a joke dad")) {
        var joke = jokes[Math.floor(Math.random()*jokes.length)];
        vrcbot.sendMessage(message.channel, joke);
    }

    if(message.content.toLowerCase().includes("who was left")) {
        if(Math.random() >= 0.5) {
            vrcbot.sendMessage(message.channel, "Kuroky");
        } else {
            vrcbot.sendMessage(message.channel, "Arteezy");
        }
    }

    if(message.content.toLowerCase().includes("who was right")) {
        if(Math.random >= 0.5) {
            vrcbot.sendMessage(message.channel, "Kuroky");
        } else {
            vrcbot.sendMessage(message.channel, "Arteezy");
        }
    }

});

vrcbot.loginWithToken('MjEwNjAwMDQ2NjUwMDY0ODk2.CoXVrA.BfRdd4rJHkFvYhqnSlSCl2rVMY0');
