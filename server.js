const express = require('express');

const app = express();

app.all('*', (request, response, next) => {
    console.log(request.url);
    next();
});


app.get('/hello', (req, res, next) => {
    res.status(200).json

})

//define port
const port = 8080;

app.listen(port, () => {
    console.log('the magic happens at port ' + port)
});

//git testing can you see this?