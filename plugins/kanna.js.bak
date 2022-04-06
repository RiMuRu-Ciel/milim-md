let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/ciel-Chan/anime-json/main/kanna.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Gw Suka Kanna', 'Made By Ciel-Chann & Rimuru-Sama', '➡️Next', '.kanna', m)
}
handler.command = /^(kanna)$/i
handler.tags = ['anime']
handler.help = ['kanna']
module.exports = handler