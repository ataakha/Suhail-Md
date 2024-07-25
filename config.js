const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923346690239";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_24_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NixcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3MixcbiAgICAgICAgNTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3MixcbiAgICAgICAgODQsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0LFxuICAgICAgICA2NixcbiAgICAgICAgNjIsXG4gICAgICAgIDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMixcbiAgICAgICAgODMsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDUwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDg1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNixcbiAgICAgICAgNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDg3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzLFxuICAgICAgICA3MixcbiAgICAgICAgMjEsXG4gICAgICAgIDYyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTksXG4gICAgICAgIDk0LFxuICAgICAgICAxMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODcsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTksXG4gICAgICAgIDM0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDk4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDksXG4gICAgICAgIDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMixcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMixcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MixcbiAgICAgICAgMTk0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjksXG4gICAgICAgIDk1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NixcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZZd005cFM4aktVeWR3aFFxb3VlaTBsQ2VodXJ1SWpNV3EyU3lxUXh1VGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInB2THUyQWdjU2NXTDhua2xtcDh1TVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzM0NTllYTUtOTgyMi00MDkwLWI2ZWEtNjliN2ZlMGUxOTJmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MCxcbiAgICAgIDUwLFxuICAgICAgMTczLFxuICAgICAgMjEwLFxuICAgICAgOTYsXG4gICAgICA2MSxcbiAgICAgIDc4LFxuICAgICAgOTcsXG4gICAgICAxMTcsXG4gICAgICAxNzAsXG4gICAgICA2MixcbiAgICAgIDEwNixcbiAgICAgIDY1LFxuICAgICAgMjA3LFxuICAgICAgMjMwLFxuICAgICAgMjM5LFxuICAgICAgMTQ2LFxuICAgICAgNjcsXG4gICAgICAxNzIsXG4gICAgICAyNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjksXG4gICAgICAyMDcsXG4gICAgICAxMjEsXG4gICAgICAyMTksXG4gICAgICAzNSxcbiAgICAgIDE2NSxcbiAgICAgIDIwNSxcbiAgICAgIDkxLFxuICAgICAgMixcbiAgICAgIDEwNixcbiAgICAgIDc2LFxuICAgICAgNTQsXG4gICAgICAyMyxcbiAgICAgIDQ2LFxuICAgICAgMTE3LFxuICAgICAgNzksXG4gICAgICAzOSxcbiAgICAgIDEyMyxcbiAgICAgIDI0MixcbiAgICAgIDEzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZS1lXWjU3M1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzQ2NjkwMjM5OjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTXVza2FuXCIsXG4gICAgXCJsaWRcIjogXCIyNjM0ODgwNzMxMjE5MTA6NDRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEcvcVpJQ0VKcjRpYlVHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYeWVDZk16QzYvSFlNVkNOaHBWck9BYmdiUVZwUVVtVERicnZmYUZxNlVBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImUzVE0zbXF1dk0wQXhMWllWeG03UzVBbjJUR0dhdU8zYzZYU1hyeTlGQURhSGRPejVtOHd0WVlxTTB3aTJRbmtGOUFEVzJ4eXc3ZTljZ05mSnJrZEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm1qTlRpNUxVZVUwTVRMUVMxV1NZZEtrMlhoM2orLzRBcVQ3cTVOblR5T3EyWGtMMFRSNllaeEpRL1NnYTFJNGFkamZJNVVkUmZEbFQwVU50QTdWNEJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzM0NjY5MDIzOTo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxOTI0NjM3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTkJvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOQm8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJnbGxQenBRbmsvSDhkN2pxQ3p5L0VMZGtzdEJwcnNzWXV3L000RXVqaDJFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU3NTI5OTUwNSxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsNV19LFwidGltZXN0YW1wXCI6XCIxNzIxOTI0NTAxMjExXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
