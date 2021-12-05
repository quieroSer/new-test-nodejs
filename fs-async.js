const {readFile, writeFile} = require('fs')

console.log('start')
readFile('./folder/first.txt', 'utf-8', (err, res) => {
    if(err) {
        console.log(err)
        return
    }
    const first = res
    readFile('./folder/second.txt', 'utf-8', (err, res) => {
        if(err) {
            console.log(err)
            return
        }
        const second = res
        writeFile(
            './folder/result-async',
        `aqui esta la wea: ${first}, ${second}`,
        (err, res) => {
            if(err) {
                console.log(res)
                return
            }  
            console.log('done with this task')  
        }
            ) 
    })
})

console.log('starting with next task')