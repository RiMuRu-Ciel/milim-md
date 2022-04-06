let handler = async (m, { conn }) => {
  await m.reply('Bentar..')
  conn.sendFile(m.chat, 'https://xteam.xyz/randomimage/zettairyouiki?APIKEY=kurrxd09', 'Jangan Lupa Follow IG Owner milim_nava026', 'Made by Ciel-Chann & Rimuru-Sama ❤️', m)
}

handler.help = ['zettairyouiki']
handler.tags = ['anime']
handler.command = /^zettairyouiki$/i

handler.limit = true

module.exports = handler
