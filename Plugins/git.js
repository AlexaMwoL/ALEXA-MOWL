const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const config = require('../config');
const fs = require("fs")
const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var respoimage = await axios.get(config.ALEXA, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , thumbnail: fs.readFileSync('AlexaMwol.jpg'), mimetype: Mimetype.png, caption: `*╭➤ ☆ⁱᵗˢᵐᵉ ᴀʟᴇxᴀ ᴍᴡᴏʟ*» 
*│*
*│       ☆ᴄʀᴇᴛᴇᴅ ʙʏ☆*
*│*
*│❖ ɴɪʜᴀʟ _ʙᴇʟᴄᴏ_*
*│❖ ᴋʀɪᴢ sɪʀ*         
*│❖ ʟᴇᴠɪ*
*│❖ ᴀʀsʜɪᴅ* 
*╰───────────────❋ཻུ۪۪⸙*⸙ ཻུ❋۪۪

*╭➤ ☆ʟɪɴᴋs☆*
*│❖ɢɪᴛ : https://github.com/AlexaMwoL/ALEXA-MOWL*
*│❖ɢʀᴏᴜᴘ: https://chat.whatsapp.com/IwOZg4VGdJq4lTH12aPOzc*
*╰───────────────❋ཻུ۪۪⸙*
*⌕𖨆 ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙𖨆*     
*╭◪ ᴄᴏᴅᴇᴅ ʙʏ : ⚤︎ ᴛᴇᴀᴍ ᴀʟᴇxᴀ✔︎ ⚤︎*
*╰─────────────────❋ཻུ۪۪⸙*  
`}) 

})); 
