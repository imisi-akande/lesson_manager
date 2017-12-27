'use strict';
module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define('Author', {
    name: DataTypes.STRING,
    subject_teacher: DataTypes.STRING,
    bio: DataTypes.TEXT,
  }, {
    underscored: true,
    classMethods: {
    }
  });
  Author.associate =  function(models) {
    // associations can be defined here
    Author.hasMany(models.Note, {
      onDelete: 'cascade'
    })
  }
  return Author;
};