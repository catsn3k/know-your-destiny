// Defining constant variables
const discord = require("discord.js");
const bot = new discord.Client();
const dotenv = require("dotenv").config();
const http = require("http");
const express = require("express");
const app = express();
const _ = require("underscore");
const fs = require('fs');
const token = process.env.BOT_TOKEN;
// Loading data from the .env file
dotenv.load;
// /!\ This bot contains very explicit and offensive content, take this into consideration as it does not demonstrate or reflect the creator's true personality, beliefs, or ideologies. /!\
// YOU ARE #1A:
// randText1 => rand1
var randText1 = [ 
  "Aids",
  "Alpha",
  "Basement",
  "Battle",
  "Beautiful",
  "Bi-polar",
  "Bizarro",
  "Black",
  "Blast",
  "Boner",
  "Booze",
  "Boss",
  "Bubonic",
  "Buff",
  "Captain",
  "Chief",
  "Cocaine",
  "Commander",
  "Dark",
  "Diamond",
  "Dildo",
  "Doctor",
  "Dragon",
  "Easy",
  "Emperor",
  "Eternal",
  "Ether",
  "Excellent",
  "Faggy",
  "Fat",
  "Fire",
  "Flaming",
  "Funky D.",
  "Gangster",
  "Genocide",
  "Golden",
  "Good Ol'",
  "Hammer",
  "Handsome",
  "Hard",
  "Hitlers",
  "Homicide",
  "Hopeless",
  "Inferno",
  "Iron",
  "Jackhammer",
  "Jesus",
  "Jiggly",
  "Lazy",
  "Lightning",
  "Lonely",
  "Machinegun",
  "Magnificent",
  "Magnus",
  "Mammoth",
  "Marxist",
  "Master",
  "Mega",
  "Mellow",
  "Meme",
  "Nigger",
  "Nostalgia",
  "Omega",
  "Penis",
  "Piss",
  "Psycho",
  "Pussy",
  "Radiant",
  "Red",
  "Revolver",
  "Ripped",
  "Robo",
  "Rogue",
  "Ruthless",
  "Shining",
  "Shiny",
  "Shotgun",
  "Silent",
  "Space",
  "Stigma",
  "Stinky",
  "Stone Cold",
  "Stoned",
  "Super",
  "Tantrum",
  "Thunder",
  "Tiny",
  "Ultra",
  "Vomit",
  "W.T.",
  "Waffen-SS",
  "Welfare",
  "Wheelchair",
  "White",
  "Whore",
  "Wild",
  "Father",
  "King",
  "Long John",
  "Mr.",
  "Samuel L."
]; // randText1
var givenName1 = _.shuffle(randText1);

// YOU ARE #2B:
// randText2 => rand2
var randText2 = [
  "2000",
  "Advocate",
  "Alien",
  "Anon",
  "Assassin",
  "Asspie",
  "Autist",
  "Cancer",
  "Chef",
  "Christ",
  "Cobra",
  "Cthulhu",
  "Destroyer",
  "Dwarf",
  "Eater",
  "Failure",
  "Fighter",
  "Ghost",
  "God",
  "Hacker",
  "Hernandez",
  "Hunter",
  "Jesus",
  "Jew",
  "Killer",
  "Kong",
  "Lector",
  "Marine",
  "Martyr",
  "Master",
  "Maximus",
  "Mc Donald",
  "Mc Gyver",
  "Moe",
  "Monger",
  "Nigger",
  "Pedo",
  "Penis",
  "Preacher",
  "Prime",
  "Ranger",
  "Rapist",
  "Recluse",
  "Reject",
  "Retard",
  "Saurus",
  "Savior",
  "Shoggoth",
  "Sleeper",
  "Slob",
  "Snacks",
  "Sniper",
  "Soldier",
  "Spectre",
  "Tiger",
  "Turd",
  "Virgin",
  "X",
  "Commando",
  "Adolf",
  "Bob",
  "Boy",
  "Dad",
  "Fag",
  "Faggot",
  "Jack",
  "Jim",
  "Joe",
  "Man",
  "Pedro",
  "Raúl",
  "Simon",
  "Snake"
]; // randText2 #2B
var givenName2 = _.shuffle(randText2);

