

const Sequelize = require('sequelize')
const db = require('./../config/db.config')

const Location = require('./Location');





/*var Location = db.sequelize.define('location', { id: {
  type: Sequelize.INTEGER,
  primaryKey: true,
  autoIncrement: true
},
lat: {
  type: Sequelize.STRING
},
lng: {
  type: Sequelize.STRING
}})*/
/*
module.exports = db.sequelize.define(
    'marker', 
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
      },
      icon: {
        type: Sequelize.STRING
      },
     
      location :{
        type: Sequelize.INTEGER,
        references: {
          model: 'location',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false
      } 
      
    }
     ,
    
     {
        associate: function(models) {
          Ma.hasOne(models.Product, { onDelete: 'cascade' });
        }
      }
  
  )*/

 /* module.exports = function(sequelize) {
    var Marker = db.sequelize.define('Marker', {
      id: { type: Sequelize.INTEGER, 
        primaryKey: true,allowNull: false },
        location: {
          type: Sequelize.INTEGER,
          references: 'location', // <<< Note, its table's name, not object name
          referencesKey: 'id' // <<< Note, its a column name
    }
        
         
      
    }
   ,
    { sequelize, modelName: 'Marker' },
    {
    classMethods: 
    {
      associate: function (models) {
        Marker.hasMany(models.Location, { onDelete: 'cascade', hooks: true, onUpdate: 'cascade', foreignKey: {'id': 'id'} });
        Marker.hasOne(Location, { foreignKey: 'id' })
        Marker.belongsTo(models.Location, {
          foreignKey: 'fk_companyname', targetKey: 'id'
      });
      }}
    }
    );
    
  
  
    return Marker
  }*/

  const Marker = db.sequelize.define('Markers', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    lat: {
        type: Sequelize.FLOAT
    },
    lng: {
      type: Sequelize.FLOAT
  },
    location: {
        type: Sequelize.INTEGER,
        references: {
           model: Location, 
           key: 'id',
        }
    }
}, {
    freezeTableName: true
})

module.exports = Marker;
  