 const settings = require('../settings');

async function ownerCommand(sock, chatId, message) {
    try {
        // HARDCODED - CANNOT BE CHANGED BY DEPLOYERS
        const ORIGINAL_CREATOR = {
            name: "Ck Shadow",
            number: "2349070810971", 
            social: {
                youtube: "https://youtube.com/@charley010?si=Pn4ECoC7vd2v2Voq",
                github: "github.com/Ebukannalue1132"
            }
        };

        const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${ORIGINAL_CREATOR.name}
ORG:CK SHADOW-MD;
TITLE:Original Bot Developer
TEL;waid=${ORIGINAL_CREATOR.number}:+${ORIGINAL_CREATOR.number}
NOTE:© 2025 CK SHADOW-MD. Original creator.
END:VCARD`;

        await sock.sendMessage(chatId, {
            contacts: {
                displayName: `Original Developer`,
                contacts: [{ vcard }]
            }
        });

        await sock.sendMessage(chatId, {
            text: `🔐 *ORIGINAL DEVELOPER CONTACT* 🔐

*👨‍💻 Original Creator:* ${ORIGINAL_CREATOR.name}
*📞 Official Contact:* +${ORIGINAL_CREATOR.number}
*🤖 Original Bot:* ${settings.botName}

⭐ *This bot was originally developed by WALLYJAYTECH-MD*
⭐ *Contact above number for genuine support*

🚫 *This bot might be deployed by someone else*
🚫 *But only the original developer can provide real support*

🌐 *Official Sources:*
📹 ${ORIGINAL_CREATOR.social.youtube}
🐙 ${ORIGINAL_CREATOR.social.github}

*© 2025 WALLYJAYTECH-MD - All Rights Reserved*`,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363420618370733@newsletter',
                    newsletterName: 'WALLYJAYTECH-MD BOTS',
                    serverMessageId: -1
                }
            }
        }, { quoted: message });

    } catch (error) {
        // Ultimate fallback - completely hardcoded
        await sock.sendMessage(chatId, {
            text: `👑 *ORIGINAL BOT DEVELOPER* 👑

*Ck shadow - CK SHADOW-MD*
*Official WhatsApp:* +2349070810971

*This bot was originally created by WALLYJAYTECH-MD*
*Contact the original developer for real support*

⚠️ *This may be a deployed copy by someone else*
⚠️ *Only original developer can provide updates*`
        }, { quoted: message });
    }
}

module.exports = ownerCommand;
