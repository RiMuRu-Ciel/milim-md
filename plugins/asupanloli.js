let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/melcanz/json/main/anime/asupanloli.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendFile(m.chat, await (await fetch(url)).buffer(), 'Gw Suka Loli', 'Made By Ciel-Chann & Rimuru-Sama', 'Ekhemm', '', m)
}
handler.command = /^(asupanloli)$/i
handler.tags = ['anime']
handler.help = ['asupanloli']
handler.limit = true
module.exports = handler
