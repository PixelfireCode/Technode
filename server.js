const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', async (message) => {        
    let prefix = "!";
  const [cmd, ...args] = message.content.split(/\s+/g);


//Cosmetic Commands

if(cmd === `${prefix}ping`) { 
        message.channel.send('Pong!');
}
  
  
  
if(cmd === `${prefix}hello`) {
        message.channel.send('Hey!');
}

  
  
if(message.content.includes('dab')) {
        message.channel.send("<o/")
  }

  
//Junk food Commands  
  
if(message.content === 'pizza') {
        message.channel.send(':pizza:');
}   
  
  
  
if(message.content === 'cake') {
        message.channel.send(':cake:')
}
  
  
  
if(message.content === 'burger') {
        message.channel.send(':hamburger:')
}  
  

  
if(message.content === 'taco') {
        message.channel.send(':taco:')
}
  
  
  
if(message.content === 'doughnut') {
        message.channel.send(':doughnut:')
}
  
  
  
if(message.content === 'cookie') {
        message.channel.send(':cookie:')
}
  
  
  
if(message.content === 'hotdog') {
        message.channel.send(':hotdog:')
}
  
  
//Utility Commands
  
if(cmd === `${prefix}help`) { 
      message.author.send({embed: {
        color: 3447003,
        description: "**COSMETIC COMMANDS**\n\n!ping\n*No description.*\n\n!hello\n*Returns the greeting!*\n\n\n**UTILIY COMMANDS**\n\n!help\n" +
        "*DM's you this message*\n\n!credits\n*Displays the bot developement staff*\n\n!say\n*Says what the player requests. Administrator+ only.*\n\n!testserver" + 
        "\n*DM's you an invite to the Technode test server. Bot Dev only.*\n\n\n**MODERATION COMMANDS**\n\n!kick\n*Kicks the user mentioned*\n\n!ban\n*Bans the user mentioned*" +
        "\n\n!purge\n*Purges the number of chat messages specified*\n\n\nTechnode, made by " + bot.users.get("319055407437840394").tag
     }});
     message.channel.send('I have sent you a message in your DM\'s! :incoming_envelope:')
  }
  

  
 if(cmd === `${prefix}credits`)
    {
        message.channel.send({embed: {
            color: 3447003,
            description: "**OWNER**\n\n" + bot.users.get("319055407437840394").tag + "\n\n**LEAD DEV**\n\n" + bot.users.get("285842295566237698").tag + 
          "\n\n**DEVELOPERS**\n\n" + bot.users.get("409116493352009738").tag
        }});
    }
  
  
  
  if(cmd === `${prefix}say`) {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }
  
  
  
   if(cmd === `${prefix}kick`) {
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permission to use this!");
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of the server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user!");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
  }
  
  
  
  if(cmd === `${prefix}testserver`) {
    if(!message.member.roles.some(r=>["Bot Developer"].includes(r.name)) )
      return message.reply("Sorry, you don't have permission to use this!");
      message.channel.send('A test server invite has been sent to you in a DM!');
      message.author.send('Join the test server here: \nhttps://discord.gg/kmevBe5');   
}



if(cmd === `${prefix}ban`) {
    if(!message.member.roles.some(r=>["Administrator","Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permission to use this!");
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of the server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user!");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }



  if(cmd === `${prefix}purge`) {
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }





if(cmd === `${prefix}invite`) {
    message.channel.send('You want to invite Technode to your Discord guild?\n' +
                         'Click this link here!\nhttps://discordapp.com/oauth2/authorize?client_id=488764689837195288&permissions=8&scope=bot')
}












});













bot.login(process.env.TOKEN);