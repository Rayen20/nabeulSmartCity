const Sequelize = require('sequelize')
const db = require('./../config/db.config');
const Marker = require('./Marker');




/*module.exports = db.sequelize.define(
    'location',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      lat: {
        type: Sequelize.STRING
      },
      lng: {
        type: Sequelize.STRING
      }
      
     
    }
  )*/

  const Location = db.sequelize.define('locations', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    lat: {
        type: Sequelize.FLOAT
    },
    lng: {
        type: Sequelize.FLOAT,
       
        }
    },
 {
    freezeTableName: true
})




module.exports = Location;
