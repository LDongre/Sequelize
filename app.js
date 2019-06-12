const Sequelize = require('sequelize')
// service mysql start
//default username is root
const sequelize = new Sequelize('mymusic', 'admin', 'lovesh', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      }
});

sequelize.authenticate().then(()=>{
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

const User = sequelize.import(__dirname + "/models/User.js");


//sync with all
sequelize.sync();


/*
User.sync({}).then(() => {
    // Now the `users` table in the database corresponds to the model definition
    return User.create({
      username: 'LoveshDongre2',
      password: 'helloworld',
      name: 'Lovesh Dongre',
      address: '1234',
      mobile: '7869423256',
      picturelocation: 'LoveshDongre',
      pictureformat: '.jpeg'
    });
  });

  email: 'loveshdongre57@gmail.com',
*/

User.findAll().then(users => {
    console.log("All users:", JSON.stringify(users, null, 4))
})

/*
User.destroy( {
    where: {
        username: "Hacker"
    }
}).then(() => {
    console.log("Deleted")
})
*/
/*
User.update(
    {email: 'loveshdongre@yahoo.com'},
    {where: {username: 'LoveshDongre'}
}).then(()=> {
    console.log("Done")
})*/
