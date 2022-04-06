let handler = async (m, { conn }) => {
  await m.reply('Bentar Sangee')
  conn.sendFile(m.chat, 'https://xteam.xyz/randomimage/hentai?APIKEY=kurrxd09', 'Jangan Lupa Follow IG Owner milim_nava026', 'Made by Ciel-Chann & Rimuru-Sama ❤️', m)
}

handler.help = ['hentai']
handler.tags = ['nsfw']
handler.command = /^hentai$/i
handler.nsfw = true
handler.limit = true

handler.limit = true

module.exports = handler
