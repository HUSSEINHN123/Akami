module.exports.config = {
	name: "يوزر بان",
	version: "1.0.5",
	hasPermssion: 2,
  credits: "S H A D O W",
	description: " ",
  commandCategory: "الـــمــطـــور",
	usages: "",
	cooldowns: 5
};

module.exports.languages = {
	"vi": {
		"reason": "Lý do",
		"at": "vào lúc",
		"allCommand": "toàn bộ lệnh",
		"commandList": "những lệnh",
		"banSuccess": "[ Ban User ] Đã xử lý thành công yêu cầu cấm người dùng: %1",
		"unbanSuccess": "[ Unban User ] Đã xử lý thành công yêu cầu gỡ cấm người dùng %1",
		"banCommandSuccess": "[ banCommand User ] Đã xử lý thành công yêu cầu cấm lệnh đối với người dùng: %1",
		"unbanCommandSuccess": "[ كوم نو بان ] Đã xử lý thành công yêu cầu gỡ cấm %1 đối với người dùng: %2",
		"errorReponse": "%1 Không thể hoàn tất công việc bạn yêu cầu",
		"IDNotFound": "%1 ID người dùng bạn nhập không tồn tại trong cơ sở dữ liệu",
		"existBan": "[ Ban User ] Người dùng %1 đã bị ban từ trước %2 %3",
		"notExistBan": "[ Unban User ] Người dùng bạn nhập chưa từng bị cấm sử dụng bot",
		"missingCommandInput": "%1 Phần command cần cấm không được để trống!",
		"notExistBanCommand": "[ كوم نو بان ] Hiện tại ID người dùng bạn nhập chưa từng bị cấm sử dụng lệnh",

		"returnBan": "[ Ban User ] Hiện tại bạn đang yêu cầu cấm người dùng:\n- ID và tên người dùng cần cấm: %1%2\n\n❮ Reaction tin nhắn này để xác thực ❯",
		"returnUnban": "[ Unban User ] Hiện tại bạn đang yêu cầu gỡ cấm người dùng:\n- ID và tên người dùng cần gỡ cấm: %1\n\n❮ Reaction tin nhắn này để xác thực ❯",
		"returnBanCommand": "[ banCommand User ] Hiện tại bạn đang yêu cầu cấm sử dụng lệnh đối với người dùng:\n - ID và tên người dùng cần cấm: %1\n- Các lệnh cần cấm: %2\n\n❮ Reaction tin nhắn này để xác thực ❯",
		"returnUnbanCommand": "[ كوم نو بان ] Hiện tại bạn đang yêu cầu gỡ cấm sử dụng lệnh đối với với người dùng:\n - ID và tên người dùng cần gỡ cấm lệnh: %1\n- Các lệnh cần gỡ cấm: %2\n\n❮ Reaction tin nhắn này để xác thực ❯",
	
		"returnResult": "Đây là kết quả phù hợp: \n",
		"returnNull": "Không tìm thấy kết quả dựa vào tìm kiếm của bạn!",
		"returnList": "[ User List ]\nHiện tại đang có %1 người dùng bị ban, dưới đây là %2 người dùng\n\n%3",
		"returnInfo": "[ Info User ] Đây là một sô thông tin về người dùng bạn cần tìm:\n- ID và tên của người dùng: %1n- Có bị ban?: %2 %3 %4\n- Bị ban lệnh?: %5"
	},
	"en": {
		"reason":"السبب ",
		"at": "في",
		"allCommand":"كل الاوامر",
		"commandList": "الاوامر",
		"banSuccess": "[ يوزر بان ] تم حظر المستخدم: %1",
		"unbanSuccess": "[ يوزر نوبان ] تم الغاء حظر المستخدم %1",
		"banCommandSuccess": "[ كوم بان ] تم حظر الامر للمستخدم: %1",
		"unbanCommandSuccess": "[ كوم نو بان ]تم الغاء حظر الامر %1 للمستخدم : %2",
		"errorReponse": "%1 لا استطيع تنفيذ طلبك",
		"IDNotFound": "%1 معرف غير موجود بقاعده البينات",
		"existBan": "[ يوزر بان ] المستخدم %1 محظور من قبل %2 %3",
		"notExistBan": "[ يوزر نو بان ] المستخدم لم يحظر من قبل",
		"missingCommandInput": "%1 يجب عليك وضع الامر اللذي تريد حظره!",
		"notExistBanCommand": "[ كوم نو بان ] المستخدم لم يحظر من قبل",

		"returnBan":  "[ يوزر بان ] انت تطلب حضر المستخدم :\n : %1%2 \n\n❮ تفاعل على هذه الرسالة لاتمام الطلب ❯",
		"returnUnban": "[ يوزر نوبان ] انت تطلب الغاء حظر المستخدم :\n   : %1\n\n❮ تفاعل علي هذه الرساله لاتمام الطلب ❯",
		"returnBanCommand": "[ كوم بان ] انت تطلب حظر المستخدم:\n : %1\n- من الاوامر: %2\n\n❮ تفاعل علي هذه الرساله لاتمام الطلب ❯",
		"returnUnbanCommand": "[ كوم نو بان ] انت تطلب الغاء حظر المستخدم :\n  %1\n- من الاوامر : %2\n\n❮ تفاعل علي هذه الرساله لاتمام الطلب ❯",
	
		"returnResult": "هذه نتيجه البحث : \n",
		"returnNull": "ليس هناك نتيجه لما تبحث عنه !",
		"returnList": "[ قاءمه المستخدمين ]\n هناك %1 مستخدم محظور, وهنالك %2 مستخدم \n\n%3",
		"returnInfo": "[ معلومات المستخدم ]هذه بعض المعلومات عن المستخدم اللذي تبحث عنه  :\n-اسم المستخدم ومعرفه : %1n-محظور ؟ : %2 %3 %4\n-  هناك اوامر محظوره ؟ : %5"
	}
}

