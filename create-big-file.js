const { writeFileSync } = require('fs')
for(let i = 0; i < 10000 ; i++) {
    writeFileSync('./folder/big.txt', `hola mundo ctm ${i} \n`, { flag: 'a'})
}