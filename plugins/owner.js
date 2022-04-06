let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
@6282173064242
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /owner/i
handler.command = new RegExp
module.exports = handler
