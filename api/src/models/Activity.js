const {DataTypes} = require ("sequelize")

//Exportamos la funcion del modelo y luego conectamos con sequelize!

module.exports = (sequelize) => {

    sequelize.define("activity", {
       id: {
        type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       },

       name:{
        type: DataTypes.STRING,
        unique: true,
       },
       
       difficulty:{
        type: DataTypes.ENUM("1","2","3","4","5")


       },
       duration:{
        type:DataTypes.INTEGER,
       },

       season:{
        type:DataTypes.ENUM(["Verano","Otoño","Invierno","Primavera"])
       },

       createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

    });
}
