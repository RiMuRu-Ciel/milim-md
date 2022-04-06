let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/nsfw/neko')
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, 'Ｍａｄｅ ｂｙ Ｃｉｅｌ-Ｃｈａｎｎ & Ｒｉｍｕｒｕ-Ｓａｍａ ❤️', 'nyaa >//<', m, 0, { thumbnail: Buffer.alloc(0) })
}

handler.help = ['nsfwneko']
handler.tags = ['nsfw']
handler.command = /^(nsfwneko)$/i
handler.nsfw = true
handler.limit = true

module.exports = handler