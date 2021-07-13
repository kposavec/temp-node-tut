// Module

const names = require('./imena');
const pozdravBok = require('./funcija_imena');
console.log(names)

const data = require('./alternativ_flavor'); 
console.log(data)

require('./funcija')

pozdravBok('Juraj')
pozdravBok(names.lid)
pozdravBok(names.mat)
