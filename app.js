const user = require('./model/users')
const app = require('express')()


// User
app.post('/user', (req, res)=>{


})
//Admin

//

app.listen(8888, function (err) {
    if(err) return console.log(err)
    console.log('ok')
});

