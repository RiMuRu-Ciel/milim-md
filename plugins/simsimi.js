let { get } = require('axios')
let handler = async (m, { conn, args }) => {
   if (!args[0]) throw 'Mana Text ny Onii-Chann' 
  let lol = `https://server-api-rey.herokuapp.com/api/fun/simisimi-ind2?text=${args[0]}&apikey=apirey`
//  let lol = global.API('lol', `/api/nhentaipdf/${args[0]}`, {}, 'apikey')
 let { result } = (await get(lol)).data
 m.reply(`${result.success}`)
}
handler.help = ['simi', 'simsimi'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i
module.exports = handler


async function getBuffer(url) {

k = await require('node-fetch')(url)

a = await k.buffer()

return a 

}
