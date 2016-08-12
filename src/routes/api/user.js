const user = require('../../models/user');
// Define our log module
const utilityTool = require('../../lib/utilityTool');

const colors = require('colors');
colors.setTheme({
  success: 'green.bold',
  error: 'red.bold'
});

module.exports = (express) => {
  const router = express.Router();

  // This route will Read all Users
  router.get('/users', (req, res) => {
    user.all( (err) => {
      utilityTool.debug('Error occurred while attempting to load all users', err.error);
      res.status(500).json(err);
    }, (data) => {
      utilityTool.debug('Successfully loaded all users', data.success);
      res.status(200).json(data);
    })
  });

  // This route will Read a User
  router.get('/users/:id', (req, res) => {
    req.body.id = req.params.id;
    user.one(req.body, (err) => {
      utilityTool.debug('Error occurred while attempting to load a user', err);
      res.status(500).json(err);
    }, (data) => {
      utilityTool.debug('Successfully loaded a user', data);
      res.status(200).json(data);
    })
  });

  // This route will Delete a User
  router.delete('/users/:id', (req, res) => {
    req.body.id = req.params.id;
    user.remove(req.body, (err) => {
      utilityTool.debug('Error occurred while attempting to remove a user', err);
      res.status(500).json(err);
    }, (data) => {
      utilityTool.debug('Successfully removed an user', data);
      res.status(200).json(data);
    })
  });

  // This route will Update a User
  router.post('/users/:id', (req, res) => {
    req.body.id = req.params.id;
    user.update(req.body, (err) => {
      utilityTool.debug('Error occurred while attempting to update a user', err);
      res.status(500).json(err);
    }, (data) => {
      utilityTool.debug('Successfully updated a user', data);
      res.status(200).json(data);
    })
  });

  // This route will Create a User
  router.post('/users', (req, res) => {
    user.add(req.body, (err) => {
      utilityTool.debug('Error occurred while attempting to create a user', err);
      res.status(500).json(err);
    }, (data) => {
      utilityTool.debug('Successfully created a user', data);
      res.status(200).json(data);
    })
  });

  return router;
}