// THE #1A:
// randText3 =math> rand3
var randText3 = [
  "Abandoned",
  "Acne-Ridden",
  "Admired",
  "Adorable",
  "Annoying",
  "Anonymous",
  "Autistic",
  "Awe-Inspiring",
  "Basement-Dwelling",
  "Bi-Polar",
  "Bloodthirsty",
  "Braindead",
  "Brooding",
  "Brutal",
  "Calloused",
  "Chosen",
  "Clever",
  "Cold-Blooded",
  "Colossal",
  "Cute",
  "Death-Defying",
  "Depressed",
  "Depressing",
  "Desperate",
  "Dumb As Shit",
  "Evil, Evil",
  "Exalted",
  "Exceptional",
  "Fabled",
  "Feared",
  "First",
  "Flawless",
  "Flying",
  "Fresh",
  "Friendly",
  "Glamorous",
  "Greasy",
  "Grim",
  "Hallowed",
  "Hardened",
  "Hardest",
  "Heroic",
  "Homicidal",
  "Hopeless",
  "Horny",
  "Howling Mad",
  "Hulking",
  "Humungous",
  "Hungry",
  "Immortal",
  "Impeccable",
  "Indestructable",
  "Infallible",
  "Insane",
  "Insane",
  "Introverted",
  "Ideal",
  "Last",
  "Lazy-Ass",
  "Leading",
  "Legendary",
  "Lost",
  "Manic",
  "Marked",
  "Massive",
  "Medicated",
  "Mooching",
  "Morbidly Obese",
  "Mouth-Breathing",
  "Nervous",
  "Omnipotent",
  "One And Only",
  "Original",
  "Perfect",
  "Plagued",
  "Pretty Cool",
  "Probably First",
  "Probably Last",
  "Raging",
  "Rejected",
  "Right",
  "Rogue",
  "Ruthless",
  "Scrawny",
  "Shizophrenic",
  "Shut-In",
  "Silent",
  "Slobby",
  "Solemn",
  "Strong",
  "Successful",
  "Supreme",
  "Thirsty",
  "Tough",
  "Tragic",
  "Unbelievably Fat",
  "Unstoppable",
  "Untamed",
  "Very Angry",
  "Vigilante",
  "Wanted"
]; // randText3 #1A
var givenName3 = _.shuffle(randText3);

// THE #2B:
// randText4 =math> rand4
var randText4 = [
  "Adept",
  "Alchemist",
  "Anon",
  "Assassin",
  "Avatar",
  "Basement-Dweller",
  "Behemoth",
  "Berserker",
  "Child Molester",
  "Christian",
  "Colossus",
  "Creeper",
  "Daemon",
  "Deity",
  "Demi-God",
  "Destroyer",
  "Drifter",
  "Dungeon-Master",
  "Emperor",
  "Failure",
  "Farseer",
  "Fatass",
  "Geek",
  "Genius",
  "Giant",
  "Goblin",
  "God",
  "Guardsman",
  "Hacker On 'Roids",
  "Hacker",
  "Horror",
  "Killer",
  "Lurker",
  "Master-Troll",
  "Mercenary",
  "Mooch",
  "Moron",
  "Munchkin",
  "Murderer",
  "Nerd",
  "Nigger",
  "One",
  "Overlord",
  "Peace-Keeper",
  "Pedo",
  "Pest",
  "Priest",
  "Prince",
  "Professional",
  "Psychopath",
  "Psyker",
  "Commissar",
  "Rapist",
  "Reaper",
  "Reject",
  "Retard",
  "Ruler",
  "Savior",
  "Sheriff",
  "Slob",
  "Sniper",
  "Sociopath",
  "Stalker",
  "Supermodel",
  "Tard",
  "Tripfag",
  "Troll",
  "Vampire",
  "Wanderer",
  "Warrior",
  "Whale",
  "Zombie",
  "Vermin",
  "Warlock",
  "Wizard",
  "Superhero",
  "Hero",
  "Guy",
  "Manchild"
]; //randText4 #2B
var givenName4 = _.shuffle(randText4);

