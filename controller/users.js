const users = require('../model/users')
const app = require('express')()

app.post('/user', (req, res)=>{
    users.add({
        firstName: "Maxime",
        lastName: "Balme",
        email: "maxime@balme.com",
        password: "maxime",
    })

        console.log("ok")
    .then( (resolution)=> {
        res.send('Un utilisateur a été ajouté')
    }).catch((err)=> res.send('Une erreur a été commise'))
})



module.exports = app