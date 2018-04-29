const food = require('../model/food')
const app = require('express')()

app.post('/plats', (req, res)=>{
    food.add({
        foodName: "Tieb",
        foodDescription: "Meilleur plat du monde",
        foodPrice: "14",
        foodImage: "voici une autre image",
    })

        .then( (resolution)=> {
            res.send('Un plat a été ajouté')
        }).catch((err)=> res.send('Une erreur a été commise'))
})



module.exports = app