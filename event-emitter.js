const EventEmitter = require('events')

const customEmitter = new EventEmitter

customEmitter.on('response', (name, id) => {
    console.log(`data received with ${name} and ${id}`)
})
//you can listen any times that u want
customEmitter.on('response', () => {
    console.log(`some other logic`)
})

//primero esuchas los eventos y luego emites los eventos
//si es q se emiten antes de q se se escuchen... no se escuchan OJ OJ!
customEmitter.emit('response', 'javier', 38)


