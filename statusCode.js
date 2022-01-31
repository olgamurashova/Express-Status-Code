const express = require('express');
const app = express();
const port = process.env.port || 8000;

const destinations = [{
    Greece:{days:8, cost:1000},
    Uzbekistan:{days:14, cost:1400},
    Russian:{days: 10, cost:1400},
    Turkey:{days:8, cost:800}
}];

app.get('/destinations/:name',(req,res,next)=>{
const destination = destinations[req.params.name];
if(destination){
    res.send(destination);
} else {
    res.status(400).send('Not found')
}
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}.`)
})
