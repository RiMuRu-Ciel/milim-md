let handler = async (m, { conn }) => {
  await m.reply('Bentar Sangee')
  conn.sendFile(m.chat, 'https://xteam.xyz/randomimage/wpmobile?APIKEY=kurrxd09', 'Jangan Lupa Follow IG Owner milim_nava026', 'Made by Ciel-Chann & Rimuru-Sama ❤️', m)
}

handler.help = ['wallpaperanime']
handler.tags = ['anime']
handler.command = /^(wallpaper|wp)anime$/i

handler.limit = true

module.exports = handler
