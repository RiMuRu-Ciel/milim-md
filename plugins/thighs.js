let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/melcanz/json/main/nsfw/thighs.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Gw Suka thighs', 'Made By Ciel-Chann & Rimuru-Sama', '➡️Next', '.thighs', m)
}
handler.command = /^(thighs)$/i
handler.tags = ['nsfw']
handler.help = ['thighs']
handler.nsfw = true
handler.limit = true
module.exports = handler
