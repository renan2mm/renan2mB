const Discord = require('discord.js')
const cor = require('../../config').discord.color

module.exports = {
    name: 'verificação',
    description: 'Comando para a verificação',
    type: Discord.ApplicationCommandType.ChatInput,

    run: async(client, interaction) => {
        const embed = new Discord.EmbedBuilder()
        .setColor(cor)
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setDescription(`😄 Olá **${interaction.user.username}**, digite abaixo o seu nick verdadeiro na twitch:`)

        interaction.reply({ embeds: [embed] })
    }
}