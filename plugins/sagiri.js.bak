let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/ciel-Chan/anime-json/main/sagiri.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Gw Suka sagiri', 'Made By Ciel-Chann & Rimuru-Sama', '➡️Next', '.sagiri', m)
}
handler.command = /^(sagiri)$/i
handler.tags = ['anime']
handler.help = ['sagiri']
handler.limit = true
module.exports = handler
