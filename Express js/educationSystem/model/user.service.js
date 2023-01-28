export function user(username, password)
{
    username=username;
    password=password;
    this.setUsername=function(username)
    {
       username=username;
    }
    this.getUsername=function()
    {
        return username;
    }
    this.setPassword=function(password)
    {
        password=password;
    }
    this.getPassword=function()
    {
        return password;
    }

};


//     id
//     user_name
//     password
//     email_id
//     role
//     created_date
//     created_by
//     modified_date
//     modified_by 