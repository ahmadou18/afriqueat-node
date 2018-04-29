const usersContoller = require('./controller/users')
const foodContoller = require('./controller/food')


const app = require('express')()

app.use(usersContoller)
app.use(foodContoller)



app.listen(8888, function (err) {
    if(err) return console.log(err)
    console.log('connected on port 8888')
});