module.exports.handleReaction = async ({ event, api, Users, handleReaction, getText }) => {
	if (parseInt(event.userID) !== parseInt(handleReaction.author)) return;
	const moment = require("moment-timezone");
	const { threadID } = event;
	const { messageID, type, targetID, reason, commandNeedBan, nameTarget } = handleReaction;
	const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
	global.client.handleReaction.splice(global.client.handleReaction.findIndex(item => item.messageID == messageID), 1);
	
	switch (type) {
		case "بان": {
			try {
				let data = (await Users.getData(targetID)).data || {};
				data.banned = true;
				data.reason = reason || null;
				data.dateAdded = time;
				await Users.setData(targetID, { data });
				global.data.userBanned.set(targetID, { reason: data.reason, dateAdded: data.dateAdded });
				return api.sendMessage(getText("banSuccess", `${targetID} - ${nameTarget}`), threadID, () => {
					return api.unsendMessage(messageID);
				});
			} catch { return api.sendMessage(getText("errorReponse", "[ Ban User ]"), threadID) };
		}

		case "نوبان": {
			try {
				let data = (await Users.getData(targetID)).data || {};
				data.banned = false;
				data.reason = null;
				data.dateAdded = null;
				await Users.setData(targetID, { data });
				global.data.userBanned.delete(targetID);
				return api.sendMessage(getText("unbanSuccess", `${targetID} - ${nameTarget}`), threadID, () => {
					return api.unsendMessage(messageID);
				});
			} catch { return api.sendMessage(getText("errorReponse", "[ Unban User ]"), threadID) };
		}

		case "كومبان": {
			try {	
				let data = (await Users.getData(targetID)).data || {};
				data.commandBanned = [...data.commandBanned || [], ...commandNeedBan];
				await Users.setData(targetID, { data });
				global.data.commandBanned.set(targetID, data.commandBanned);
				return api.sendMessage(getText("banCommandSuccess", `${targetID} - ${nameTarget}`), threadID, () => {
					return api.unsendMessage(messageID);
				});
			} catch (e) { return api.sendMessage(getText("errorReponse", "[ banCommand User ]"), threadID) };
		}

		case "كومنوبان": {
			try {
				let data = (await Users.getData(targetID)).data || {};
				data.commandBanned = [...data.commandBanned.filter(item => !commandNeedBan.includes(item))];
				await Users.setData(targetID, { data });
				global.data.commandBanned.set(targetID, data.commandBanned);
				if(data.commandBanned.length == 0) global.data.commandBanned.delete(targetID)
				return api.sendMessage(getText("unbanCommandSuccess", ((data.commandBanned.length == 0) ? getText("allCommand") : `${getText("commandList")}: ${commandNeedBan.join(", ")}`), `${targetID} - ${nameTarget}`), threadID, () => {
					return api.unsendMessage(messageID);
				});
			} catch (e) { return api.sendMessage(getText("errorReponse", "[ كوم نو بان ]"), threadID) };
		}
	}
}

