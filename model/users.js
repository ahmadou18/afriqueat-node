const knex = require('./knex')

function user(){
    return knex("users")
}

function All() {
    return user()
}


function getby(data) {
    // {userId: 3, isAdmin: true)
    return user().where(data)
}

function add(data) {
    return user().insert(data)
}

function updateData(data) {
    return user().update(data)

}

function del(data) {
    return user().delete(data)

}


module.exports = {
    All,
    getby,
    add,
    updateData,
    del
}