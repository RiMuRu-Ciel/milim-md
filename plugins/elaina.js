let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/inirey/result-rest-api/main/random%20anime/elaina.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Gw Suka elaina', 'Made By Ciel-Chann & Rimuru-Sama', '➡️Next', '.elaina', m)
}
handler.command = /^(elaina)$/i
handler.tags = ['anime']
handler.help = ['elaina']
handler.limit = true
module.exports = handler
