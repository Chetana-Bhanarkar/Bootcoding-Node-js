const express = require('express');
const app = express();
const map = new Map();
const router =  express.Router();


let attendance_sheet = [] ;
router.get('/attendance/:roll_no',(req,res)=>{
    map[req.params.roll_no] = req.params.roll_no;
    attendance_sheet.unshift(req.params.roll_no);
    res.send(`Attendance is done...`)
    console.log(`Roll no. ${req.params.roll_no} your attendance is done.`);    
}).get('/totalAttendance', (req,res)=>{
    res.send(attendance_sheet);
});

app.use(router).listen(8089,()=>{
    console.log(`Attendance is on...`);
});