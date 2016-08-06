// Here I establsh a constant variable requiring Sequelize
const Sequelize = require('sequelize');

// Here I am requiring the dotenv dependency
require('dotenv').config();

// Here I establish a constant variable that when instatiated will populate the database using preset parameters
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false
});

// Here is the schema for the apps table in my appStore database
const apps = sequelize.define('apps',{
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: Sequelize.STRING
    allowNull: false
  },
  releaseDate: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  }
});

// Here is the schema for the artAssets table in the appStore database
const artAssets = sequelize.define('artAssets',{
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  srcLink: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Here is the schema for the users table in the appStore database
const user = sequelize.define('users', {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

// Here is the foreignKey to link the apps and artAssets tables
apps.hasMany(artAssets, {
  foreignKey: 'appID'
})

// Here is the foreignKey to link the apps and users tables
apps.hasMany(user, {
  foreignKey: 'appID',
})

// Here I sync the above information and populate the appStore database
sequelize.sync();

exports.sequelize = sequelize;
exports.apps = apps;
exports.artAssets = artAssets;
exports.users = users;
