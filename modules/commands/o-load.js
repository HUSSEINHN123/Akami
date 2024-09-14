module.exports.config = {
	name: "لويد",
	version: "1.0.0",
	hasPermssion: 2,
  credits: "S H A D O W",
	description: " ",
  commandCategory: "الـــمــطـــور",
	usages: "[]",
	cooldowns: 300
};
module.exports.run = async function({ api, event, args,Threads, Users }) {
    const permission = ["100088091537615"]
    if (!permission.includes(event.senderID)) return api.sendMessage("ماعدك صلاحية حب", event.threadID, event.messageID);
delete require.cache[require.resolve(global.client.configPath)];
global.config = require(global.client.configPath);
return api.sendMessage("Reload config", event.threadID, event.messageID);    
}
