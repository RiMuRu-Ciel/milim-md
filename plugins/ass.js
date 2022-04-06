let handler = async (m, { conn }) => {
 await m.reply('Bentar sangeee')
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/ass?APIKEY=kurrxd09', 'Jangan Lupa Follow IG Owner milim_nava026', 'Made by Ciel-Chann & Rimuru-Sama ❤️', m)
  
}

handler.help = ['ass']
handler.tags = ['nsfw']
handler.command = /^(ass)$/i

handler.limit = true
handler.group = true

module.exports = handler
