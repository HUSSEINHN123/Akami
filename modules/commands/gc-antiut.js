module.exports.config = {
    name: "قفلل",
    version: "1.1.2",
    hasPermssion: 0,
  credits: "S H A D O W",
    description: "قفل الجروب",
  commandCategory: "الــــجـــروب", 
    usages: "قفل",
    cooldowns: 5,
    dependencies: {
        "path": "",
        "fs-extra": ""
    }
};

module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const log = require(process.cwd() + '/utils/log');
    const permission = ["100065172561645"];                  
    if (!permission.includes(event.senderID)) return api.sendMessage("ماعدك صلاحية حب", event.threadID, event.messageID);
    const path = resolve(__dirname, 'cache', 'meewmeew.json');
    if (!existsSync(path)) {
        const obj = {
            antiout: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('antiout')) data.antiout = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }

    log("[!]  [!]", '[ مضاد الخروج ]');
    log("- لا تستخدم هذا الامر حتى تضوج العالم.", '[ مضاد الخروج ]');
    log("- سيتم تضمين مخالفات ما ورد أعلاه  في : بان.", '[ مضاد الخروج ]');
    log("[!] من أجل بيئة أنظف [!] ", '[ مضاد الخروج ]');
    log("- يرجى ابلاغ المطور على من قام بهذا الاجراء.", '[ مضاد الخروج ]');
}

module.exports.run = async function({ api, event }) {
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, 'cache', 'meewmeew.json');
    const { threadID, messageID } = event;
    const database = require(path);
    const { antiout } = database;
    if (antiout[threadID] == true) {
        antiout[threadID] = false;
        api.sendMessage("تم اغلاق مضاد الخروج", threadID, messageID);
    } else {
        antiout[threadID] = true;
        api.sendMessage("تم تفعيل مضاد الخروج", threadID, messageID);
    }
    writeFileSync(path, JSON.stringify(database, null, 4));
}
