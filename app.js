/* 
MIT License

Copyright (c) 2021 Deepak Raj

Bot-Name:- Cybel

Github:- https://github.com/codePerfectPlus/Cybel
Invite-Link:-
https://top.gg/bot/832137823309004800/invite

*/

require('dotenv').config();
const { default: axios } = require('axios');
const Discord = require('discord.js');
const client = new Discord.Client({intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS']});

async function fetch(url) {
  const { data } = await axios.get(url);
  return data;
}


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', msg => {
    if (msg.content == "ping") {
        msg.reply("pong");
        break;
    }
})




client.login(process.env.token);