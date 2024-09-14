module.exports.config = {
  name: "جودة",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "",
  description: "",
  commandCategory: "الــتــرفــيــه والــالــعــاب",
  usages: "[رد على صورة]",
  cooldowns: 0
};

module.exports.run = async function({ api, event, args }) {
  const fs = global.nodemodule["fs-extra"];
  const axios = require('axios').default;

  // تحقق إذا كان هناك رد على صورة
  if (!event.messageReply || !event.messageReply.attachments || event.messageReply.attachments.length === 0) {
    return api.sendMessage('⚠️ | أرجوك رد على صورة', event.threadID, event.messageID);
  }

  const linkUp = event.messageReply.attachments[0].url;

  try {
    api.setMessageReaction("⏱️", event.messageID, (err) => {}, true);

    // تحميل الصورة
    const response = await axios.get(linkUp, { responseType: "arraybuffer" });
    fs.writeFileSync(__dirname + `/cache/netanh.png`, Buffer.from(response.data, "binary"));

    // إرسال رسالة أثناء التحميل
    api.sendMessage("✅ | تم تحميل الصورة بنجاح، جاري رفع الجودة...", event.threadID);

    // رفع الجودة باستخدام API الجديد
    const res = await axios.get(`https://smfahim.onrender.com/4k?url=${encodeURIComponent(linkUp)}`);

    // تحقق إذا كانت الاستجابة ناجحة
    if (res.data.status) {
      const upgradedImageLink = res.data.image;

      // تحميل الصورة المحسنة
      const qualityResponse = await axios.get(upgradedImageLink, { responseType: "arraybuffer" });
      fs.writeFileSync(__dirname + `/cache/netanh.png`, Buffer.from(qualityResponse.data, "binary"));

      api.setMessageReaction("✅", event.messageID, (err) => {}, true);

      // إرسال الصورة المعدلة
      return api.sendMessage({
        body: `✅ | تم رفع جودة الصورة بنجاح`,
        attachment: fs.createReadStream(__dirname + `/cache/netanh.png`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/netanh.png`), event.messageID);
    } else {
      // في حالة فشل رفع الجودة
      return api.sendMessage('⚠️ | حدث خطأ أثناء رفع الجودة، حاول مرة أخرى.', event.threadID, event.messageID);
    }

  } catch (e) {
    console.error(e);
    api.setMessageReaction("❌", event.messageID, (err) => {}, true);
    return api.sendMessage('⚠️ | حدث خطأ أثناء معالجة الصورة.', event.threadID, event.messageID);
  }
};