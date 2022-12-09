const { DataTypes } =  require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('Activity', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { 
          max: 5,
          min: 1
      }
    },
    duration: {
      type: DataTypes.FLOAT, // Time
      allowNull: false,
    },
    season: {
      type: DataTypes.ENUM('summer', 'autumn', 'winter', 'spring')
    }
  }, {
    timestamps: false,
  })
}