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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "8114900108";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_29_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzksXG4gICAgICAgIDkyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDcwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0NixcbiAgICAgICAgNTcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjksXG4gICAgICAgIDEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDk3LFxuICAgICAgICA0LFxuICAgICAgICA3MixcbiAgICAgICAgODgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIsXG4gICAgICAgIDIwLFxuICAgICAgICA4OSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTcwLFxuICAgICAgICA3MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNixcbiAgICAgICAgMjM1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDY4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExLFxuICAgICAgICA1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDc4LFxuICAgICAgICA4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0OCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDU0LFxuICAgICAgICAxMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDg1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDgyLFxuICAgICAgICA4MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDksXG4gICAgICAgIDU5LFxuICAgICAgICAxNCxcbiAgICAgICAgODEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDY5LFxuICAgICAgICAzMSxcbiAgICAgICAgOTksXG4gICAgICAgIDgzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ1FmVWpCWEZKb1M4R2I5d1RQSGp1YnlaUWU0T3Jsckdrckw3VW5laCtwTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTgxMTQ5MDAxMDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjEzRjgwRjY2OTFFRjZFMEE2ODRERDY0Qjg3MTE4MEZEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTU1Nzc0N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxODExNDkwMDEwOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTMwMEZBNzJFQ0FENThEODY1NUUyQ0U5RjUxQzkxNjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNTU3NzQ3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInFjeGdDTXBHVGpTVWJqc3hjcWJnb1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmIxOGZiNWEtNWU1MC00M2IxLWEwZjItNGViNTEwM2FhMWIxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MSxcbiAgICAgIDgzLFxuICAgICAgNjAsXG4gICAgICAxNTYsXG4gICAgICAyMTAsXG4gICAgICAyNixcbiAgICAgIDYsXG4gICAgICA5NyxcbiAgICAgIDQ0LFxuICAgICAgMTE2LFxuICAgICAgODcsXG4gICAgICAyMjIsXG4gICAgICAxMTgsXG4gICAgICA1MCxcbiAgICAgIDk4LFxuICAgICAgNTgsXG4gICAgICAxNjcsXG4gICAgICA2LFxuICAgICAgMTE5LFxuICAgICAgMTIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3LFxuICAgICAgNyxcbiAgICAgIDE0LFxuICAgICAgNSxcbiAgICAgIDI0MSxcbiAgICAgIDIyNyxcbiAgICAgIDcwLFxuICAgICAgODcsXG4gICAgICA2OCxcbiAgICAgIDE5MCxcbiAgICAgIDEyLFxuICAgICAgNzEsXG4gICAgICA2NSxcbiAgICAgIDE5NCxcbiAgICAgIDkzLFxuICAgICAgNzcsXG4gICAgICAyMjIsXG4gICAgICAzMixcbiAgICAgIDI3LFxuICAgICAgMTE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRTSEdLVjNTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTgxMTQ5MDAxMDg6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU5MTE2MDQ3MzYwMTI4OjQ4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuC8huKcsPCdkavwnZGo8J2RufCdkbIt8J2Rvy3wnZGp8J2RqPCdkbfwnZG88J2RteKcsOC8hlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01DODRaOEhFTzNGODdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVHFHcVdoc3I2Z2x4SFluQi9iRmhlOFRIRHUzaThXTnl5NlRpZERwcmp6WT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNcVZmaHp0Ty9UbTF1RzRyZVdoUWRIMW8vb2QrSVpRdElCcnI5OEN0YWd6R0phdUtlcEMwT202a2ZVdFlzSGQ1TGEzS01aR3BTK3NqSCs0NVRUbkVDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiMVRWVDk0NEhhVHR3UkpCdGt4WjJwbFZTWS8xZW1ISDRJOFZJNzBEZk9IYzBJbEtzWDU1RHg2bWlGZmNrZDAxQWp5eER3VkJFQWRkOUoxcXZET0dCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTgxMTQ5MDAxMDg6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1NTc3NDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBZXpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFlei5qc29uIjogIntcImtleURhdGFcIjpcIlhzOWFucnhQWjltWHVxa2VhdGJKR016VnBpVXNyb1JIWEMzNzdLNFp1ek09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk0NTY1Njg5NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNTU3NzQ3NzMyXCJ9Igp9"  // PUT your SESSION_ID 


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