// DESTINED TO #1A:
// randText5 =math> rand5
var randText5 = [
  "Annihilate",
  "Aquire",
  "Ban",
  "Baptize",
  "Battle With",
  "Be Consumed By",
  "Be Disappointed By",
  "Be Inferior To",
  "Be Loved By",
  "Be Murdered By",
  "Be Superior To",
  "Be The Master Of",
  "Be The Scourge Of",
  "Break",
  "Brutalize",
  "Burn",
  "Buyout",
  "Challenge",
  "Change",
  "Cleave",
  "Confine",
  "Consume",
  "Cut",
  "Defeat",
  "Destroy",
  "Devour",
  "Die Eating",
  "Die In Battle With",
  "Die To",
  "Discover",
  "Do Away With",
  "Do Nothing About",
  "Dominate",
  "Drill",
  "Drink The Blood Of",
  "Duel With",
  "Eat",
  "End",
  "End",
  "Enjoy",
  "Enslave",
  "Eradicate",
  "Fail",
  "Feast Upon",
  "Fuck",
  "Get Killed By",
  "Get Raped By",
  "Get Rid Of",
  "Get Slain By",
  "Get Visited By",
  "Hack",
  "Have Sex With",
  "Incinerate",
  "Invade",
  "Judge",
  "Kidnap",
  "Lead",
  "Liberate",
  "Lose To",
  "Make Love With",
  "Mercilessly Rule",
  "Molest",
  "Mooch Off",
  "Murder",
  "Oppress",
  "Overcome",
  "Overthrow",
  "Pierce",
  "Rape",
  "Reclaim",
  "Redefine",
  "Reeducate",
  "Reinvent",
  "Rule ",
  "Sage",
  "See",
  "Sell",
  "Sexually Harass",
  "Slaughter",
  "Slay",
  "Sleep With",
  "Snack On",
  "Soon Meet",
  "Sort Out",
  "Stalk And Rape",
  "Steal",
  "Study",
  "Subdue",
  "Take Back",
  "Taste The Flesh Of",
  "Troll",
  "Turn Shit Into",
  "Win",
  "Wrestle With",
  "Be King Of"
]; //randtext5 #1A
var givenName5 = _.shuffle(randText5);

// DESTINED TO #2B:
// randText6 =math> rand6
var randText6 = [
  //"/a/", 
  "/b/", 
  //"/c/", 
  //"/d/", 
  //"/e/", 
  "/f/", 
  //"/g/", 
  //"/gif/", 
  "/h/", 
  //"/hr/", 
  "/k/", 
  //"/m/", 
  //"/o/", 
  //"/p/", 
  //"/r/", 
  //"/s/", 
  //"/t/", 
  //"/u/", 
  "/v/",
  //"/vg/", 
  //"/vr/", 
  //"/w/", 
  //"/wg/",
  //"/i/",
  //"/ic/",
  "/r9k/", 
  "/s4s/", 
  //"/vip/", 
  //"/qa/", 
  "/cm/", 
  "/hm/", 
  "/lgbt/", 
  "/y/", 
  //"/3/", 
  //"/aco/", 
  //"/adv/", 
  //"/an/", 
  //"/asp/", 
  //"/bant/", 
  //"/biz/", 
  //"/cgl/", 
  //"/ck/", 
  //"/co/", 
  //"/diy/",
  //"/fa/",
  //"/fit/",
  //"/gd/",
  //"/hc/",
  //"/his/",
  //"/int/",
  //"/jp/",
  //"/lit/",
  "/mlp/",
  //"/mu/",
  //"/n/",
  //"/news/",
  //"/out/",
  //"/po/",
  "/pol/",
  //"/qst/",
  //"/sci/",
  //"/soc/", 
  //"/sp/",
  //"/tg/",
  //"/toy/",
  //"/trv/",
  //"/tv/",
 // "/vp/",
  //"/wsg/",
  //"/wsr/",
  "/x/",
  "4chan",
  "Africa",
  "Aids",
  "Angels",
  "Babies",
  "Big Boss",
  "Cakes",
  "Cancer",
  "Children",
  "Dead People",
  "Death",
  "Europe",
  "Everyone",
  "Fried Chicken",
  "Furries",
  "Germany",
  "God",
  "Goiters",
  "Jews",
  "Kings",
  "Life",
  "Mankind",
  "Men",
  "Moot",
  "Niggers",
  "Nothing",
  "Original Content",
  "Pedobear",
  "Poland",
  "Rapists",
  "Russia",
  "Shit",
  "Society",
  "STDs",
  "The Damned",
  "The Eye Of Terror",
  "The FBI",
  "The Gods",
  "The Government",
  "The Heavens",
  "The Innocent",
  "The Internet",
  "The Little People",
  "The Lost Ones",
  "The Memes",
  "The Old Ones",
  "The Party Van",
  "The Police",
  "The Poor People",
  "The Rich People",
  "The Skies",
  "The Trolls",
  "The Universe",
  "The Warp",
  "The Whitehouse",
  "The World",
  "Tibet",
  "Time",
  "Valhalla",
  "Vikings",
  "Whores",
  "Women",
  "Zombies"
]; //randText6 #2B
var givenName6 = _.shuffle(randText6);

