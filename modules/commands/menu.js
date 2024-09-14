const moment = require('moment-timezone');
const axios = require("axios");
const fs = require("fs-extra");

module.exports.config = {
	name: "الاوامر",
	version: "1.0.2",
	hasPermission: 0,
	credits: "Cypruspro21k",
	description: "قائمة الأوامر،مرشد المبتدئين",
	commandCategory: "النظام",
	usages: "إسم الأمر أو أتركه فارغا",
	cooldowns: 1,
	envConfig: {
		autoUnsend: false,
		delayUnsend: 300
	}
};

module.exports.languages = {
	"en": {
		"moduleInfo": "🌸─────[ %1 ]─────🌸\n\nالإستعمال: %3\nالفئة: %4\nوقت الإنتظار: %5 ثانية\nمن يمكنه إستعمال الأمر: %6\nالوصف: %2\n\nتم الإنشاء من طرف %7\n\n🌸─────[ %1 ]─────🌸",
		"helpList": '[ هناك حوالي %1 أمر على كايتو البوت إستخدم: "%2أوامر إسم الأمر" لكي تعرف كيفية إستخدم هذا الأمر! ]',
		"user": "الجميع",
		"adminGroup": "فقط مشرفين المجموعة",
		"adminBot": "فقط مالك البوت"
	}
};

module.exports.handleEvent = function ({ api, event, getText }) {
	const { commands } = global.client;
	const { threadID, messageID, body } = event;

	if (!body || typeof body === "undefined" || body.indexOf("help") !== 0) return;

	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
	if (splitBody.length === 1 || !commands.has(splitBody[1].toLowerCase())) return;

	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());
	const prefix = threadSetting.hasOwnProperty("PREFIX") ? threadSetting.PREFIX : global.config.PREFIX;

	return api.sendMessage(
		getText(
			"moduleInfo",
			command.config.name,
			command.config.description,
			`${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`,
			command.config.commandCategory,
			command.config.cooldowns,
			((command.config.hasPermission === 0) ? getText("user") : (command.config.hasPermission === 1) ? getText("adminGroup") : getText("adminBot")),
			command.config.credits
		),
		threadID,
		messageID
	);
};

