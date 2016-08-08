const db = require('./db');

exports.add = (payload, err, success) => {
  db.app.create(payload).then(success).catch(err);
}

exports.all = (err, success) => {
  db.app.findAll({
    include: [{
      all: true,
      nested: true,
    }]
}).then(success).catch(err);
}

exports.one = (payload, err, success) => {
  db.app.find({
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
  db.app.find({
    where: {
      id: payload.id,
    }
  }).then( (existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
}

exports.remove = (payload, err, success) => {
  db.app.destroy({
    where: {
      id: payload.id,
    }
  }).then(success).catch(err);
}
