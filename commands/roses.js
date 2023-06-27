const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
  
  //sets the name of the slash command
		.setName('roses')
  
  //sets the subtext
		.setDescription('send these to your crush!'),
	async execute(interaction) {
    
    
    let asciiFlower = "🌹🌹🌹🌹🌹🌹🌹🌹🌹"
    
    
    // below is how you send back a response!
		await interaction.reply(asciiFlower);
	},
};


// When you make a new slash command you have to register it with discord.
// To do this!
// open the Terminal at the bottom and run:

//  npm run register



