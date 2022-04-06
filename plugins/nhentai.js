let { get } = require('axios')
let handler = async (m, { conn, args }) => {
   if (!args[0]) throw 'Ehm...kode nuklir nya mana?' 
  m.reply('Searching....')
  let ciel = `https://hadi-api.herokuapp.com/api/nhentai?id=${args[0]}`
 let { result } = (await get(ciel)).data
   conn.sendMessage(m.chat, await getBuffer(result.download_pdf), 'documentMessage', { quoted: m, filename: `${result.name}.pdf`, mimetype: 'application/pdf' })
 m.reply(`
 _Name_ : *${result.name}*
 _Genre_ : *${result.tag}*
 _Parodies_ : *${result.parodies}*
 _Characters_ : *${result.characters}*
 _Artist_ : *${result.artist}*
 _Pages_ : *${result.pages}*`)
}
handler.help = ['nhentai'].map(v => v + ' <kode>')
handler.tags = ['nsfw']
handler.premium = false
handler.command = /^(nhentai)$/i
module.exports = handler


async function getBuffer(url) {

k = await require('node-fetch')(url)

a = await k.buffer()

return a 

}
