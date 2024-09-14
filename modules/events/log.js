module.exports.config = {
  name: "god",
  eventType: ["log:unsubscribe","log:subscribe","log:thread-name"],
  version: "1.0.0",
  credits: "Mirai Team",
  description: "Record bot activity notifications!",
    envConfig: {
        enable: true
    }
};

module.exports.run = async function({ api, event, Threads }) {
    const logger = require("../../utils/log");
    if (!global.configModule[this.config.name].enable) return;
    var formReport =  "=== إشعار من البوت ===" +
                        "\n\n» آيدي المجموعة: " + event.threadID +
                        "\n» الحدث: {task}" +
                        "\n» تم القيام بهذا الحدث من طرف المستخدم صاحب الآيدي: " + event.author +
                        "\n» " + Date.now() +" «",
        task = "";
    switch (event.logMessageType) {
        case "log:thread-name": {
            const oldName = (await Threads.getData(event.threadID)).name || " هذا الاسم غير موجود",
                    newName = event.logMessageData.name || "هذا الإسم غير موجود";
            task = "قام المستخدم بتغيير إسم المجموعة: '" + oldName + "' إلى '" + newName + "'";
            await Threads.setData(event.threadID, {name: newName});
            break;
        }
        case "log:subscribe": {
            if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) task = "أضاف المستخدم البوت إلى مجموعة جديدة!";
            break;
        }
        case "log:unsubscribe": {
            if (event.logMessageData.leftParticipantFbId== api.getCurrentUserID()) task = "قام المستخدم بطرد البوت من المجموعة!"
            break;
        }
        default: 
            break;
    }

    if (task.length == 0) return;

    formReport = formReport
    .replace(/\{task}/g, task);
  var god = "100088091537615";

    return api.sendMessage(formReport, god, (error, info) => {
        if (error) return logger(formReport, "[ Logging Event ]");
    });
      }