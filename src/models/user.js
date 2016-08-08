// Here a constant variable is set that make db required
const db = require('./db');

// This model is used to show blueprint on how to treat the Adding of a user
exports.add = (payload, err, success) => {
  db.user.create(payload).then(success).catch(err);
}

// This model is used to show blueprint on how to treat the Showing of all users
exports.all = (err, success) => {
  db.user.findAll().then(success).catch(err);
}

// This model is used to show blueprint on how to treat the Showing of a user
exports.one = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    }
  }).then(success).catch(err);
}

// This model is used to show blueprint on how to treat the updating of a user
exports.update = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    }
  }).then( (existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
}

// This model is used to show blueprint on how to treat the Removing of an user
exports.remove = (payload, err, success) => {
  db.user.destroy({
    where: {
      id: payload.id,
    }
  }).then(success).catch(err);
}
