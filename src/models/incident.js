'use strict';
module.exports = (sequelize, DataTypes) => {
  const Incident = sequelize.define('Incident', {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    value: { type: DataTypes.DECIMAL, allowNull: false }
  }, {});
  Incident.associate = function(models) {
    // associations can be defined here
    this.belongsTo(models.Ong);
  };
  return Incident;
};