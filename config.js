const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "94723984917" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_23_04_07_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiV0g1U2lxTTlFWFVEdXhVdXdjQXpGZERDaVpvRlZOTmROQmN1R3h6aWJsST1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkROVVZVcHFEUHd5bXJ5cks2SkU0Snd3SHBnVTV3L3RIMTlKTCtwQjcyaU09XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVUtxWkQyaU90Q0tLR0xVb1YrdVBqNkJMTUlVek5ra2xRVi9xNElsenJHTT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk9xNXU4ZWFXbjNkTVN6ZEZCdVl0VzVDOTVuMXM2SGVlZGxPLzBZVk43VGs9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwieUNFczFuY2FQbzNCMDFwK2RHNWRMajNvY3lySURqV2xHWlF6MTI4cC9raz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImU3Uk9kMjNuaEQ0bFlPZ3REdmdpMUVkdFErdmU2eUxpcjdHT3piamtPeHc9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJvUGg2bzNQU3VPODJ1dnhvL3pvVXVLM0poUEpjc3ZxSXk2UktzTW4wTFdrPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidXd0WlpoSmRaVi8wTnM0VG9hNkNab0MrUWp6Z05kZHhIK2Z1WGI5NW93dz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJsM2FHYWp0TTZxelVGZUVGV1lpd1AvUm8yT2tpZExpcTRIL0tpWjdVL1g0TFBUTVd0VW4zeEpNU3RObUFjUmJGQXN6bFpJYWo4MWxjcE5oV2ZQK0pqdz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTgyLFwiYWR2U2VjcmV0S2V5XCI6XCJXajNsQTVxNjMwVlBaUCticjc2akEwNFplOXBuaWM3UXBxL1NSWnRBNElRPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTQ3MjM5ODQ5MTdAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiQjNDNTdGNjhCRjIxNTA3RDFFNDdGNjk2NzE2NTlDQjdcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMjUxNDIyOH0se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5NDcyMzk4NDkxN0BzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCI2MDExMURBRUZBNjgyRTNBNDlBRUJEQUVGREI5QjcxMlwifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzEyNTE0MjI4fV0sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiUGJObkc1TEVSOGExV1Z5N2J3R3ZTZ1wiLFwicGhvbmVJZFwiOlwiNzFlNGExZGItNWY5My00NGYyLTgwMjctMjExOWY5NDBhYTE3XCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJDY2t3NXpIUU9nMjVyYlQ2aFR5TmpWZ25iYVk9XCJ9LFwicmVnaXN0ZXJlZFwiOnRydWUsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNU1rM3plZXlMQU0wRW1FaFVGSkRzbEwvVDZvPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwicGFpcmluZ0NvZGVcIjpcIjVSTkc5U0FWXCIsXCJtZVwiOntcImlkXCI6XCI5NDcyMzk4NDkxNzoxQHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjEzMTY3OTgyMTgxMTcxNjoxQGxpZFwiLFwibmFtZVwiOlwiS2luZyDwn5ia8J+Sl1wifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDTkxJcDhVQkVLM0p5N0FHR0FFZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIndnK2x6RWFZbU1vQWc4cFRyV0t3K2trbTYvb3Z2bmdyVHkya3llc085RDQ9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCI5K3dhbzhmeG1Qc3JPQ0pMcHpacW9VbFM0OFdVN0RBcW94QnFlRFc1ZjJlQmlkelZIYXZTU211NUx2N3pNL1R6akdnMmJ2RkMrMGNmMDdhUzdJeHZBdz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcInRYN01tZ0xyUXJmZU5kK0wvQkUvZW1aMDJGajAvTlJYT0xhSjhqYjg5U2g0SlpqSkkySnJwZm9VVXkzTjhGaE9Fc3ZkMmcvZnlVV0JBdmFPSERwa2pnPT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCI5NDcyMzk4NDkxNzoxQHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQmNJUHBjeEdtSmpLQUlQS1U2MWlzUHBKSnV2Nkw3NTRLMDh0cE1uckR2UStcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzEyNTE0MjI1fSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Ushan-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "ushan-MD",
  ownername:process.env.OWNER_NAME|| "It'x USHAN",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























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
