'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    name: DataTypes.STRING,
    subject: DataTypes.STRING,
    level: DataTypes.STRING,
    publication_date: DataTypes.DATE,
    description: DataTypes.TEXT,
    author_id: DataTypes.INTEGER
  }, {
    underscored: true,
    classMethods: {
        // associations can be defined here
    }
  });
  Note.associate = (models) => {
    Note.belongsTo(models.Author, {
      onDelete: 'cascade'
    });
  }
  return Note;
};