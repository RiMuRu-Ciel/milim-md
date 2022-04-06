let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/melcanz/json/main/nsfw/ahegao.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Gw Suka ahegao', 'Made By Ciel-Chann & Rimuru-Sama', '➡️Next', '.ahegao', m)
}
handler.command = /^(ahegao)$/i
handler.tags = ['nsfw']
handler.help = ['ahegao']
handler.nsfw = true
handler.limit = true
module.exports = handler
