const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Server is up.')
});

app.listen(3000, () => {
  console.log('server started');
});

///////////////////////////////////////
const Discord = require("discord.js");
const client = new Discord.Client();

const request = require('request');
const prefix = "*"; // «·»—«›Ìﬂ”
const GUILDID = ''; // «Ì œÌ «·”Ì—›—  
const CHANNELID = ''; // «Ì œÌ «·—Ê„


client.on("ready", () => {
  console.log(`${client.user.tag}`);
   console.log(`${client.guilds.cache.size} Servers`);
  console.log(`${client.users.cache.size} Members`);
   console.log(`${client.channels.cache.size} Channels`);
  console.log(`[ ${client.guilds.cache.map(g => g.name).join(", \n ")} ]`);
  client.user.setActivity(`${prefix}help | Quran-BOT`, { type: "WATCHING" });
});

const ytdl = require('ytdl-core');// CODE BY KAHRBAA ﬂÂÂ—»«
const url = 'https://www.youtube.com/watch?v=M6z0Qql4-qo'; // Â‰« ›œÌÊ «·Œ«’ » «·ﬁ—√‰ «·ﬂ—Ì„ ﬂ«„· // CODE BY KAHRBAA 

client.on('ready', async () => {
  console.log(' ‹„  ‘€Ì· «·ﬁ—√‰ «·ﬂ—Ì„');
  // CODE BY KAHRBAA ﬂÂÂ—»«
  voiceStay(GUILDID, CHANNELID);
  function voiceStay(guildid, channelid) {
    if (!guildid) throw new Error('‹«ﬂœ «‰ﬂ Õÿÿ «ÌœÌ «·”Ì—›—');
    if (!channelid) throw new Error(' ‹«ﬂœ «‰ﬂ Õÿÿ «ÌœÌ «·—Ê„');

    let guild = client.guilds.cache.get(guildid);
    const voiceChannel = guild.channels.cache.get(channelid);;
    if (!voiceChannel) {
      return
    }// CODE BY KAHRBAA ﬂÂÂ—»«
    voiceChannel.join()
      .then(connection => {
        const stream = ytdl(url, { filter: 'audioonly' }); // CODE BY KAHRBAA ﬂÂÂ—»«
        const dispatcher = connection.play(stream);
        dispatcher.on('end', () => { // CODE BY KAHRBAA ﬂÂÂ—»« 
          voiceChannel.leave();

        });
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "again")) {// CODE BY KAHRBAA ﬂÂÂ—»«
    if (message.author.bot) return;
    if (!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
      voiceStay(GUILDID, CHANNELID);
  function voiceStay(guildid, channelid) {
    if (!guildid) throw new Error('‹«ﬂœ «‰ﬂ Õÿÿ «ÌœÌ «·”Ì—›—');
    if (!channelid) throw new Error(' ‹«ﬂœ «‰ﬂ Õÿÿ «ÌœÌ «·—Ê„');

    let guild = client.guilds.get(guildid);
    const voiceChannel = guild.channels.get(channelid);;
    if (!voiceChannel) {
      return
    }// CODE BY KAHRBAA ﬂÂÂ—»«
    voiceChannel.join()
      .then(connection => {
        const stream = ytdl(url, { filter: 'audioonly' }); // CODE BY KAHRBAA ﬂÂÂ—»«
        const dispatcher = connection.playStream(stream);
        dispatcher.on('end', () => { // CODE BY KAHRBAA ﬂÂÂ—»« 
          voiceChannel.leave();
        });
      });
    message.channel.send({// CODE BY KAHRBAA ﬂÂÂ—»«
      embed: new Discord.MessageEmbed()
        .addField(`starting again.`, true)

    })
  }}
});



client.login(process.env.token);