const app = require('../../models/app');
// Define our log module
const utilityTool = require('../../lib/utilityTool');

module.exports = (express) => {
  const router = express.Router();

  // This route will Read all Applications
  router.get('/apps', (req, res) => {
    app.all({
      include: [{
        all: true,
        nested: true,
      }],
    }, (err) => {
      utilityTool.debug('Error occurred while attempting to load all apps', err, 0);
      res.status(500).json(err);
    }, (data) => {
      utilityTool.debug('Successfully loaded all apps', data, 1);
      res.status(200).json(data);
    });
  });

  // This route will Read a Application
  router.get('/apps/:id', (req, res) => {
    const body = req.body;
    body.id = req.params.id;
    app.one(body, (err) => {
      utilityTool.debug('Error occurred while attempting to load an app', err, 0);
      res.status(500).json(err);
    }, (data) => {
      utilityTool.debug('Successfully loaded an app', data, 1);
      res.status(200).json(data);
    });
  });

  // This route will Delete an Application
  router.delete('/apps/:id', (req, res) => {
    const body = req.body;
    body.id = req.params.id;
    app.remove(req.body, (err) => {
      utilityTool.debug('Error occurred while attempting to remove an app', err, 0);
      res.status(500).json(err);
    }, (data) => {
      utilityTool.debug('Successfully removed an app', data, 1);
      res.status(200).json(data);
    });
  });

  // This route will Update an Application
  router.post('/apps/:id', (req, res) => {
    const body = req.body;
    body.id = req.params.id;
    app.update(body, (err) => {
      utilityTool.debug('Error occurred while attempting to update an app', err, 0);
      res.status(500).json(err);
    }, (data) => {
      utilityTool.debug('Successfully updated an app', data, 1);
      res.status(200).json(data);
    });
  });

  // This route will Create an Application
  router.post('/apps', (req, res) => {
    const body = req.body;
    app.add(body, (err) => {
      utilityTool.debug('Error occurred while attempting to create an app', err, 0);
      res.status(500).json(err);
    }, (data) => {
      utilityTool.debug('Successfully created an app', data, 1);
      res.status(201).json(data);
    });
  });

  // This route will Read All Applications for a User
  router.get('/users/:id/apps', (req, res) => {
    app.all({
      where: {
        userID: req.params.id,
      },
      include: [{
        all: true,
        nested: true,
      }],
    }, req.body, (err) => {
      utilityTool.debug('Error occurred while attempting to load all apps for a user', err, 0);
      res.status(500).json(err);
    }, (data) => {
      utilityTool.debug('Successfully loaded all apps for a user', data, 1);
      res.status(200).json(data);
    });
  });

  return router;
};