// Bot startup
bot.on("ready", () => {
  // Sets the game.activity
  bot.user.setActivity(
    "Type `.kyd` to find out your destiny! \n Type `.kydinfo` for more details!"
  );

  // Confirms that the bot is active
  console.log("Niggers!");
});

// Defining a prefix for commands
const prefix = ".";

// Defaults message => msg
bot.on("message", msg => {
  // Defining the prefix
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  // Command to Know Your Destiny
  // Chooses a random value from the arrays
  // Six total destinies
  if (command === "kyd") {
    let rand1 = givenName1[Math.floor(Math.random() * givenName1.length)];
    let rand2 = givenName2[Math.floor(Math.random() * givenName2.length)];
    let rand3 = givenName3[Math.floor(Math.random() * givenName3.length)];
    let rand4 = givenName4[Math.floor(Math.random() * givenName4.length)];
    let rand5 = givenName5[Math.floor(Math.random() * givenName5.length)];
    let rand6 = givenName6[Math.floor(Math.random() * givenName6.length)];

    // Replies to the user with their brand new destiny!
    msg.reply(
      "\n***YOU ARE***\n" +
        "`" +
        rand1 +
        "`" +
        " " +
        "`" +
        rand2 +
        "`" +
        "\n***THE***\n" +
        "`" +
        rand3 + "`" 
      + " " +
        "`" + rand4 +
        "`" + "\n***DESTINED TO***\n" +
        "`" + rand5 + 
        "`" 
      + " " + 
        "`" +
        rand6 +
        "`" 
     );
  };

  // Command for displaying all combinations of destinies to choose from
  /* pastebin.js is now depreceated, this is what is left
  if (command === "kydall") {
    
    let combo12 = [];
    let combo34 = [];
    let combo56 = [];
    let comboLen1 = [];
    let comboLen2 = [];
    let comboLen3 = [];
        
        msg.channel.send("This command should post three links in order, if not retry the command \n Confirm this command by reacting with thumbs up, cancel with thumbs down");
        msg.react('👍').then(() => msg.react('👎'));
    
        const filter = (reaction, user) => {
          return ['👍', '👎'].includes(reaction.emoji.name) && user.id === msg.author.id;
        }; 

        msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
          .then(collected => {
            msg.channel.bulkDelete(2);
            const reaction = collected.first();

            if (reaction.emoji.name === '👍') {
              } else if (reaction.emoji.name === '👎') {
                msg.channel.send('You have canceled the command.');
                msg.channel.bulkDelete(3);
                return;
              }
              
            // Loops for combining arrays
            for(var i = 0; i < randText1.length; i++)  {
                 for(var j = 0; j < randText2.length; j++)  {
                   combo12.push(' ' + randText1[i] + ' ' + randText2[j])
                }}

            for(var i = 0; i < randText3.length; i++)  {
                 for(var j = 0; j < randText4.length; j++)  {
                   combo34.push(' ' + randText3[i] + ' ' + randText4[j])
                 }};

            for(var i = 0; i < randText5.length; i++)  {
                 for(var j = 0; j < randText6.length; j++)  {
                   combo56.push(' ' + randText5[i] + ' ' + randText6[j])
                 }};

            let comboLen1 = randText1.length * randText2.length
            let comboLen2 = randText3.length * randText4.length
            let comboLen3 = randText5.length * randText6.length
            
          let pastebin = new pastebinAPI({
                  'api_dev_key' : '427e30828d19cd7b171e34b46a173235',
                  'api_user_name' : 'knowyourdestiny',
                  'api_user_password' : 'ype2r6xK@myZeYY'
                }); 
         let timer = setTimeout(linkPaste, 1500);
         function linkPaste() {
            pastebin.createPaste({
              text: 
                  "Complete available combination of the first (YOU ARE) choices from the kyd-bot \n" + combo12,
              privacy: 3,
              title: "List of (YOU ARE) combinations from kyd-bot",
              expiration: '1D'
            })
                .then(function(data) {
                          msg.channel.send("(YOU ARE) " + data);
                          console.log(data);
                      })
                      .fail(function (err) {
                          msg.channel.send("An error has occurred due to the pastes reaching the maximum amount of pastes or some other issue the dev doesn't know about");
                          msg.bulkDelete({timeout: 3000}, 2);
                          console.log(err);
                          return;
                })
         };
          let timer2 = setTimeout(linkPaste2, 2500);
          function linkPaste2() {
            pastebin.createPaste({
              text: 
                  "Complete available combinations of the second (THE) choices from the kyd-bot \n" + combo34,
              privacy: 3,
              title: "List of (THE) combinations from kyd-bot",
              expiration: '1D'
            })
                .then(function (data2) {
                    msg.channel.send("(THE) " + data2);
                    console.log(data2);
                })
                .fail(function (err) {
                    msg.channel.send("An error has occurred this is due to the amount of pastes (you can check at https://pastebin.com/u/knowyourdestiny max is 10 pastes) that have been made or some other issue the dev doesn't know about");
                    msg.bulkDelete({timeout: 3000}, 2);
                    console.log(err);
                    return;
                })
         };
          let timer3 = setTimeout(linkPaste3, 3000);
          function linkPaste3() {
            pastebin.createPaste({
              text: 
                  "Complete available combinations of the third (DESTINED TO) choices from the kyd-bot \n" + 
                  combo56 + 
                  "\n\n Complete available combinations \n" +
                  comboLen1 + " (YOU ARE)" +
                  "\n" +
                  comboLen2 + " (THE)" +
                  "\n" +
                  comboLen3 + " (DESTINED TO)",
              privacy: 3,
              title: "List of (DESTINED TO) combinations from kyd-bot",
              expiration: '1D'
            })
                .then(function (data3) {
                    msg.channel.send("(DESTINED TO (and total number of combinations)) " + data3);
                    console.log(data3);
                })
                .fail(function (err) {
                    msg.channel.send("An error has occurred this is due to the amount of pastes (you can check at https://pastebin.com/u/knowyourdestiny max is 10 pastes) that have been made or some other issue the dev doesn't know about");
                    msg.bulkDelete({timeout: 3000}, 2);
                    console.log(err);
                    return;
                })
         };
      })
          .catch(collected => {
                msg.channel.delete();
                msg.channel.send("Next time, try not to get distracted");
                msg.delete({timeout: 3000});
      });
    }; */
      
  // Gives the user the amount of total choices to choose from for their destiny
  if (command === "kydlist") {
    // Basic math for the adding all of the lengths of the arrays
    let listValues =
      randText1.length +
      randText2.length +
      randText3.length +
      randText4.length +
      randText5.length +
      randText6.length;
    msg.reply(
      "There is a total of " +
        "`" +
        listValues +
        "`" +
        " different options to choose from your ***DESTINY!***"
    );
  };

  // Info on what commands the bot holds and also links the user to the source
  if (command === "kydinfo") {
    // Look away!  Incoming a disgusting string, I don't know how to make this more beautiful so I'm just going to leave this here
    msg.author.send(
      "```-==================|List of Commands|===================-\n\n.kyd => Gives the user their destiny!\n.kydlist => Lists the amount of choices that are available for the user's destiny!\n.kydall => Lists all known combinations for a destiny and compiles it all into a pastebin (CURRENTLY NOT WORKING)\n\n-====================|Information|======================-\n\nTIP: You can send commands to the bot in Direct Messages without spamming a text channel!\n\n-catsn3k```"
    );
  }
});
// Bot token
// Located in .env
bot.login(token);