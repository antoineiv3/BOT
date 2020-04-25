const Discord = require('discord.js');
const client = new Discord.Client();

/*version on ligne */
client.login(process.env.TOKEN);

/*version off ligne 
client.login("");
*/

const exampleEmbed = {
	color: 0x0099ff,
	title: 'Some title',
	url: 'https://discord.js.org',
	author: {
		name: 'Some name',
		icon_url: 'https://i.imgur.com/wSTFkRM.png',
		url: 'https://discord.js.org',
	},
	description: 'Some description here',
	thumbnail: {
		url: 'https://i.imgur.com/wSTFkRM.png',
	},
	fields: [
		{
			name: 'Regular field title',
			value: 'Some value here',
		},
		{
			name: '\u200b',
			value: '\u200b',
			inline: false,
		},
		{
			name: 'Inline field title',
			value: 'Some value here',
			inline: true,
		},
		{
			name: 'Inline field title',
			value: 'Some value here',
			inline: true,
		},
		{
			name: 'Inline field title',
			value: 'Some value here',
			inline: true,
		},
	],
	image: {
		url: 'https://i.imgur.com/wSTFkRM.png',
	},
	timestamp: new Date(),
	footer: {
		text: 'Some footer text here',
		icon_url: 'https://i.imgur.com/wSTFkRM.png',
	},
};
client.on("message", (message)=> {
    
    if(message.content === "embed") {
        message.channel.send({ embed: exampleEmbed });
    }

    if(message.content === "Bonjour") {
        message.channel.send("Je suis 23. Que puis-je faire ?")
    }
    if(message.content === "actu") {
        message.channel.send("Toute les actualités et news sont là ! Actu 1 : Developpement d un DISCORD pour migration BOT terminé en phase BETA relié au serveur Github à ladresse : et Configuration de base faite Actu 2 : IT WORKS va nous faire un virement de 6000e Virement effectuer entre le 27 04 2020 et 02 05 2020. Actu 3 : J ai passer un accord avec nos chimiste deux recettes sont en etude une gout cerise et une gout citron vert + menthe. Accord passer le 23 04 2020 à 17h36. Actu 4 : Message envoyer à la CCI en attente de reponse pour RDV Attente mail en conclusion charges a reflechir + devis responsabilite civil + devis domiciliation enteprise. Actu 5 : Appel de l agence d influenceur eu le 22 04 2020 à 11h30 en conclusion : attente devis. Attente du mail : 25 04 2020")
    }
});
