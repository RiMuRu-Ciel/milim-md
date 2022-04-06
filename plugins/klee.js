let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/ciel-Chan/anime-json/main/klee.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Gw Suka Klee', 'Made By Ciel-Chann & Rimuru-Sama', '➡️Next', '.klee', m)
}
handler.command = /^(klee)$/i
handler.tags = ['internet']
handler.help = ['klee']
handler.limit = true
module.exports = handler