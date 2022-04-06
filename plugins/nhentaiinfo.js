let { get } = require('axios')
let handler = async (m, { conn, args }) => {
   if (!args[0]) throw 'Ehm...kode nuklir nya mana?' 
  m.reply('await')
  let ciel = `https://hadi-api.herokuapp.com/api/nhentai?id=${args[0]}`
 let { result } = (await get(ciel)).data
 m.reply(`
 _Name_ : *${result.name}*
 _Genre_ : *${result.tag}*
 _Parodies_ : *${result.parodies}*
 _Characters_ : *${result.characters}*
 _Artist_ : *${result.artist}*
_languege_ : *${result.language}*
_categories_ : *${result.categories}*
 _Pages_ : *${result.pages}*
_uploaded_ : *${result.uploaded}*
_link_ : https://nhentai.xxx/g/${args[0]}
`)
}
handler.help = ['nhentaiinfo'].map(v => v + ' <kode>')
handler.tags = ['nsfw']
handler.command = /^(nhentaiinfo)$/i
module.exports = handler


async function getBuffer(url) {

k = await require('node-fetch')(url)

a = await k.buffer()

return a 

}
