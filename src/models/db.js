const Sequelize = require('sequelize');

require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
});


const app = sequelize.define('apps',{
  id: {
    type: Sequelize.STRING,
  },
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING,
  },
  artAssetsId: {
    type: Sequelize.INTEGER,
  },
  releaseDate: {
    type: Sequelize.STRING,
  },
  createdAt: {
    type: Sequelize.STRING,
  },
  updatedAt: {
    type: Sequelize.STRING,
  }
});

const artAssets = sequelize.define('artAssets',{
  id: {
    type: Sequelize.STRING,
  },
  title: {
    type: Sequelize.STRING,
  },
  srcLink: {
    type: Sequelize.VARCHAR,
  }
});

const user = sequelize.define('users', {
  id: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
});

apps.hasMany(user, {
  foreignKey: 'appID',
})

artAssets.hasMany(user, {
  foreignKey: 'artAssetID'
})


sequelize.sync();

exports.sequelize = sequelize;
exports.apps = app;
exports.artAssets = artAsset;
exports.users = user;
