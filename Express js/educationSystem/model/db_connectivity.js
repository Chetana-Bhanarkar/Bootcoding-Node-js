// var mysql = require('mysql');
const config = {
  host: "localhost",
  user: "root",
  password: "Chetana@2706",
  database: "bootcoding"
}

const mysql = require('mysql2/promise');

async function query(sql, params) {
  const connection = await mysql.createConnection(config);
  const [results,] = await connection.execute(sql, params);

  return results;
}


query(`select * from user`);






// // async function InsertUser(sql,params){
// //   const connection = await mysql.createConnection(config);
// //   const[results, ] = await connection.execute(sql,params);

// //   return results;
// // }


// // async function DeleteUser(sql,params){
// //   const connection = await mysql.createConnection(config);
// //   const[results, ] = await connection.execute(sql,params);

// //   return results;
// // }


// // async function ExistUser(sql,params){
// //   const connection = await mysql.createConnection(config);
// //   const[results, ] = await connection.execute(sql,params);

// //   return results;
// // }




// // query('select user_name from user');
// // DeleteUser('DELETE FROM user WHERE id = 14;')
// // ExistUser(`SELECT user_name
// // FROM user
// // WHERE EXISTS
// // (SELECT user_name FROM user WHERE user_name = chetana)`)
// // InsertUser(`INSERT INTO user (id , user_name , password)
// // VALUES (12, "chetana" , 123)`);
// // InsertUser(`INSERT INTO user (id , user_name , password)
// // VALUES (14, "chetanaB" , 13)`);



// // config.connect(function(err){
// //   for (var i = 0; i <= 100; i++){
// //     config.query(`INSERT INTO user(user_name , password) VALUES(chetana bhanarkr , 1234`), (err, result) => {
// //       if (err) throw err;
// //       console.log('Values added');
// //     }
// //   });


//   // config.connect(function(err){
//   //   for (let i=0; i < addreses.length; i++) { 
//   //     con.query(`INSERT INTO user(user_name , password) VALUES(chetana bhanarkr , 1234)`, function(err, result){
//   //           if(err) throw err;
//   //           console.log('VALUES ADDED')
//   //       });
//   //     }
//   //   })

//   let d = [{
//     "username" : "test",
//     "password" : "test"
//   }];

//   async function insert(d, params) {
//     const connection = await mysql.createConnection(config);
//     for (let i=1; i<=d.length; i++){
//       let sql = "INSERT INTO user(id, user_name, password)" + 
//       " VALUES ("+ i + ", '" + d[i].username + "' , '" + d[i].password + "')";
//       const[results,] = await connection.execute(sql,params);
//       return results;
//     }
//   }

// // ALTER TABLE user AUTO_INCREMENT=100;
  

//   console.log(insert(d));
 
    
 



