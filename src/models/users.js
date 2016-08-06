const db = require('./db');

exports.create = (payload, err, success) => {
  db.users.create(payload).then(success).catch(err);
}


exports.findAll = (err, success) => {
  db.users.findAll().then(success).catch(err);
}

exports.find = (payload, err, success) => {
  db.users.find({
    where: {
      id: payload.id,
    },
    // find all relations in sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
}

exports.update = (payload, err, success) => {
  db.users.find({
    where: {
      id: payload.id,
    }
  }).then( (existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
}

exports.destroy = (payload, err, success) => {
  db.users.destroy({
    where: {
      id: payload.id,
    }
  }).then(success).catch(err);
}
