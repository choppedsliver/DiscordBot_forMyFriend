//word of the day??
const { SlashCommandBuilder } = require('discord.js');

var drinkTypes = require("../words/drinks");

module.exports = {
	data: new SlashCommandBuilder()
  
  //sets the name of the slash command
		.setName('drinks')
  
  //sets the subtext
		.setDescription('What are we drinking tonight?'),
	async execute(interaction) {
    
  let randDrink = drinkTypes[Math.floor(Math.random()*drinkTypes.length)]
  

  let drinksTonight = `Tonight we will be sipping on ${randDrink}!`

    
    
    // below is how you send back a response!
		await interaction.reply(drinksTonight);
	},
};


// When you make a new slash command you have to register it with discord.
// To do this!
// open the Terminal at the bottom and run:

//  npm run register


//guide: https://discordjs.guide/creating-your-bot/command-deployment.html#command-registration
// API documentation: https://discord.js.org/#/

