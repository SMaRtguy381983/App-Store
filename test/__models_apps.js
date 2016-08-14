const expect = require('chai').expect;
const faker = require('faker');
const App = require('../src/models/app');

describe('App Model', () => {
  let testAppsIgnored;
  let tempAppIgnored;

  // Test for all Apps
  it('Gets All', (done) => {
    App.all({
      include: [{
        all: true,
        nested: true,
      }],
    },
      (err) => {
        throw new Error(err);
      },
      (apps) => {
        this.testAppsIgnored = apps;
        expect(this.testAppsIgnored.length).to.be.above(0);
        done();
      }
    );
  });

  // Add a App
  it('Adds a new App', (done) => {
    // Generate a fake App with a random title
    const fakeApp = { title: faker.name.firstName(), description: '' };

    // Call app model for adding
    App.add(fakeApp,
      (err) => {
        throw new Error(err);
      },
      (app) => {
        // Save the returned data for later use in tests
        this.tempAppIgnored = app.dataValues;

        // App.title returned from model should match app.title supplied
        expect(app.title).to.be.equal(fakeApp.title);
        done();
      }
    );
  });

  // Find a App
  it('Find a App', (done) => {
    // Generate a fake App with a random title
    const targetApp = this.testAppsIgnored[0];

    // Call app model for finding
    App.one(targetApp,
      (err) => {
        throw new Error(err);
      },
      (app) => {
        // App.title returned from model should match app.title supplied
        expect(app.title).to.be.equal(targetApp.title);
        done();
      }
    );
  });

  // Update a App
  it('Update a App', (done) => {
    // Load in the info for an existing app
    const updateApp = this.tempAppIgnored;

    // Generate a new title for the app
    updateApp.title = 'Not A Real Name';

    // Call app model for updating
    App.update(updateApp,
      (err) => {
        throw new Error(err);
      },
      (app) => {
        // Save the returned data for later use in tests
        this.tempAppIgnored = app;
        // App.title returned from model should match app.title supplied
        expect(app.title).to.be.equal(updateApp.title);
        done();
      }
    );
  });

  // Remove a App
  it('Remove a App', (done) => {
    // Load in the info for an existing app
    const removeApp = this.tempAppIgnored;
    removeApp.force = true;

    // Call app model for updating
    App.remove(removeApp,
      (err) => {
        throw new Error(err);
      },
      (response) => {
        // if successfully removed a 1 should be returned
        expect(response).to.be.equal(1);
        done();
      }
    );
  });
});
