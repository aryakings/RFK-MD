let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
   heum = await fetch(`https://api.lolhuman.xyz/api/random2/bj?apikey=Dawnfrostkey`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '🔥🥵🥵', '© ᵏʳⁱ𝘽𝙡𝙖𝙘𝙠𝙖𝙩 𝘽𝙤𝙩𝙯៚', 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['blowjob']
handler.tags = ['hentai']

handler.command = /^(blowjob)$/i

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

