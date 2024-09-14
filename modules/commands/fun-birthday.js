module.exports.config = {
	name: "عيدميلادها",
	version: "1.0.0",
	hasPermssion: 0,
  credits: "S H A D O W",
	description: "يجيبلك عيدميلاد البوت",
  commandCategory: "الــتــرفــيــه والــالــعــاب",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("December 01, 2023 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`[عيد ميلادها」\n» ${days} يوم و ${hours} ساعة و ${minutes} دقيقة , ${seconds} ثانية «`, event.threadID, event.messageID);
} 