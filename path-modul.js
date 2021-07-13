const path = require('path')

console.log(path.sep)

const filePath = path.join('/content', 'subfoledr', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const aboulute = path.resolve(__dirname, 'content','subfolder','test.txt')
console.log(aboulute)