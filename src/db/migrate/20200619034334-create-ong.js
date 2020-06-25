'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Ongs', {
      id: {
        allowNull: false,        
        primaryKey: true, 
        type: Sequelize.STRING
      },      
      name: {
        allowNull: false, 
        type: Sequelize.STRING
      },
      email: {
        allowNull: false, 
        type: Sequelize.STRING
      },
      whatsapp: {
        allowNull: false, 
        type: Sequelize.STRING
      },
      city: {
        allowNull: false, 
        type: Sequelize.STRING
      },
      uf: {
        allowNull: false, 
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Ongs');
  }
};