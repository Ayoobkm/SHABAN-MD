const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0dUSW9YdGI2eDMxVzJtT0twVWJzZzY3YzlKbFlDY2pJZVFFdzBmY1dHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVNCSjhJZ0pzLzFDZHlDc2oyUGx4TEdJMFBibkJ1VmIzaUIrcldMMkFIMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTjIybnIzOUQ5cng2TTFIREhOTGFqYlc4c2ZScDJDZzBjUis3RlFmRWs4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0YjJVZkQrYkRLakorVFhTaW1Dd2hDaitOZS9xNjQ1WVRSOWgxbmpiYVdjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJLbTh1a1dCRkhBc2x3ZUJXZ0Z0TDN6RlhMa0lZWVIvS3JMNTROUTJRV0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBIOVhjTjJvZ0dIUjFIZzl3WitHMGMzV25ud2RKZHIxQlFBSXhRMkx6VEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUh3VU5wMWlrQXJXQnVxMnloZEtKdllmdWpGb0ExcFBSV1laSjN0RWQxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSlNqQ2dHTjZBNitqZ1dYNHkrd0N2Zy94cGRUOUdtbmJaUWZFS1dEdGFnMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhCa0xKaElUa2x2d3NsNFo3Z0JQMnV4eXJqa29vZE1HRG4zanZnTDh0YjM1TElMMjkwVmIvZm9SeVFFOHU5RkVFMjdiWEh0blI2TjM0OWtWeVpoeGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzAsImFkdlNlY3JldEtleSI6IjBZTi8zN0YreDZ5Nml0UjYxaWxqeGsvUEpKeFYxckpVK2NLc2dwakxndjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlhaMVJQWkwzIiwibWUiOnsiaWQiOiI2MDExMTc1MDg1MjU6NTdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiemFuIiwibGlkIjoiNTc0ODAxNTEzMzkxOTc6NTdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKZXZqTWNHRU92ZHRjWUdHQnNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ3MzdqV1draG9FVWdTdkF2N3d4R3B6c2FPV0ptS0dIM0kySkdKY2s0Sm5RPSIsImFjY291bnRTaWduYXR1cmUiOiJJQnRabTFhZ3FraURtTE5EMUovaDZYdVpsN29pR2FCL2xJaW1JLzZnbkdCWEl3bU0wdjhna0thWkg4WEhWYVorcXlvSEZ3RmQ2MDRQajI0bzZMTElEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMkRQdnQyQmJzYjJhUW8xRm9UVkhnd3E2cndLUXpzL1JPWklEcUdJR0E3YVZsNG1yNCtkUWwwTXNLNUhncmQ2SGpsV24wZUt0bmxzeHEwVnVtRWNKZ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI2MDExMTc1MDg1MjU6NTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY04rNDFscElhQkZJRXJ3TCs4TVJxYzdHamxpWmloaDl5TmlSaVhKT0NaMCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU4MjkzNzQyLCJsYXN0UHJvcEhhc2giOiIyUDFZaGYiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFtaCJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "ZAYAN_SER",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ZAYAN_SER",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself  
OWNER_NUMBER: process.env.OWNER_NUMBER || "601117508525",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ZAYAN_SER",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ ZAYAN_SER*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups  
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "601117508525",
//replace with your whatsapp number        
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
