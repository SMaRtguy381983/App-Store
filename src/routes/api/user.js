const user = require('../../models/user')
// Define our log module
const utilityTool = require('../../lib/utilityTool')

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
      utilityTool.log('Error occurred while attempting to load all users', data.error);
      res.status(500).json(err);
    }, (data) => {
      utilityTool.log('Successfully loaded all users', data.success);
      res.status(200).json(data);
    })
  });

  // This route will Read a User
  router.get('/users/:id', (req, res) => {
    req.body.id = req.params.id;
    user.one(req.body, (err) => {
      utilityTool.log('Error occurred while attempting to load a user', data);
      res.status(500).json(err);
    }, (data) => {
      utilityTool.log('Successfully loaded a user', data);
      res.status(200).json(data);
    })
  });

  // This route will Delete a User
  router.delete('/users/:id', (req, res) => {
    req.body.id = req.params.id;
    user.remove(req.body, (err) => {
      utilityTool.log('Error occurred while attempting to remove a user', data);
      res.status(500).json(err);
    }, (data) => {
      utilityTool.log('Successfully removed an user', data);
      res.status(200).json(data);
    })
  });

  // This route will Update a User
  router.post('/users/:id', (req, res) => {
    req.body.id = req.params.id;
    user.update(req.body, (err) => {
      utilityTool.log('Error occurred while attempting to update a user', data);
      res.status(500).json(err);
    }, (data) => {
      utilityTool.log('Successfully updated a user', data);
      res.status(200).json(data);
    })
  });

  // This route will Create a User
  router.post('/users', (req, res) => {
    user.add(req.body, (err) => {
      utilityTool.log('Error occurred while attempting to create a user', data);
      res.status(500).json(err);
    }, (data) => {
      utilityTool.log('Successfully created a user', data);
      res.status(200).json(data);
    })
  });

  return router;
}
