let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Don't Badword  Onii-chan
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /ajng|babi|ajg|anjing|asw|kontol|bangsad|bangsat|puki|memek|jancok|jancuk|bacot|bacod/i
handler.command = new RegExp
module.exports = handler
