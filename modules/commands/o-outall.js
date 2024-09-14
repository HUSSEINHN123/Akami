modulele.exports.config = {
	name: "تصفيه للكل",
	version: "1.0.0",
	hasPermssion: 2,
  credits: "S H A D O W",
	description: "",
  commandCategory: "الـــمــطـــور",
	usages: "",
	cooldowns: 5,
	info: [
		{
			key: "Text",
			prompt: "The text you want to send to everyone",
			type: 'Document',
			example: 'Hello Em'
		}
	]
};
 
module.exports.run = async ({ api, event, args }) => {
	return api.getThreadList(100, null, ["INBOX"], (err, list) => {
		if (err) throw err;
		list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ? api.removeUserFromGroup(api.getCurrentUserID(), item.threadID) : '');
		api.sendMessage(' تمت التصفيه بنجاح', event.threadID);
	});
}