module.exports.run = async ({ event, api, args, Users, getText }) => {
	const { threadID, messageID } = event;
	const type = args[0];
	var targetID = String(args[1]);
	var reason = (args.slice(2, args.length)).join(" ") || null;

	if (isNaN(targetID)) {
		const mention = Object.keys(event.mentions);
		args = args.join(" ");
		targetID = String(mention[0]);
		reason = (args.slice(args.indexOf(event.mentions[mention[0]]) + (event.mentions[mention[0]] || "").length + 1, args.length)) || null;
	}

	switch (type) {
		case "بان":
		case "-b": {
			if (!global.data.allUserID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[ يوزر بان ]"), threadID, messageID);
			if (global.data.userBanned.has(targetID)) {
				const { reason, dateAdded } = global.data.userBanned.get(targetID) || {};
				return api.sendMessage(getText("existBan", targetID, ((reason) ? `${getText("reason")}: "${reason}"` : ""), ((dateAdded) ? `${getText("at")} ${dateAdded}` : "")), threadID, messageID);
			}
			const nameTarget = global.data.userName.get(targetID) || await Users.getNameUser(targetID);
			return api.sendMessage(getText("returnBan", `${targetID} - ${nameTarget}`, ((reason) ? `\n- ${getText("reason")}: ${reason}` : "")), threadID, (error, info) => {
				global.client.handleReaction.push({
					type: "بان",
					targetID,
					reason,
					nameTarget,
					name: this.config.name,
					messageID: info.messageID,
					author: event.senderID,
					
				});
			}, messageID);
		}

		case "نوبان":
		case "-ub": {
			if (!global.data.allUserID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[ يوزر نوبان  ]"), threadID, messageID);
			if (!global.data.userBanned.has(targetID)) return api.sendMessage(getText("notExistBan"), threadID, messageID);
			const nameTarget = global.data.userName.get(targetID) || await Users.getNameUser(targetID);
			return api.sendMessage(getText("returnUnban", `${targetID} - ${nameTarget}`), threadID, (error, info) => {
				global.client.handleReaction.push({
					type: "نوبان",
					targetID,
					nameTarget,
					name: this.config.name,
					messageID: info.messageID,
					author: event.senderID,
					
				});
			}, messageID);
		}

		case "بحث":
		case "-s": {
			const contentJoin = reason || "";
			const getUsers = (await Users.getAll(['userID', 'name'])).filter(item => !!item.name);
			var matchUsers = [], a = '', b = 0;
			getUsers.forEach(i => {
				if (i.name.toLowerCase().includes(contentJoin.toLowerCase())) {
					matchUsers.push({
						name: i.name,
						id: i.userID
					});
				}
			});
			matchUsers.forEach(i => a += `\n${b += 1}. ${i.name} - ${i.id}`);
			(matchUsers.length > 0) ? api.sendMessage(getText("returnResult", a), threadID) : api.sendMessage(getText("returnNull"), threadID);
			return;
		}
		
		case "كومبان":
		case "-bc": {
			if (!global.data.allUserID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[ كوم بان ]"), threadID, messageID);
			if (reason == null || reason.length == 0) return api.sendMessage(getText("missingCommandInput", "[ كوم بان ]"), threadID, messageID);
			if (reason == "all") {
				var allCommandName = [];
				const commandValues = global.client.commands.keys();
				for (const cmd of commandValues) allCommandName.push(cmd);
				reason = allCommandName.join(" ");
			}
			const commandNeedBan = reason.split(" ");
			const nameTarget = global.data.userName.get(targetID) || await Users.getNameUser(targetID);
			return api.sendMessage(getText("returnBanCommand", `${targetID} - ${nameTarget}`, ((commandNeedBan.length == global.client.commands.size) ? getText("allCommand") : commandNeedBan.join(", "))), threadID, (error, info) => {
				global.client.handleReaction.push({
					type: "كومبان",
					targetID,
					commandNeedBan,
					nameTarget,
					name: this.config.name,
					messageID: info.messageID,
					author: event.senderID,
					
				});
			}, messageID);
		}

		case "كومنوبان":
		case "-ubc": {
			if (!global.data.allUserID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[ كوم نو بان ]"), threadID, messageID);
			if (!global.data.commandBanned.has(targetID)) return api.sendMessage(getText("notExistBanCommand"), threadID, messageID);
			if (reason == null || reason.length == 0) return api.sendMessage(getText("missingCommandInput", "[ كوم نو بان ]"), threadID, messageID);
			if (reason == "all") {
				reason = (global.data.commandBanned.get(targetID)).join(" ");
			}
			const commandNeedBan = reason.split(" ");
			const nameTarget = global.data.userName.get(targetID) || await Users.getNameUser(targetID);
			return api.sendMessage(getText("returnUnbanCommand", `${targetID} - ${nameTarget}`, ((commandNeedBan.length == global.data.commandBanned.get(targetID).length) ? getText("allCommand") : commandNeedBan.join(", "))), threadID, (error, info) => {
				global.client.handleReaction.push({
					type: "كومنوبان",
					targetID,
					commandNeedBan,
					nameTarget,
					name: this.config.name,
					messageID: info.messageID,
					author: event.senderID,
					
				});
			}, messageID);
		}

		case "قاءمه":
		case "-l": {
			var listBan = [], i = 0;
			const threadData = global.data.userBanned.keys();
			for (; ;) {
				let idUser = String(threadData.next().value);
				if (typeof idUser == "undefined") {
					const userName = (await Users.getData(idUser)).name || "unknown";
					listBan.push(`${i+=1}/ ${idUser} - ${userName}`);
				}
				if (i == global.data.userBanned.size || i == (parseInt(reason) || 10)) break;
			}
			return api.sendMessage(getText("returnList",(global.data.userBanned.size || 0), listBan.length, listBan.join("\n")), threadID, messageID);
		}

		case "معلومات":
		case "-i": {
			if (!global.data.allUserID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[معلومات المستخدم ]"), threadID, messageID);
			if (global.data.commandBanned.has(targetID)) { var commandBanned = global.data.commandBanned.get(targetID) || [] };
			if (global.data.userBanned.has(targetID)) { var { reason, dateAdded } = global.data.userBanned.get(targetID) || {} };
			const nameTarget = global.data.userName.get(targetID) || await Users.getNameUser(targetID);
			return api.sendMessage(getText("returnInfo", `${targetID} - ${nameTarget}`, ((!dateAdded) ? "لا " : " يب "), ((reason) ? `${getText("reson")}: "${reason}"` : ""), ((dateAdded) ? `${getText("at")}: ${dateAdded}` : ""), ((commandBanned) ? `يب:${(commandNeedBan.length == global.client.commands.size) ? getText("allCommand") : commandNeedBan.join(", ")}` : "لا")), threadID, messageID);
		}
	}
}