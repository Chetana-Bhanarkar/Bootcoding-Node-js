const http = require('http');
const fs = require('fs');
let formidable = require('formidable');

http.createServer((req, res) => {
    let form = new formidable.IncomingForm();
    form.parse(req, (err, fields, file) => {
        let filepath = file.fileuploads.filepath;
        console.log(filepath)
        let newpath = 'uploads/';
        newpath += file.fileuploads.originalFilename;
        console.log(`${newpath}`)
        fs.rename(filepath, newpath, () => {
            res.write('Node js file uploaded successfully ! ');
            res.end();
        });
    });
}).listen(8081);