module.exports.run = async function ({ api, event, args, getText }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
	const prefix = threadSetting.hasOwnProperty("PREFIX") ? threadSetting.PREFIX : global.config.PREFIX;

	if (args[0] === "الكل") {
		const commandList = Array.from(commands.values());
		let group = [], msg = "";

		for (const commandConfig of commandList) {
			if (!group.some(item => item.group.toLowerCase() === commandConfig.config.commandCategory.toLowerCase())) {
				group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
			} else {
				group.find(item => item.group.toLowerCase() === commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
			}
		}

		group.forEach(commandGroup => msg += `☂︎ ${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)} \n${commandGroup.cmds.join(' • ')}\n\n`);

		try {
			const response = await axios.get('https://pic.re/image', { responseType: 'stream' });

			if (response.data) {
				const path = __dirname + "/cache/cyprus.jpg";
				const writer = fs.createWriteStream(path);

				response.data.pipe(writer);

				writer.on('finish', () => {
					api.sendMessage(
						{
							body: `قِـٰٚـِْ✮ِـٰٚـِْآئمِـٰٚـِْ✮ِـٰٚـِْة آلِـٰٚـِْ✮ِـٰٚـِْأﯛ̲୭آمِـٰٚـِْ✮ِـٰٚـِْر |🐙\n\n` + msg + `\nإزعٍآجٍ آلُِبَووت أمر محٍظهـُوور ْٰ⁽⭐️₎\n\nإجٍمآلُِي عٍدِدِ آلُِأوآمر ♥️🎼 .: ${commands.size}`,
							attachment: fs.createReadStream(path)
						},
						threadID,
						(err, info) => {
							fs.unlinkSync(path);
							if (autoUnsend === false) {
								setTimeout(() => api.unsendMessage(info.messageID), delayUnsend * 1000);
							}
						}
					);
				});
			}
		} catch (error) {
			console.error("Error downloading image:", error);
		}

		return;
	}

	if (!command) {
		const arrayInfo = [];
		const page = parseInt(args[0]) || 1;
		const numberOfOnePage = 10;
		let msg = "";

		for (var [name] of commands) {
			name += ``;
			arrayInfo.push(name);
		}

		arrayInfo.sort((a, b) => a.data - b.data);

		const first = numberOfOnePage * page - numberOfOnePage;
		const helpView = arrayInfo.slice(first, first + numberOfOnePage);

		for (let cmds of helpView) msg += `${global.config.PREFIX}${cmds}\n`;

		const siu = `قِـٰٚـِْ✮ِـٰٚـِْآئمِـٰٚـِْ✮ِـٰٚـِْة آلِـٰٚـِْ✮ِـٰٚـِْأﯛ̲୭آمِـٰٚـِْ✮ِـٰٚـِْر |🐙 `;

		const text = `\nص֓ــف֛ـــحٟــٰـُ͢ـُٰــ͒͜ـًة ⁽🌔☄️ : 〘${page}/${Math.ceil(arrayInfo.length / numberOfOnePage)}〙\n\nالـوقـت : ${moment().tz("Africa/Casablanca").format("L HH:mm:ss a")}\nإجـمالـي الاوامـر :${commands.size}`;

		const link = [
			"https://i.imgur.com/Lx8w3mG.jpeg",
				"https://i.imgur.com/1uGt8Jn.jpeg",
				"https://i.imgur.com/PKP9QF5.jpeg",
				"https://i.imgur.com/059tn4h.jpeg",
				"https://i.imgur.com/1A3P9iG.jpeg",
				"https://i.imgur.com/CndqvY1.jpeg",
				"https://i.imgur.com/r1r4slo.jpeg",
				"https://i.imgur.com/ChBMSK9.jpeg",
				"https://i.imgur.com/8ep9YeF.jpeg",
				"https://i.imgur.com/BgWnPoa.jpeg",
				"https://i.imgur.com/Jx20uHW.jpeg",
				"https://i.imgur.com/by9YykZ.jpeg",
				"https://i.imgur.com/Tbf8MVx.jpeg",
				"https://i.imgur.com/hHRn9GT.jpeg",
		];

		try {
			const response = await axios.get(encodeURI(link[Math.floor(Math.random() * link.length)]), { responseType: 'stream' });
			const path = __dirname + "/cache/cyprus.jpg";
			const writer = fs.createWriteStream(path);

			response.data.pipe(writer);

			writer.on('finish', () => {
				api.sendMessage({ body: siu + "\n\n" + msg + text, attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID);
			});
		} catch (error) {
			console.error("Error downloading image:", error);
		}

		return;
	}

	const cypruspro21k = getText("moduleInfo", command.config.name, command.config.description, `${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermission === 0) ? getText("user") : (command.config.hasPermission === 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits);

	const link = [
		"https://i.imgur.com/FalLaML.jpeg",
		"https://i.imgur.com/AXXYfhK.jpeg",
		"https://i.imgur.com/qXSuarY.jpeg",
		"https://i.imgur.com/vPq2iDS.jpeg",
	];

	try {
		const response = await axios.get(encodeURI(link[Math.floor(Math.random() * link.length)]), { responseType: 'stream' });
		const path = __dirname + "/cache/cyprus.jpg";
		const writer = fs.createWriteStream(path);

		response.data.pipe(writer);
		writer.on('finish', () => {
					api.sendMessage({
						body: cypruspro21k,
						attachment: fs.createReadStream(path)
					}, threadID, () => fs.unlinkSync(path), messageID);
				});
			} catch (error) {
				console.error("Error downloading image:", error);
			}
		};