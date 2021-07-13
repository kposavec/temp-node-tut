const {readFileSync, writeFileSync} = require('fs')
console.log('start');
const prvi = readFileSync('./content/first.txt', 'utf8')
const sec = readFileSync('./content/second.txt', 'utf8')

console.log(prvi, sec)

writeFileSync('./content/result-sync.txt', 
`Ovo je rezultat: ${prvi}, ${sec}`, 
{flag: 'a'}
)
console.log('done with this task');
console.log('starting the next one'); 
