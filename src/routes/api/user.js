const user = require('../../models/user');
// Define our log module
// const utilityTool = require('loot-ytilitu');

module.exports = (express) => {
  const router = express.Router();

  // This route will Read all Users
  router.get('/users', (req, res) => {
    user.all((err) => {
      console.log('Error occurred while attempting to load all users', err, 0);
      res.status(500).json(err);
    }, (data) => {
      console.log('Successfully loaded all users', data, 1);
      res.status(200).json(data);
    });
  });

  // This route will Read a User
  router.get('/users/:id', (req, res) => {
    const body = req.body;
    body.id = req.params.id;
    user.one(body, (err) => {
      console.log('Error occurred while attempting to load a user', err, 0);
      res.status(500).json(err);
    }, (data) => {
      console.log('Successfully loaded a user', data, 1);
      res.status(200).json(data);
    });
  });

  // This route will Delete a User
  router.delete('/users/:id', (req, res) => {
    const body = req.body;
    body.id = req.params.id;
    user.remove(body, (err) => {
      console.log('Error occurred while attempting to remove a user', err, 0);
      res.status(500).json(err);
    }, (data) => {
      console.log('Successfully removed an user', data, 1);
      res.status(200).json(data);
    });
  });

  // This route will Update a User
  router.post('/users/:id', (req, res) => {
    const body = req.body;
    body.id = req.params.id;
    user.update(body, (err) => {
      console.log('Error occurred while attempting to update a user', err, 0);
      res.status(500).json(err);
    }, (data) => {
      console.log('Successfully updated a user', data, 1);
      res.status(200).json(data);
    });
  });

  // This route will Create a User
  router.post('/users', (req, res) => {
    const body = req.body;
    user.add(body, (err) => {
      console.log('Error occurred while attempting to create a user', err, 0);
      res.status(500).json(err);
    }, (data) => {
      console.log('Successfully created a user', data, 1);
      res.status(201).json(data);
    });
  });

  return router;
};
