const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0pvcUxqSmtzbTkvalJISmhrMkhiSWlodXZVRFc1Ry90NzJiWkhTRWJWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmNzRTNQMFNkUEQrS3VKbEgrOUh5bHJnQWx1YUF3QloyeklWZW1RaW1Tcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTC9oRzhaZFNyQ0V6RHZzQ25DTDZJa0RqdEN1aEpoU25SdENlRzlkd253PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkWjB3VHM3SERPeDg0K2xGTFBkWG9MZjV1ejRMdkk1UUhBMlVDVHV1eHlFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9QNVRoamcyNDRNUjk0WW1CZFlvN0tDN212NEZpZFVhSHdSUWVkaFVrbWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJtSU55c1p6Z3dLbVlpa1ZsRFFlK003eXY5a2VVUll5eTFKTmtrNFNPWDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0tKRGF6ZjE0TmoxT08xTHErZUhYQXFmdFNweFd5UkdOam0yTStPN1dIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmd2ZE9OS1h3TFlSSTIrK0k3ZGNyOHVrUWFhUFhjYzNlOUI2R25uMytEOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjgzQzJqby9TenVBeG9DQzltZ2duZUZBZnVlY0Z4VUJGN0NHcFdDcHB2ZUg4bHI5aW53Ykc3TWF0OVYzWmhvK05UYTZObW9Va3JlbE5LMjNOand1WGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYxLCJhZHZTZWNyZXRLZXkiOiJjSTllYTRYQkdSSFJBdnRVakMyaDFPam5kOWdqZk5pYm5PYnlMN0RuOU80PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjYwMTExNzUwODUyNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUUwQkI0ODA3OUYyMTQwODhEQjZFODM2NUMzMEJBMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU5NTQ5MjUwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI2TVdMQ1A3MSIsIm1lIjp7ImlkIjoiNjAxMTE3NTA4NTI1OjczQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlpBWUFOX1NFUiIsImxpZCI6IjU3NDgwMTUxMzM5MTk3OjczQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTERxNm9ZR0VMcXVnc2NHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiU0JUS214eUhzZ2ppVmprNE56bHBoOXkyOTVibU4ySHBnekJSZGY0TlV5OD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSkJRbXdNMk5CU1NOY2sxT3BOZENPR3oyOHQ0UkVRZnJSRGNYa1phZkZmeWVYSlFVdG50OUFhTnI4d2RTeVFsa0lpbmMrNTR4NVRWV2FISk04SmhXQkE9PSIsImRldmljZVNpZ25hdHVyZSI6InVHSktGYjlxNk53ZThKazhkMzhiRXNCMWF5RVRVOENGSnoyMGthc0ZHMmZQUUFvNjJXdzlldE9SYWViRHlQcDh6aTdWUkZqaXRtZHlwNEJINlpFR2h3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNjAxMTE3NTA4NTI1OjczQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVnVXlwc2NoN0lJNGxZNU9EYzVhWWZjdHZlVzVqZGg2WU13VVhYK0RWTXYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1OTU0OTI0NSwibGFzdFByb3BIYXNoIjoiMlAxWWhmIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHRjgifQ==",
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
PREFIX: process.env.PREFIX || "!",
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
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups  
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
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
