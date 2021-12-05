const {readFileSync, writeFileSync} = require('fs')

console.log('start')
const first = readFileSync('./folder/first.txt', 'utf-8')
const second = readFileSync('./folder/second.txt', 'utf-8')


//console.log(first)
//console.log(second)

writeFileSync(
    './folder/result-write-sync.txt',
    `aqui esta la wea: ${first}, ${second}`, 
    {flag: 'a'}
)
console.log('done with this task')
console.log('staring the next one')

