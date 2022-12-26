const express = require('express');
const app = express();

app.get('/vote',(req,res)=>{
    console.log('request received');
    res.send('Thanks for voting');
}).listen(3000);