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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_49_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAzLFxuICAgICAgICA1MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjksXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjU0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1NixcbiAgICAgICAgMTkxLFxuICAgICAgICA2MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDczLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwLFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDcxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAzNixcbiAgICAgICAgMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgODAsXG4gICAgICAgIDQsXG4gICAgICAgIDAsXG4gICAgICAgIDcwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMixcbiAgICAgICAgNTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA4NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDksXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICA1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMixcbiAgICAgICAgMTQzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDk4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNixcbiAgICAgICAgMTY0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDk0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxODksXG4gICAgICAgIDE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImFyN2d1dllpTGtXb1RnZnBncnRubHRuNW1wNjZXcHRpR2ZKQmtkN01YZGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzQ2NjkwMjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDQUM2QTUwRUQyMzk3RDk2MEZEN0I2RDdFMTE3ODY1MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIyNTczODNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUkNsMG1zeG5RMzJudjM4MmNMSEJGQVwiLFxuICBcInBob25lSWRcIjogXCI3N2M2NDZhZi04MzRmLTQxMzItOWJhMC0xODVhZmUxMjBkZmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMyLFxuICAgICAgNzcsXG4gICAgICAxMDUsXG4gICAgICAxNDksXG4gICAgICA2NixcbiAgICAgIDI1MSxcbiAgICAgIDE1MSxcbiAgICAgIDIwLFxuICAgICAgODUsXG4gICAgICA5MixcbiAgICAgIDg3LFxuICAgICAgNzYsXG4gICAgICAxLFxuICAgICAgMzMsXG4gICAgICA0MCxcbiAgICAgIDYyLFxuICAgICAgMTQ2LFxuICAgICAgNTksXG4gICAgICAzMixcbiAgICAgIDE1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTgsXG4gICAgICA1NyxcbiAgICAgIDg2LFxuICAgICAgMjA4LFxuICAgICAgMjYsXG4gICAgICA1MCxcbiAgICAgIDExNixcbiAgICAgIDEyNSxcbiAgICAgIDkwLFxuICAgICAgNDIsXG4gICAgICAxODMsXG4gICAgICAzNyxcbiAgICAgIDE5LFxuICAgICAgNzAsXG4gICAgICAxMTgsXG4gICAgICAxNyxcbiAgICAgIDI1MyxcbiAgICAgIDgyLFxuICAgICAgMTY5LFxuICAgICAgMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiODFDUlhNWkNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzM0NjY5MDIzOTo4MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk11c2thblwiLFxuICAgIFwibGlkXCI6IFwiMjYzNDg4MDczMTIxOTEwOjgxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x1L3FaSUNFTjZmbnJVR0dBa2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWHllQ2ZNekM2L0hZTVZDTmhwVnJPQWJnYlFWcFFVbVREYnJ2ZmFGcTZVQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZeGhmR2x6WnE3YWk4SDNXaStBVkdLTVdXaGU4WFFkY3phR2lJaEZVZ0tGOERBekVZTGI4b0w2UkNSeHFycmZJRnkrUzQzbGp1ZEVDcmV1NC9oaW5CUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjajRGOU52U2drOUM4ZXYrRENXekQ4WmZZV0x0SGVldUNEZ3NrMURsRnVHS3ZKRjdPMVpDUFRrQm9xSzBIVTJYeXVoSmhCU2lZQ1pmZ0lWVmpvTVRnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzNDY2OTAyMzk6ODFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjI1NzM3NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZ4TVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnhNLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaVhwY1kyQXY2bzMyRElxK1c2b2ZIbEFhVmxORWdtZ1M0MjZZRnNvQWhXMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NzUyOTk1MTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
