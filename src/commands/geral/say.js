const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "say",
  run: async (client, message, args) => {
      
   let embed = new MessageEmbed()
       .setDescription('`>>say [mensagem]`')
       .setColor("RANDOM")
       if (!args.join(' ')) return message.reply({embeds: [embed]})
      
     let don = new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
        .setDescription(args.join(" "))
        .setTimestamp()
        .setColor("RANDOM")
        message.delete().catch(O_o => {});
      
    message.channel.send({embeds: [don]})
  }
}