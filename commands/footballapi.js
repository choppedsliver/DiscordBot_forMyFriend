  const { SlashCommandBuilder } = require('discord.js');

//http://numbersapi.com/2/28/date

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

module.exports = {
	data: new SlashCommandBuilder()
  
  //sets the name of the slash command
		.setName('football')
  
  //sets the subtext
		.setDescription('football info')
  
  //get a specific user
  // .addUserOption(option =>
  // option
  //   .setName('recipient')
  //   .setDescription('who gets the drink?')
  //   .setRequired(true))
  
  //place to input a string(in this case, an emoji)
  .addStringOption(option =>
		option.setName('football')
			.setDescription('football information')
			.setRequired(true)),
  
  async execute(interaction) {
    
    //extract the options and store as variables
    // const target = interaction.options.getUser('recipient');
    
		const alcohol = interaction.options.getString('alcohol');
    
    
    let drinkLookup = await fetch(`http://numbersapi.com/2/28/date`)
    
    let waitForADrink = await drinkLookup.json();
    
    console.log(waitForADrink[0])
    
    let randOne = Math.floor(Math.random()*waitForADrink.length)
    
    console.log(randOne)
    
    
    let theDrink = waitForADrink[randOne]
    
    
    console.log(theDrink)  

    
    // below is how you send back a response!
		await interaction.reply(theDrink)

	},
};


// When you make a new slash command you have to register it with discord.
// To do this!
// open the Terminal at the bottom and run:

//  npm run register


//guide: https://discordjs.guide/creating-your-bot/command-deployment.html#command-registration
// API documentation: https://discord.js.org/#/




