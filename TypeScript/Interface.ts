interface userType{
    name : string,
    age : number,
    getName:()=>string;
}

var user : userType={
    name : 'abc',
    age : 12,
    getName:function()
    {
        return 'abc';
    }
};


console.log(user.getName());
