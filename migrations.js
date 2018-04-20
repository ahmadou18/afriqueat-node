
const db = require("./knexfile")

const create = () => {
    db.query("CREATE TABLE users (" +
        "userId serial," +
        "firstName text," +
        "lastName text," +
        "email text," +
        "password text," +
        " UNIQUE(email));")

    db.query("CREATE TABLE plats (" +
        "platId serial," +
        "platName text," +
        "platDescription text," +
        "platPrice text," +
        "platImage text," +
        "platName(UNIQUE)," +
        "platImage(UNIQUE));")

    db.query("CREATE TABLE panier (" +
        "userId integer REFERENCES users (userId)," +
        "platId integer REFERENCES plats (platId)," +
        "dateTime date);")

    db.query("CREATE TABLE admin (" +
        "adminId serial," +
        "userId integer REFERENCES users (userId));")
}

const dropAndCreate = () => {

    const table  = [
        db.query("DROP TABLE users;"),
        db.query("DROP TABLE plats;"),
        db.query("DROP TABLE panier;"),
        db.query("DROP TABLE admin;")
    ]

    const promesses = Promise.all(table)

    promesses.then(res => {
        db.query("CREATE TABLE users (" +
            "userId serial," +
            "firstName text," +
            "lastName text," +
            "email text," +
            "password text," +
            " UNIQUE(email));")

        db.query("CREATE TABLE plats (" +
            "platId serial," +
            "platName text," +
            "platDescription text," +
            "platPrice text," +
            "platImage text," +
            "platName(UNIQUE)," +
            "platImage(UNIQUE));")

        db.query("CREATE TABLE panier (" +
            "userId integer REFERENCES users (userId)," +
            "platId integer REFERENCES plats (platId)," +
            "dateTime date);")

        db.query("CREATE TABLE admin (" +
            "adminId serial," +
            "userId integer REFERENCES users (userId));")
    })
}

module.exports = create



