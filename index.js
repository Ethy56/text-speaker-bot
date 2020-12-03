const Discord = require('discord.js');
const { Client, Util } = require("discord.js");
const embedcolor = '00C0FF';
const PREFIX = 'vc-';
const prefix = 'vc-';
const discordTTS = require('discord-tts');
const owners = ('363812216845369374')
const db = require("quick.db")
const bot = new Discord.Client({
    disableMentions: "all"
});
const ytdl = require("ytdl-core");
bot.on('ready', async msg => {
    console.log(bot.user.username + ' is Ready to Speak!')
    bot.user.setStatus('online')
    bot.user.setActivity(prefix + 'help | talky talky', { type: "PLAYING" })
  .catch(console.error);
});
const owner = '363812216845369374';
var answers8 = [
"It is certain.",
"It is decidedly so.",
"Without a doubt.",
"Yes – definitely.",
"You may rely on it.",
"As I see it, yes.",
"Most likely.",
"Outlook good.",
"Yes.",
"Signs point to yes.",
"Reply hazy, try again.",
"Ask again later.",
"Better not tell you now.",
"Cannot predict now.",
"Concentrate and ask again.",
"Don't count on it.",
"My reply is no.",
"My sources say no.",
"Outlook not so good.",
"Very doubtful."
]
var answers = [
  "Where do you spend most of your free time/day?",
"What sports do you like to watch?",
"If your life was a meal, what would kind of meal would it be?",
"What do you think of tour group packages?",
"What sci-fi movie or book would you like the future to be like?",
"What old trend is coming back these days?",
"What was the last funny video you saw?",
"What do you think of buffets?",
"What is a fashion trend you are really glad went away?",
"Do movies have the same power as books to change the world?",
"Does the government have a place in regulating food? To what extent should government regulate food?",
"What do you like to do to relax?",
"What food looks disgusting but tastes delicious?",
"Which season are you most active in?",
"If some of the lesser-known holidays were commercialized, what would the commercialization look like?",
"What was your favorite children's book?",
"What is your favorite song of all time?",
"If you could have any animal as a pet, what animal would you choose?",
"The world has become infested with rabid dogs with the intelligence of a 5-year-old, where do you hole up to survive the “a-pup-calypse”?"
]

bot.on("warn", console.warn);
bot.on("error", console.error);


