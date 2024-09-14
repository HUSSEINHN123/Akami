const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "كايتو",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "S H A D O W",
  description: "",
  commandCategory: "الــــجـــروب", 
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Africa/Cairo").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["عمك 🙂" , "نعم من ينادي", "خادمك في أي وقت","اهلا إسمي كايتو المدافع عن الحق والحرية","واش تريد 🤔","منو ينادي 😑","أنا أعمل ب نقطة ها "];
 var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "نورة") || (event.body.toLowerCase() == "حثتيني")) {
     return api.sendMessage("️تقصد تلك البقرة 🤣\nمن يهتم لها 🙂", threadID, messageID);
   };
  if ((event.body.toLowerCase() == "احبك") || (event.body.toLowerCase() == "بحبك")) {
     return api.sendMessage("️ شبح أخي الوحيد يولد 🤧", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "ملل") || (event.body.toLowerCase() == "ملل يجيب شلل")) {
     return api.sendMessage("️ امشيطلعبرراااااا", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == " كيوت") || (event.body.toLowerCase() == "كيوتت")) {
     return api.sendMessage("️يعمريييي🤧💞", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Na Roo") || (event.body.toLowerCase() == "نارو")) {
     return api.sendMessage("️هادي وحدة ماتستاهل متنمرة ولاتستحق صداقة من الشبح الصامت 😑", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "كيفكم") || (event.body.toLowerCase() == "كيفك")) {
     return api.sendMessage("️بخير وانت👀", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "السلام عليكم") || (event.body.toLowerCase() == "سلام عليكم")) {
     return api.sendMessage("️ وعليكم السلام ورحمه الله وبركاته", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "جيت") || (event.body.toLowerCase() == "سلام")) {
     return api.sendMessage("️منور", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "منورة") || (event.body.toLowerCase() == "نورتي")) {
     return api.sendMessage("️نورك الأصل الأصيل بلا منازع او مثيل 👀💞", threadID, messageID);
   };
   
if ((event.body.toLowerCase() == "كيف الحال") || (event.body.toLowerCase() == "كيف حالك")) {
     return api.sendMessage("️ماشيا الحمد لله وانت ❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ماشيا") || (event.body.toLowerCase() == "بخير الحمد لله")) {
     return api.sendMessage("️دومك بخير وصحه وسعاده ", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "بوت") || (event.body.toLowerCase() == "يا بوت ")) {
     return api.sendMessage("️يا روحي اسمي كايتو عمك 💖", threadID, messageID);
   };
  
  if ((event.body.toLowerCase() == "جييتت") || (event.body.toLowerCase() == "باااكك")) {
     return api.sendMessage("️نورت البيت🫣❤", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "المطور") || (event.body.toLowerCase() == "من المطور")) {
     return api.sendMessage("شبح حبيبي وروحي وتاج راسكم 💞🙃", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("كيد") == 0 || (event.body.indexOf("كايتو") == 0)) {
    var msg = {
      body: ` ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }