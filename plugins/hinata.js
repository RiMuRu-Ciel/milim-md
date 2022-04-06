let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/ciel-Chan/anime-json/main/hinata.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Gw suka Hinata', 'Made By Ciel-Chann & Rimuru-Sama', '➡️Next', '.hinata', m)
}
handler.command = /^(hinata)$/i
handler.tags = ['anime']
handler.help = ['hinata']
handler.limit = true
module.exports = handler