const express = require('express');
const app = express();
let map = new Map();
let router = express.Router();

let count = 0;

router.get('/user/:userID/upvote',(req,res)=>{
    count++
    map[req.params.userID] = req.params.userID;
    console.log(`upvote ${map[req.params.userID]}`);
    res.send(`thank you for the voting ${map[req.params.userID]}`);
}).get('/user/:userID/downvote',(req,res)=>{
    count--
    map[req.params.userID] = req.params.userID;
    console.log(`Downvote ${map[req.params.userID]}`);
    res.send(`Downvoting ${map[req.params.userID]}`);
}).get('/count',(req,res)=>{
    res.send(`total count ${count}`)
});

app.use(router).listen(6000);