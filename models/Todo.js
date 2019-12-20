const Sequelize = require("Sequelize");
module.exports = function(sequelize,datatypes){
class ToDo extends Sequelize.Model{ }
ToDo.init({
    task: {type:datatypes.STRING,allowNull: false},
    done: {
        DefaultValue: false,type: datatypes.BOOLEAN
    }},{sequelize,modelName:"ToDo"
})
ToDo.sync();
return ToDo;
}