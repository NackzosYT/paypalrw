const Discord = require('discord.js');
const client = new Discord.Client();
const convert = require("hh-mm-ss")
const dateFormat = require('dateformat');
const fs = require('fs');
const pretty = require('pretty-ms');
const rn = require('random-number');
const userData = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));
const moment = require('moment');
var Canvas = require('canvas')
var jimp = require('jimp')
        const ms = require("ms");
const dataPro = JSON.parse(fs.readFileSync('./walls.json', 'utf8'));
let done = {};
const prefix = 'N'









client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});








client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "NiX");
   member.addRole (role);
  
})

client.on ("guildMemberRemove", member => {
   
})


	  




  
  



client.login(process.env.BOT_TOKEN); 
