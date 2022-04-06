let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.zeks.me/api/memeindo?apikey=ManasCiel')
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.result) throw 'Error!'
  conn.sendFile(m.chat, json.result, 'Ｍａｄｅ ｂｙ Ｃｉｅｌ-Ｃｈａｎｎ & Ｒｉｍｕｒｕ-Ｓａｍａ ❤️', 'Meme', m, 0, { thumbnail: Buffer.alloc(0) })
}

handler.help = ['meme']
handler.tags = ['internet']
handler.command = /^(meme)$/i
handler.limit = true
module.exports = handler

