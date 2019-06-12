module.exports = (sequelize, DataType) => {
// class User extends Model {}
const Sequelize = require('sequelize');
const Model = Sequelize.Model;
class User extends Model {}
User.init({
// attributes
username: {
    type: DataType.STRING
    // allowNull defaults to true
},
password: {
    type: DataType.STRING
},
name: {
    type: DataType.STRING
},
address: {
    type: DataType.STRING
},
mobile: {
    type: DataType.STRING
},
email: {
    type: DataType.STRING
},
picturelocation: {
    type: DataType.STRING
},
pictureformat: {
    type: DataType.STRING
}
}, {
sequelize,
//modelName: 'user'
// options
}
);

return User;
}