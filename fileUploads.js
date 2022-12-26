const http = require('http');
const fs = require('fs');
const formidable = require('formidable');

// http.createServer(function(req,res){
//     let form = new formidable.IncomingForm();
//     form.parse(req,function(err,fields,file){
//         let filepath = file.fileUploads.filepath;
//         let newPath = 'uploads/';
//         newPath += file.fileUploads.originalFilename;
//         console.log(newPath);
//         fs.rename(filepath,newPath,()=>{
//             res.write('Node js file uploaded');
//             res.end();
//         });
//     });
// }).listen(4200);


http.createServer(function(req,res){
    let form = new formidable.IncomingForm();
    form.parse(req,(err,fields,file)=>{
        let filepath = file.fileUploads.filepath;
        console.log(filepath);
        let newPath = "uploads/";
        newPath += file.fileUploads.originalFilename;
        console.log(newPath);
        fs.rename(filepath, newPath , ()=> {
            res.write('your file uploaded successfully');
            res.end();
        })
    })
}).listen(8280)