// Here I establsh a constant variable requiring Sequelize
const Sequelize = require('sequelize');

// Here I am requiring the dotenv dependency
require('dotenv').config();

/** Here I establish a constant variable that when instatiated will populate
* the database using preset parameters
*/
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

// Here is the schema for the apps table in my appStore database
const app = sequelize.define('app', {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  releaseDate: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
});

// Here is the schema for the artAssets table in the appStore database
const artAsset = sequelize.define('artAsset', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  srcLink: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Here is the schema for the users table in the appStore database
const user = sequelize.define('user', {
  id: {
    type: Sequelize.UUID,
    unique: true,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

/** Here is the foreignKey to link the app and artAssets tables, and
* establishes that apps can have muliple artAssets
*/
app.hasMany(artAsset, {
  foreignKey: 'appId',
});

/** Here is the foreignKey to link the user and users tables, and establishes
* that users can have muliple apps
*/
user.hasMany(app, {
  foreignKey: 'userId',
});
app.belongsTo(user);

// Here I sync the above information and populate the appStore database
sequelize.sync();

exports.sequelize = sequelize;
exports.app = app;
exports.artAsset = artAsset;
exports.user = user;
