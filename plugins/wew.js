let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Wew
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /wew/i
handler.command = new RegExp

module.exports = handler
