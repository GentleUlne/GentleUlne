const {Pool} = require('pg');

const db = new Pool({
    user:'postgres',
    host:'localhost',
    database:'sis_vendas',
    password:'mionMIo',
    port:5433
})
db.connect()
module.exports = {db}