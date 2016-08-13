// Here a constant variable is set that make db required
const db = require('./db');

// This model is used to show blueprint on how to treat the Adding of an app
exports.add = (payload, err, success) => {
  db.app.create(payload).then(success).catch(err);
};

// This model is used to show blueprint on how to treat the Showing of all apps
exports.all = (payload, err, success) => {
  db.app.findAll(payload).then(success).catch(err);
};

// This model is used to show blueprint on how to treat the Showing of an app
exports.one = (payload, err, success) => {
  db.app.find({
    where: {
      id: payload.id,
    },

    // Here we esatblish all relations in Sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
};

// This model is used to show blueprint on how to treat the Updating of an app
exports.update = (payload, err, success) => {
  db.app.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
};

// This model is used to show blueprint on how to treat the Removing of an app
exports.remove = (payload, err, success) => {
  db.app.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
};
