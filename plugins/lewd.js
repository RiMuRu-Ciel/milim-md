let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://zenzapi.xyz/api/morensfw/lewd?apikey=YAUDAH IYA', 'Jangan Lupa Follow IG Owner milim_nava026', 'Made by Ciel-Chann & Rimuru-Sama ❤️', m)
}

handler.help = ['lewd']
handler.tags = ['nsfw']
handler.command = /^lewd$/i
handler.nsfw = true
handler.limit = true

module.exports = handler
