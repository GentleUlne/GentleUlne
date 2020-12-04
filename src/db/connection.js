const {Pool} = require('pg')

const db = new Pool({
    user:'postgres',
    host:'127.0.0.1',
    database:'sis_vendas',
    password:'mionMIo',
    port:5433
})
db.connect()
module.exports = {db}