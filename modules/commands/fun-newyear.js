module.exports.config = {
	name: "نيويير",
	version: "1.0.0",
	hasPermssion: 0,
  credits: "S H A D O W",
	description: "العد التنازلي للسنة الجديدة",
  commandCategory: "الــتــرفــيــه والــالــعــاب",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("January 1, 2024 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`「الوقت المتبقي للسنة الجديدة」\n» ${days} يوم , ${hours} ساعة , ${minutes} دقيقة و ${seconds} ثانية «`, event.threadID, event.messageID);
} 