bot.on("message", async (msg) => { // eslint-disable-line
     if (msg.content.includes(msg.content)) {
         bot.user.setActivity(prefix + "help | talky talky", { type: "PLAYING" })
     }
     let message = msg;
var bruuuh = [
    "vc-help to see my commands!",
    "vc-autotts [#channel/off] to do tts without vc-tts!",
    "vc-support to get the support server"]
    var result = bruuuh[Math.floor(Math.random() * bruuuh.length)]
    if (msg.author.bot) return;
    if (msg.content.toLowerCase().includes("bee")) {
        if (msg.guild.id == "638187870707777536") {
        msg.react("🐝")
    }}

if (msg.channel.id == db.get('ushere_' + msg.guild.id + '.channel')) {
         if (!isNaN(db.get("bl" + msg.guild.id + ".id"))) {
                if (msg.member.roles.cache.has(db.get("bl" + msg.guild.id + ".id"))) {
                msg.channel.send("You are blacklisted from doing this!")
                return;
                }
            }
        const voiceChannel = msg.member.voice.channel;
        if (!voiceChannel) {
            msg.channel.send("You need to be in a voice channel!")
            return;
        }
        if (!msg.content.slice()) {
            msg.channel.send("You need to say something!")
            return;
        }

        if (!msg.guild.me.voice.connection) {
            voiceChannel.join().then(connection => {    
    const stream = discordTTS.getVoiceStream(msg.author.username + " says " + msg.content.slice());
    const dispatcher = connection.play(stream);
        });
        }

        if (msg.guild.me.voice.connection) {
            const connection = msg.guild.me.voice.connection
            const stream = discordTTS.getVoiceStream(msg.author.username + " says " + msg.content.slice());
            const dispatcher = connection.play(stream);
        }
        }


    const args = msg.content.split(" ");
    let command = msg.content.toLowerCase().split(" ")[0];
    command = command.slice(PREFIX.length);

    if (msg.content === prefix + "help" || msg.content == prefix + "cmd") {
        const helpembed = new Discord.MessageEmbed()
            .setTitle("__**Commands**__")
            .setDescription('``' + prefix + 'tts [message]`` - says [message] in voice channel\n``' + prefix + 'flip`` - flips a coin\n``' + prefix + 'rtopic`` - get a random topic in voice channel\n``' + prefix + 'stats`` - get the bots stats\n``' + prefix + 'invite`` - get the bots invite link\n``' + prefix + 'online`` - reacts if online\n``' + prefix + "minecraft`` - idk what to put here\n``"+ prefix + "autotts [off/#channel]`` - sets auto tts channel\n``" + prefix + "blacklist-role [off/@role/role name/role id]`` - blacklists a role from using certain commands")
            .setFooter('[] - required | Requested by: ' + message.author.tag, message.author.displayAvatarURL({dynamic:true,size:2048}))  
            .setThumbnail(bot.user.displayAvatarURL())
            .setColor(embedcolor)
        msg.channel.send(helpembed);
        
    }
    if (msg.content === prefix + 'stats') {
  let totalSeconds = (bot.uptime / 1000);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.round(totalSeconds % 60);
        let test = new Discord.MessageEmbed();
            test.setTitle("Loading...");
            test.setColor("FF0000");
        message.channel.send(test).then(s => {
        let gnip = s.createdTimestamp - message.createdTimestamp;
        const statbotembed = new Discord.MessageEmbed()
            statbotembed.setTitle("Loaded!")
            statbotembed.setColor("008000")
            statbotembed.setDescription('Uptime: ``' + hours + 'h ' + minutes + 'm ' + seconds + 's``\nPing: ``' + bot.ws.ping + "ms``\nHeartBeat: ``" + gnip + "ms``\nGuilds: ``" + bot.guilds.cache.size + "``\nUsers: ``" + bot.users.cache.size + "``")
            statbotembed.setThumbnail(bot.user.displayAvatarURL())
        s.edit(statbotembed)
      });
    }
    if (msg.content.startsWith(prefix + "tts")) {
        if (msg.channel.id == db.get('ushere_' + msg.guild.id + '.channel')) return;
        if (!isNaN(db.get("bl" + message.guild.id + ".id"))) {
                if (message.member.roles.cache.has(db.get("bl" + msg.guild.id + ".id"))) {
                msg.channel.send("You are blacklisted from doing this!")
                return;
                }
            }
        const withoutPrefix = msg.content.slice(prefix.length);
    const bbbb = withoutPrefix.split(/ +/);
    const cccc = bbbb[0];
    const ddddd = withoutPrefix.slice(cccc.length);
        const voiceChannel = msg.member.voice.channel;
        if (!voiceChannel) {
            msg.channel.send("You need to be in a voice channel!")
            return;
        }
        if (!ddddd) {
            msg.channel.send("You need to say something!")
            return;
        }
        let tts = new Discord.MessageEmbed()
        .setTitle("tts in vc!")
        .setDescription(msg.author.username + " says " + ddddd)
        .setColor(msg.member.roles.highest.color)
        .setFooter(result)
        .setThumbnail(msg.author.displayAvatarURL())
        msg.channel.send(tts)
        if (!msg.guild.me.voice.connection) {
            voiceChannel.join().then(connection => {    
    const stream = discordTTS.getVoiceStream(msg.author.username + " says " + ddddd);
    const dispatcher = connection.play(stream);
    dispatcher.on("finish", () => voiceChannel.leave())
    });
        }

        if (msg.guild.me.voice.connection) {
            const connection = msg.guild.me.voice.connection
            const stream = discordTTS.getVoiceStream(msg.author.username + " says " + ddddd);
            const dispatcher = connection.play(stream);
            dispatcher.on("finish", () => { voiceChannel.leave()
    });
        }
    }

    if (msg.content.startsWith(prefix + "rtopic")) {
         if (!isNaN(db.get("bl" + message.guild.id + ".id"))) {
                if (message.member.roles.cache.has(db.get("bl" + message.guild.id + ".id"))) {
                message.channel.send("You are blacklisted from doing this!")
                return;
                }
            }
        var rtop = answers[Math.floor(Math.random() * answers.length)]
        const voiceChannel = msg.member.voice.channel;
        if (!voiceChannel) {
            msg.channel.send("You need to be in a voice channel!")
            return;
        }

        if (!msg.guild.me.voice.connection) {
            voiceChannel.join().then(connection => {    
            const stream = discordTTS.getVoiceStream(rtop);
            const dispatcher = connection.play(stream);
    });
        }

        if (msg.guild.me.voice.connection) {
            const connection = msg.guild.me.voice.connection
            const stream = discordTTS.getVoiceStream(rtop);
            const dispatcher = connection.play(stream);
        }
        const rbed = new Discord.MessageEmbed()
        .setTitle("Random Topic")
        .setDescription(rtop)
        .setColor(msg.member.roles.highest.color)
        .setFooter(result)
        .setThumbnail(msg.guild.iconURL())
        msg.channel.send(rbed)
    }
    if (msg.content == prefix + "minecraft") {
         if (!isNaN(db.get("bl" + message.guild.id + ".id"))) {
                if (message.member.roles.cache.has(db.get("bl" + message.guild.id + ".id"))) {
                message.channel.send("You are blacklisted from doing this!")
                return;
                }
            }
            const withoutPrefix = msg.content.slice(prefix.length);
    const split = withoutPrefix.split(/ +/);
    const command = split[0];
    const args = withoutPrefix.slice(command.length);
        const voiceChannel = msg.member.voice.channel;
        var soongs = ["dont mine at night.mp3", "fallen kingdom.mp3", "creeper aww man.mp3", "new world.mp3", "take back the night.mp3","supernatural mobs.mp3","find the pieces.mp3","tnt.mp3"]
            let sng = "";
            sng = soongs[Math.floor(Math.random() * soongs.length)];
        msg.channel.send("fine")
        if (!voiceChannel) {
            msg.channel.send("You need to be in a voice channel!")
            return;
        }
        if (!msg.guild.me.voice.connection) {
            voiceChannel.join().then(connection => {    
    const dispatcher = connection.play(sng);;
    dispatcher.on("finish", () => voiceChannel.leave())
    });
        }
        if (msg.guild.me.voice.connection) {
            const connection = msg.guild.me.voice.connection
            const dispatcher = connection.play(sng);
            dispatcher.on("finish", () => { voiceChannel.leave()
    });
        }
    }
    if (msg.content.startsWith(prefix + "suggest")) {
        const withoutPrefix = msg.content.slice(prefix.length);
    const bbbb = withoutPrefix.split(/ +/);
    const cccc = bbbb[0];
    const ddddd = withoutPrefix.slice(cccc.length);
    if (!ddddd) {
        msg.channel.send("Please Specify something to suggest!")
        return;
    }
        const channel = bot.channels.cache.get("770286147058008074")
    const used = new Discord.MessageEmbed()
        .setTitle('Suggestion!')
        .setColor(embedcolor)
        .setDescription('**Message:** ``' + msg.content.slice("vc-suggest ".length) + "``")
        .setThumbnail(bot.user.displayAvatarURL({dynamic:true,size:2048}))
        .setFooter("Sent by: " + msg.author.tag, msg.author.displayAvatarURL({dynamic:true,size:2048}))
    channel.send(used).then(m => {
        m.react('👍');
        m.react('👎');
        msg.react('👍');
    })
    }
    if (msg.content === prefix + "invite") {
        
        const inv = new Discord.MessageEmbed()
            .setTitle("**Invite Link**")
            .setURL("https://dsc.gg/tts")
            .setColor(msg.member.roles.highest.color)
            .setThumbnail(bot.user.displayAvatarURL())
        msg.channel.send(inv);
    }
    if (msg.content.startsWith(prefix + "8ball")) {
         if (!isNaN(db.get("bl" + message.guild.id + ".id"))) {
                if (message.member.roles.cache.has(db.get("bl" + message.guild.id + ".id"))) {
                message.channel.send("You are blacklisted from doing this!")
                return;
                }
            }
        var eightballans = answers8[Math.floor(Math.random() * answers8.length)];
       
        const withoutPrefix = msg.content.slice(prefix.length);
    const split = withoutPrefix.split(/ +/);
    const command = split[0];
    const args = withoutPrefix.slice(command.length);
        const voiceChannel = msg.member.voice.channel;
        if (!voiceChannel) {
            msg.channel.send("You need to be in a voice channel!")
            return;
        }
        if (!args) {
            msg.channel.send("You need to say something!")
            return;
        }

        if (!msg.guild.me.voice.connection) {
            voiceChannel.join().then(connection => {    
    const stream = discordTTS.getVoiceStream(msg.author.username + " asks eight ball " + args + "......eight ball says " + eightballans);
    const dispatcher = connection.play(stream);
    });
        }

        if (msg.guild.me.voice.connection) {
            const connection = msg.guild.me.voice.connection
            
    const stream = discordTTS.getVoiceStream(msg.author.username + " asks eight ball " + args + "......eight ball says " + eightballans);
    const dispatcher = connection.play(stream);
    dispatcher.on("finish", () => { voiceChannel.leave()
    });
        }
        const eightbed = new Discord.MessageEmbed()
        .setTitle('8ball')
        .setDescription('**' + msg.author.username + ':**' + args + '\n\n**8ball:** ' + eightballans)
        .setColor(msg.member.roles.highest.color)
        .setFooter(result)
        .setThumbnail(bot.user.displayAvatarURL())
        msg.channel.send(eightbed)
    }
    if (msg.content.startsWith(prefix + "autotts")) {
        const withoutPrefix = msg.content.slice(prefix.length);
    const split = withoutPrefix.split(/ +/);
    const command = split[0];
    const args = withoutPrefix.slice(command.length);
        if (args == " none" || args == " na" || args == " off") {
            db.set('ushere_' + msg.guild.id, { channel: "na" })
            msg.channel.send("Removed auto tts channel!")
            return;
        }
         if (!msg.member.permissions.has("MANAGE_CHANNELS")) {
             msg.channel.send("You need the ``MANAGE_CHANNELS`` Permission to execute this!")
             return;
         }
        if (!msg.mentions.channels.first()) {
            msg.channel.send("You need to mention a channel!")
            return;
        }
        db.set('ushere_' + msg.guild.id, { channel: msg.mentions.channels.first().id })
        msg.channel.send("The auto tts channel is now " + msg.mentions.channels.first().name + "!")
    }
    if (msg.content.startsWith(prefix + "flip")) {
 if (!isNaN(db.get("bl" + message.guild.id + ".id"))) {
                if (message.member.roles.cache.has(db.get("bl" + message.guild.id + ".id"))) {
                message.channel.send("You are blacklisted from doing this!")
                return;
                }
            }       
        const voiceChannel = msg.member.voice.channel;
        var flip = [
        "heads",
        "tails"]
        if (!voiceChannel) {
            msg.channel.send("You need to be in a voice channel!")
            return;
        }
        if (!msg.guild.me.voice.connection) {
            var response = flip[Math.floor(Math.random() * flip.length)];
            voiceChannel.join().then(connection => {    
    const stream = discordTTS.getVoiceStream(msg.author.username + " your coin landed on " + response);
    const dispatcher = connection.play(stream);
    });
        }

        if (msg.guild.me.voice.connection) {
            var response = flip[Math.floor(Math.random() * flip.length)];
            const connection = msg.guild.me.voice.connection
            
    const stream = discordTTS.getVoiceStream(msg.author.username + " your coin landed on " + response);
    const dispatcher = connection.play(stream);
    dispatcher.on("finish", () => { voiceChannel.leave()
    });
        }
        msg.react('👍');
    }
    if (msg.content.startsWith(prefix + "poll")) {
        if (!isNaN(db.get("bl" + message.guild.id + ".id"))) {
                if (message.member.roles.cache.has(db.get("bl" + message.guild.id + ".id"))) {
                message.channel.send("You are blacklisted from doing this!")
                return;
                }
            }
        const withoutPrefix = msg.content.slice(prefix.length);
    const split = withoutPrefix.split(/ +/);
    const command = split[0];
    const args = withoutPrefix.slice(command.length);
        const voiceChannel = msg.member.voice.channel;
        if (!voiceChannel) {
            msg.channel.send("You need to be in a voice channel!")
            return;
        }
        if (!args) {
            msg.channel.send("You need to say something!")
            return;
        }

        if (!msg.guild.me.voice.connection) {
            voiceChannel.join().then(connection => {    
    const stream = discordTTS.getVoiceStream(msg.author.username + " wants your opinion on " + args);
    const dispatcher = connection.play(stream);
    });
        }

        if (msg.guild.me.voice.connection) {
            const connection = msg.guild.me.voice.connection
            
    const stream = discordTTS.getVoiceStream(msg.author.username + " wants your opinion on " + args);
    const dispatcher = connection.play(stream);
    dispatcher.on("finish", () => { voiceChannel.leave()
    });
        }
        msg.react('👍');
    }
    if (msg.content == prefix + 'support') {
    const bed = new Discord.MessageEmbed()
        .setTitle("Support Server!")
        .setURL("https://www.discord.com/invite/mmhFvMB/")
        .setColor("#00d4ff")
        .setFooter("Requested by: " + message.author.tag, message.author.displayAvatarURL({dynamic:true,size:2048}))
        .setThumbnail(bot.guilds.cache.get("673296922072711229").iconURL({dynamic:true,size:2048}))
        msg.channel.send(bed)
    }
    if (msg.content.startsWith(prefix + "report")) {
        const channel = bot.channels.cache.get('736697159784857692');
    const used = new Discord.MessageEmbed()
        .setTitle('Report!')
        .setColor(embedcolor)
        .setDescription('**User Tag:** ``' + msg.author.tag + '``\n**User ID:** ``' + msg.author.id + '``\n**Message:** ``' + msg.content.slice() + '``\n**Channel ID:** ``' + msg.channel.id + '``\n**Channel Name:** ``' + msg.channel.name + '``\n**Guild:** ``' + msg.guild.name + '``\n**Guild ID:** ``' + msg.guild.id + '``\n**Date:** ``' + msg.createdAt + "``")
        .setThumbnail(msg.guild.iconURL())
    channel.send(used)
    msg.react('👍');
    }
    if (msg.content.startsWith(prefix + "blacklist-role")) {
            let perms = msg.member.permissions;
            if (!perms.has("MANAGE_ROLES")) {
                msg.channel.send("You are missing the ``MANAGE_ROLES`` Permission!");
                return;
            }
            if (!perms.has("MANAGE_CHANNELS")) {
                msg.channel.send("You are missing the ``MANAGE_CHANNELS`` Permission!");
                return;
            }
            const withoutPrefix = msg.content.slice(prefix.length);
            const split = withoutPrefix.split(/ +/);
            const command = split[0];
            const arg = withoutPrefix.slice(command.length).split(/ + /).join(" ").toLowerCase().replace(" ", "");
            let roles = "";
            if (msg.mentions.roles.first()) {
                roles = await msg.guild.roles.cache.array().filter(r => r.id == msg.mentions.roles.first().id);
            }
            if (!roles && isNaN(arg)) {
                roles = await msg.guild.roles.cache.array().filter(r => r.name.toLowerCase().startsWith(arg.toLowerCase())).slice(0, 10);
            }
            if (msg.guild.roles.cache.get(arg) !== undefined) {
                roles = await msg.guild.roles.cache.array().filter(r => r.id == arg).slice(0, 10);
            }
            if (!roles || roles.length < "1") {
                if (arg.toLowerCase() == "none" || arg.toLowerCase() == "disable" || arg.toLowerCase() == "delete" || arg.toLowerCase() == "off") {
                    db.set("bl" + msg.guild.id, { id: "na" });
                    let bed = new Discord.MessageEmbed();
                    bed.setTitle("Blacklisted Role!");
                    bed.setColor(msg.guild.me.displayHexColor)
                    bed.setDescription("Blacklisted role disabled");
                    msg.channel.send(bed)
                    return;
                }
            }
            if (!roles || roles.length < "1") {
                msg.channel.send("No Roles found! ``" + arg.toLowerCase() + "``");
                return;
            }
            let index = 0;
            let map = roles.map(role => `**${++index}.** <@&` + role.id + "> - ``" + role.id + "`` - **" + role.name + "**")
            if (roles.length > "1") {
                let test = new Discord.MessageEmbed();
                test.setTitle("Fetched!")
                test.setColor("008000");
                test.setDescription(map);
                test.setFooter("Please Select choose a number 1-" + roles.length + "!")
                msg.channel.send(test)
                try {
                    var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content <= roles.length && msg2.author.id == msg.author.id, {
                        max: 1,
                        time: 50000,
                        errors: ["time"]
                    });
                } catch (err) {
                    console.error(err);
                    return msg.channel.send("No or invalid value entered, cancelling role selection...");
                }
                const roleIndex = parseInt(response.first().content);
                let role = msg.guild.roles.cache.get(roles[roleIndex - 1].id)
                db.set("bl" + msg.guild.id, { id: role.id })
                let bed = new Discord.MessageEmbed();
                bed.setTitle("Blacklisted Role!");
                bed.setColor(role.color)
                bed.setDescription("``" + role.name + "`` is now Blacklisted!");
                bed.setFooter("Only 1 role can be blacklisted")
                msg.channel.send(bed)
                return;
            }
            if (roles.length = "1") {
                role = msg.guild.roles.cache.get(roles[0].id)
                db.set("bl" + msg.guild.id, { id: role.id })
                let bed = new Discord.MessageEmbed();
                bed.setTitle("Blacklisted Role!");
                bed.setColor(role.color)
                bed.setDescription("``" + role.name + "`` is now Blacklisted!");
                bed.setFooter("Only 1 role can be blacklisted")
                msg.channel.send(bed)
                return;
            }
    }
});
bot.login("token")
