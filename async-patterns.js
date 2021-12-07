
const { readFile, writeFile } = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)
//ESTO Tambien funciona y es equivalente a lo de arriba:
// const { readFile, writeFile } = require('fs').promises
//con solo esta linea te ahorras las siguientes tres
//pero tienes q quitar el Promise de los metodos readFile y writeFile de abajo



const start = async () => {
    try {
        const first = await readFilePromise('./folder/first.txt', 'utf-8')
        const second = await readFilePromise('./folder/second.txt', 'utf-8')
        await writeFilePromise('./folder/result-mind-granade.txt', 
        `THIS IS AWESOME: ${first} ${second}`)
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}


start()


