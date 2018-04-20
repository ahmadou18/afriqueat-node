const { Client } = require('pg');
const {database} = require('./config')

/*const db = new Client({
    user: 'dost',
    host: 'localhost',
    database: 'afriqueatdb',
    password: 'changeme',
    port: 5432,
})*/



module.exports = {
    development:{
        client: 'pg',
        connection:{
            host: database.url,
            port: database.port,
            user: database.user,
            password: database.password,
            database:database.database
        },

        migrations: {
            directory: __dirname + '/model/migrations'
        },

        seeds: {
            directory: __dirname + '/model/seeds/developpment'
        }
    }
}