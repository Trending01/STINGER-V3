/*

# Base By Es Teams Tech
# Owner ? : t.me/examsolutionteam
!- do not delete this credit

*/

global.prefa = ['!','🗿']
global.owner = ['233557560911']
global.ownMain = '233557560911'
global.NamaOwner = 'Trending Boss' //gausah diganti
global.sessionName = 'sessionnya'
global.connect = true // Ubah Ke False Jika Ingin Menggunakan Qr Code
global.namabot = '  _____                   _ _               ____                
 |_   _| __ ___ _ __   __| (_)_ __   __ _  | __ )  ___  ___ ___ 
   | || '__/ _ \ '_ \ / _` | | '_ \ / _` | |  _ \ / _ \/ __/ __|
   | || | |  __/ | | | (_| | | | | | (_| | | |_) | (_) \__ \__ \
   |_||_|  \___|_| |_|\__,_|_|_| |_|\__, | |____/ \___/|___/___/
                                    |___/                       🩸' //ganti aj klo mau
global.author = 'Trending Boss' //ganti aj klo mau
global.packname = 'S҉ T҉ I҉ N҉ G҉ E҉ R҉- V҉ 3҉🩸' //ganti aj klo mau
global.delayjpm = 3500

global.mess = { // Custom Sesuka Lu
ingroup: 'Stinger V3  can only be used in groups.',
admin: 'Stinger V3 is specifically for group admins.',
notadmin: "Stinger V3 must be an admin first",
owner: 'You are not Es Teams .',
premium: 'You are not a premium user.',
seller: 'This feature can only be used by resellers and owners.',
usingsetpp: `Setpp can only be used by the owner, do you think I'm stupid?`,
wait: '*Waiting for processing*',
success: 'Success Bang',
bugrespon: `Processs.....`
}

global.nick = { // Custom Sesuka Lu
aaa: "̊  _____                   _ _               ____                
 |_   _| __ ___ _ __   __| (_)_ __   __ _  | __ )  ___  ___ ___ 
   | || '__/ _ \ '_ \ / _` | | '_ \ / _` | |  _ \ / _ \/ __/ __|
   | || | |  __/ | | | (_| | | | | | (_| | | |_) | (_) \__ \__ \
   |_||_|  \___|_| |_|\__,_|_|_| |_|\__, | |____/ \___/|___/___/
                                    |___/                       🩸⿻‏‎‏‎‏‎‏",
bbb: "S  _____                   _ _               ____                
 |_   _| __ ___ _ __   __| (_)_ __   __ _  | __ )  ___  ___ ___ 
   | || '__/ _ \ '_ \ / _` | | '_ \ / _` | |  _ \ / _ \/ __/ __|
   | || | |  __/ | | | (_| | | | | | (_| | | |_) | (_) \__ \__ \
   |_||_|  \___|_| |_|\__,_|_|_| |_|\__, | |____/ \___/|___/___/
                                    |___/                       🩸",
ccc: "  _____                   _ _               ____                
 |_   _| __ ___ _ __   __| (_)_ __   __ _  | __ )  ___  ___ ___ 
   | || '__/ _ \ '_ \ / _` | | '_ \ / _` | |  _ \ / _ \/ __/ __|
   | || | |  __/ | | | (_| | | | | | (_| | | |_) | (_) \__ \__ \
   |_||_|  \___|_| |_|\__,_|_|_| |_|\__, | |____/ \___/|___/___/
                                    |___/                       🩸",
ddd: "",
eee: "  _____                   _ _               ____                
 |_   _| __ ___ _ __   __| (_)_ __   __ _  | __ )  ___  ___ ___ 
   | || '__/ _ \ '_ \ / _` | | '_ \ / _` | |  _ \ / _ \/ __/ __|
   | || | |  __/ | | | (_| | | | | | (_| | | |_) | (_) \__ \__ \
   |_||_|  \___|_| |_|\__,_|_|_| |_|\__, | |____/ \___/|___/___/
                                    |___/                       🩸༏",
xxx: "► S  _____                   _ _               ____                
 |_   _| __ ___ _ __   __| (_)_ __   __ _  | __ )  ___  ___ ___ 
   | || '__/ _ \ '_ \ / _` | | '_ \ / _` | |  _ \ / _ \/ __/ __|
   | || | |  __/ | | | (_| | | | | | (_| | | |_) | (_) \__ \__ \
   |_||_|  \___|_| |_|\__,_|_|_| |_|\__, | |____/ \___/|___/___/
                                    |___/                       🩸◄",
sss: "  _____                   _ _               ____                
 |_   _| __ ___ _ __   __| (_)_ __   __ _  | __ )  ___  ___ ___ 
   | || '__/ _ \ '_ \ / _` | | '_ \ / _` | |  _ \ / _ \/ __/ __|
   | || | |  __/ | | | (_| | | | | | (_| | | |_) | (_) \__ \__ \
   |_||_|  \___|_| |_|\__,_|_|_| |_|\__, | |____/ \___/|___/___/
                                    |___/                       🩸 ✨",
ttt: "  _____                   _ _               ____                
 |_   _| __ ___ _ __   __| (_)_ __   __ _  | __ )  ___  ___ ___ 
   | || '__/ _ \ '_ \ / _` | | '_ \ / _` | |  _ \ / _ \/ __/ __|
   | || | |  __/ | | | (_| | | | | | (_| | | |_) | (_) \__ \__ \
   |_||_|  \___|_| |_|\__,_|_|_| |_|\__, | |____/ \___/|___/___/
                                    |___/                       🩸"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})
