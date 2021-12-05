const javier = 'javier'
const pati = 'pati'

const sayHi = (name) => {
    console.log(`hola ${name}`)
}

sayHi('alonsito')
sayHi(javier)
sayHi(pati)
module.exports = { javier, pati, sayHi}
console.log(module)
console.log(module.exports.sayHi)