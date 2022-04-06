let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/inirey/Document-api/main/justina.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Gw suka Justina', 'Made By Ciel-Chann & Rimuru-Sama', '➡️Next', '.justina', m)
}
handler.command = /^(justina)$/i
handler.tags = ['internet']
handler.help = ['justina']
module.exports = handler
