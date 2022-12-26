const http = require('http');
const fs = require('fs');
const formidable = require('formidable');


http.createServer((req,res)=>{
   let form = new formidable.IncomingForm();
   form.parse(req,(err,fields,file)=>{
    let filepath =
   })
    
})