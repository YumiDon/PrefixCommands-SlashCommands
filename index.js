//                                       ___      .=-.-. 
// ,--.-.  .-,--.  .--.-. .-.-.   .-._ .'=.'\    /==/_ / 
// /==/- / /=/_ /  /==/ -|/=/  |  /==/ \|==|  |  |==|, |  
// \==\, \/=/. /   |==| ,||=| -|  |==|,|  / - |  |==|  |  
// \==\  \/ -/    |==|- | =/  |  |==|  \/  , |  |==|- |  
//  |==|  ,_/     |==|,  \/ - |  |==|- ,   _ |  |==| ,|  
//  \==\-, /      |==|-   ,   /  |==| _ /\   |  |==|- |  
//  /==/._/       /==/ , _  .'   /==/  / / , /  /==/. /  
//  `--`-`        `--`..---'     `--`./  `--`   `--`-`   

// ========================================================= //

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  res.writeHead(200,{'content-type':'image/gif'});
  fs.createReadStream('don.gif').pipe(res);
}).listen(8080);


// ========================================================== //

const {Client, Collection, Intents } = require('discord.js');
let cpuStat = require("cpu-stat");
const mongoose = require("mongoose");
const config = require('./src/config/config.json')

const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_BANS",
        "GUILD_INTEGRATIONS",
        "GUILD_WEBHOOKS",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES",
        "GUILD_PRESENCES",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING",
    ],
});

const Discord = require('discord.js');

require('dotenv').config()

module.exports = client;

client.discord = Discord;
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require('./src/config/config.json')

require("./src/handler")(client);

client.login(process.env.TOKEN);
