const express = require('express');
const app = express();
const router  = express.Router();


router.get('/result',(req,res)=> {
    console.log('result is up');
}).listen(8000,(req,res)=>{
    console.log("All the best");
});
