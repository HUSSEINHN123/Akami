module.exports.config = {
  name: "لنتريست",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "D-Jukie",
  description: "البحث عن الصور من موقع بنتريست",
  commandCategory: "الــتــرفــيــه والــالــعــاب",
  usages: "[كلمة البحث و عدد الصور]",
  cooldowns: 0,
};
module.exports.onLoad = () => {
  const fs = require("fs-extra");
  const request = require("request");
  const dirMaterial = __dirname + `/noprefix/`;
  if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
  if (!fs.existsSync(dirMaterial + "tpk.jpeg")) request("https://i.imgur.com/r1DtySa.jpeg").pipe(fs.createWriteStream(dirMaterial + "tpk.jpeg"));
}
module.exports.run = async function({ api, event, args }) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const request = require("request");
  const keySearch = args.join(" ");
  if(keySearch.includes("-") == false) return api.sendMessage({body: '==== 「 𝗣𝗜𝗡𝗧𝗘𝗥𝗘𝗦𝗧 」====\n\n→ قم بادخالها بهذا الشكل 💓\n→ مثال : بنتريست 𝗱𝗼𝗿𝗮𝗲𝗺𝗼𝗻 -  𝟭𝟬', attachment: fs.createReadStream(__dirname + `/noprefix/tpk.jpeg`)}, event.threadID, event.messageID)
  const keySearchs = keySearch.substr(0, keySearch.indexOf('-'))
  const numberSearch = keySearch.split("-").pop() || 6
  const res = await axios.get(`https://apibot.dungkon.me/pinterest?search=${encodeURIComponent(keySearchs)}`);
  const data = res.data.data;
  var num = 0;
  var imgData = [];
  for (var i = 0; i < parseInt(numberSearch); i++) {
    let path = __dirname + `/cache/${num+=1}.jpg`;
    let getDown = (await axios.get(`${data[i]}`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(path, Buffer.from(getDown, 'utf-8'));
    imgData.push(fs.createReadStream(__dirname + `/cache/${num}.jpg`));
  }
  api.sendMessage({
      attachment: imgData,
      body: `=== [ 𝗣𝗜𝗡𝗧𝗘𝗥𝗘𝗦𝗧 ] ====\n━━━━━━━━━━━━━━━━━━\n\n→ المراد البحث عنه : ${keySearchs}\n→ عدد الصور : ${numberSearch}`
  }, event.threadID, event.messageID)
  for (let ii = 1; ii < parseInt(numberSearch); ii++) {
      fs.unlinkSync(__dirname + `/cache/${ii}.jpg`)
  }
};