const http  = require('http');
const fs = require('fs');
const formidable = require('formidable');


http.createServer((req,res)=>{
    let form = new formidable.IncomingForm();
    form.parse(req,(err,fields,file)=>{
        let filepath = file.fileuploading.filepath;
        console.log(`old path ${filepath}`);
        let newpath = 'uploads/';
        newpath += file.fileuploading.originalFilename;
        console.log(`new path ${newpath}`);
        fs.rename(filepath,newpath,()=>{
            res.write('uploaded file successfully');
            res.end();
        })
    })
}).listen(90);