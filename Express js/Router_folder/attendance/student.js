
class Student{
    percentage = 0.0
    constructor(name,rollNo,physics,chemistry,maths){
        this.name = name;
        this.rollNo = rollNo;
        this.physics = physics;
        this.chemistry = chemistry;
        this.maths = maths;
    }

    calcPercentage(){
        this.percentage = (this.physics + this.chemistry + this.maths)/300 * 100;
    }



}
