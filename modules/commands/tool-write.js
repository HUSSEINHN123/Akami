module.exports.config = {
	name: "اكتب",
	version: "1.1.1",
	hasPermssion: 0,
  credits: "S H A D O W",
	description: " يكتب الي تريدة",
  commandCategory: "قــســم الــادوات",
	usages: "https://youtu.be/Es9mZofOGH8",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
var say = args.join(" ")
	if (!say) api.sendMessage("- اكتب رسالة", event.threadID, event.messageID)
	else api.sendMessage(`${say}`, event.threadID, event.messageID);
}
