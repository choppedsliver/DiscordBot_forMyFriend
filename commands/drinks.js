const { SlashCommandBuilder } = require('discord.js');

var drinkTypes = require("../words/drinks");

module.exports = {
	data: new SlashCommandBuilder()
  
  //sets the name of the slash command
		.setName('sip')
  
  //sets the subtext
		.setDescription('What are we drinking tonight?'),
	async execute(interaction) {
    
  let randDrink = drinkTypes[Math.floor(Math.random()*drinkTypes.length)]
  

  let drinksTonight = `Tonight we will be sipping on ${randDrink}!`

    
    
    // below is how you send back a response!
		await interaction.reply(drinksTonight);
	},
};
