const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego conectamos con sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
     
    },
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    flag: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    continent:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subRegion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.FLOAT,
    },
    population: {
      type: DataTypes.FLOAT,
    },
      
    

  });
};
