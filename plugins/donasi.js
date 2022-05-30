let handler = async m => m.reply(`
                 「 Donasi 」
   ➤Telkomsel : 082388332165
   ➤ Dana : 083150488328
   ➤ Gopoay : 082388332165
   
   buat beli Kuota dan apikey 
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler