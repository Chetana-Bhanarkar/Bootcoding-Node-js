

function  createDatapopulation(){
    let studentData = new Map();
    
        let data = [
            {
             name : 'halley',
             rollNo : 1 ,
             physics : 75 ,
             chemistry : 80 ,
             maths : 77
             },{
             name : 'John',
             rollNo : 2 ,
             physics : 70 ,
             chemistry : 60 ,
             maths : 79
             },{
             name : 'Doe',
             rollNo : 3 ,
             physics : 60 ,
             chemistry : 50 ,
             maths : 99
             }
            ]

        console.log(data);
        for(let d in data){
            let s = new Student(d.rollNo);
            s.calcPercentage();
            studentData[s.rollNo] = s
        }
        return studentData;
    }

console.log(createDatapopulation());
 