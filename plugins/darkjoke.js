let handler = async (m, { conn }) => {
  await m.reply('Bentar')
  conn.sendFile(m.chat, 'https://xteam.xyz/asupan/darkjoke?apikey=kurrxd09', 'Jangan Lupa Follow IG Owner milim_nava026', 'Made by Ciel-Chann & Rimuru-Sama ❤️', m)
}

handler.help = ['darkjoke']
handler.tags = ['internet']
handler.command = /^darkjoke$/i

handler.limit = true

module.exports = handler
