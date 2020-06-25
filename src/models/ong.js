'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ong = sequelize.define('Ong', {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    whatsapp: { type: DataTypes.STRING, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false },
    uf:  { type: DataTypes.STRING, allowNull: false }
  }, {});
  Ong.associate = function(models) {
    // associations can be defined here
    this.hasMany(models.Incident);
  };
  return Ong;
};