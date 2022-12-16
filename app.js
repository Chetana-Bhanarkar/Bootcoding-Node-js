const fs = require('fs');
// fs.readFile('oops.html',(err,data)=>{
//     if(err){
//         return err;
//     }
//     console.log(data.toString());

//     writeData(data)
// })

// function writeData(data){
//     fs.writeFile('hello.html' , data , (err)=>{
//         if(err){
//             return err;
//         }
//         console.log(data.toString());
//     })
// }

fs.readFile('oops.html',(err,data)=>{
    if(err){
        return err;
    }
    console.log(data.toString());

    writeData(data)
});


function writeData(data) {
    fs.writeFile('oops2.html', data , (err)=> {
        if(err){
            return
        }
        console.log(data.toString());
    })
}


