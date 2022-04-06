function handler(m) {
  m.reply(` _*Group Milim Bot*_

*Milim Nava | Groups*

*https://chat.whatsapp.com/Bg0UGMw0xtp2sghDIxKbQk*`)

}
handler.help = ['groupmilim', 'gcmilim', 'milimgroup']
handler.tags = ['info']

handler.command = /^(milimgroup|gcmilim|groupmilim)$/i

module.exports = handler
