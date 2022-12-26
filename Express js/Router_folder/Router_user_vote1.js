const express = require('express');
const app = express();

let router = express.Router();

let count = 0 ; 

router.get('/upvote',(req,res)=>{
    count++;
    console.log('Upvote incremented');
    res.send('Thanks for voting !!');
}).get('/downvote',(req,res)=>{
    count--;
    console.log('Downvote decremented');
    res.send('huddd');
}).get('/test',(req,res)=>{
    res.send(`Total votes ${count}`);
});

app.use(router).listen(6000);