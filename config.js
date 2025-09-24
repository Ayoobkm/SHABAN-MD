const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0RqWWQ5TndnTzR1M3RudTh6OFlOTlRXRTBWYXhXT29GL0xaakRDWXpGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVBwWURtcFBYaUlNWXlsSHZhNWhwZHNaVFIzRWx0c3hRcld4RWk3Sk1pZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRmxHd1R2Q28zQWMrNWhDY2RyOXFaME90SlNRS3hjeWJnQi9NSXkvYVV3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCeVZNcFp2aEdURkpPQW1KRENIaEhjUzhzN2JDc3BaL3ZtUExZQnhEaHdRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1KcXlEZGg0Wk1kWWwxZ0xQMXBBQ2ZHTEZiKzlOMjBWcUVHcWJzWkVwRXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikl3VXhwNklXWnZvVHdFZ3RpdDJTZUw3eUlPTW1uc3pRcFpnWnZhTW1YRUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS01yT2tqcDJqU1R0MjAzNlpncFNyayt6Mm1GVm1mc0VJVnNLc0lxYmprcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUdGZ25BNWZyVE04eHhVRGpwRXpsdmtwOHpyV0NqVmtZTUxzdGovL1lCaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJ1ajh4RmdwdjFxWTljbWZwNG9oa1FvUjdBcEhYUTBkMWt5YitpRVMwUUVHeFBLQjIwd2NldHdFQVFTR3ZQWkp2eTYrME5JUnhSM2MvVXR4L0RuL0JnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkzLCJhZHZTZWNyZXRLZXkiOiJaWVRQeHRSZ1A1eHFWQXluSkl2U2NMOWNkZXd1dnBvdCtvZ01iOHYxMi9ZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI4QkM3RE5MVCIsIm1lIjp7ImlkIjoiNjAxMTE3NTA4NTI1OjY0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlpBWUFOX1NFUiIsImxpZCI6IjU3NDgwMTUxMzM5MTk3OjY0QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzNxNm9ZR0VOSFB6OFlHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoib2owWjBWUG1ORmdWNk5ERGxmNTg0UVo4MVlJaWJ2ZWtTUWxYN2lPTmJTRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZEM3QThCbjNJcjlXWG1kUjBzYlRYMEVGQWh5THdMakNPcVNqRmxEZjBwakEvQnR0QjlkVXFhNjF1YlU2aGRJQ0czTWJwcS9LRklLaHFkMVdHQlBkRGc9PSIsImRldmljZVNpZ25hdHVyZSI6ImNzeHVxT29XS1RHSGlKMm13MDZNMWI4czl1RzdqbG1RWkxTYjMvOVQ5aVQ0dHhqOHNYbm9ZRWpUL2Q2SGZwODNqMnNkU0Q0cUhaQk83c3hHcWlNT0JRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNjAxMTE3NTA4NTI1OjY0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFJOUdkRlQ1alJZRmVqUXc1WCtmT0VHZk5XQ0ltNzNwRWtKVis0ampXMGgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1ODcxNzkwNywibGFzdFByb3BIYXNoIjoiMlAxWWhmIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEK28ifQ==",
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
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/uf9nsz.jpg",
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
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/xSgr0P8L/shaban-md.jpg",
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
ANTI_CALL: process.env.ANTI_CALL || "true",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
