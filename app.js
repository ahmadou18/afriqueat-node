const users = require('./model/users')
const app = require('express')()


// User
app.get('/user', (req, res)=>{
    
})

app.post('/user', (req, res)=>{
    users.add({
        firstName: "Ahmadou",
        lastName: "Ahmadou",
        email: "test@test.com",
        password: "oui",
    })
    .then( (resolution)=> {
        res.send('ok')
    }).catch((err)=> res.send('error'))
})
//Admin

//

app.listen(8888, function (err) {
    if(err) return console.log(err)
    console.log('connected on port 8888')
});

