const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const prefix = "!"

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Oops `);
   console.log(`-----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`done ' `);
   console.log(`-----------------`);
});



client.on('message', message => {
    if(message.content === 'ct'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;



  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);



let args = message.content.split(" ").slice(1);

if(!args) return message.channel.send('${prefix}say <words>');	



if (command == "say") {

if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("*لا تملك الصلاحيات المطلوبه**");



message.channel.send(args.join("  "))

    message.delete();

  }

});


client.on('message', message => { 
if (message.content === '3on!') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**lo , l , test of nigga , form me np,  lol lol  ? hhh **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { 
if (message.content === '3on!') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**lo , l , test of nigga , form me np,  lol lol  ? hhh **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});




client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2); 
