const { createReadStream } = require('fs')
//para probar el error puedes cambiar el path
const stream = createReadStream('../folder/big.txt', {
    highWaterMark: 90000,
    encoding: 'utf-8'
})

stream.on('data', (res) => {
    console.log(res)
})

stream.on('error', (err) => {
    console.log(err)
    //el objeto error tiene 4 props
    console.log(err.errno)
    console.log(err.code)
    console.log(err.syscall)
    console.log(err.path)
    
})