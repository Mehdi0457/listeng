const Discord = require('discord.js');
const client = new Discord.Client(); 
client.on("ready", () => {
  client.user.setActivity("بيع بوتات لشراء تواصل معاي", {type:'PLAYING'});

    });


client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
