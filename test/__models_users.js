const expect = require('chai').expect;
const faker = require('faker');
const User = require('../src/models/user');

describe('User Model', () => {
  let testUsersIgnored;

  // Add a User
  it('Adds a new User', (done) => {
    // Generate a fake User with a random name
    const fakeUser = { name: faker.name.firstName(), description: '' };

    // Call user model for adding
    User.add(fakeUser,
      (err) => {
        throw new Error(err);
      },
      (user) => {
        // Save the returned data for later use in tests
        this.tempUserIgnored = user.dataValues;

        // User.name returned from model should match user.name supplied
        expect(user.name).to.be.equal(fakeUser.name);
        done();
      }
    );
  });

  // Test for all Users
  it('Gets All', (done) => {
    User.all(
      (err) => {
        throw new Error(err);
      },
      (users) => {
        this.testUsersIgnored = users;
        expect(this.testUsersIgnored.length).to.be.above(0);
        done();
      }
    );
  });

  // Find a User
  it('Find a User', (done) => {
    // Generate a fake User with a random name
    const targetUser = this.testUsersIgnored[0];

    // Call user model for finding
    User.one(targetUser,
      (err) => {
        throw new Error(err);
      },
      (user) => {
        // User.name returned from model should match user.name supplied
        expect(user.name).to.be.equal(targetUser.name);
        done();
      }
    );
  });

  // Update a User
  it('Update a User', (done) => {
    // Load in the info for an existing user
    const updateUser = this.tempUserIgnored;

    // Generate a new name for the user
    updateUser.name = faker.name.firstName();

    // Call user model for updating
    User.update(updateUser,
      (err) => {
        throw new Error(err);
      },
      (user) => {
        // Save the returned data for later use in tests
        this.tempUserIgnored = user;
        // User.name returned from model should match user.name supplied
        expect(user.name).to.be.equal(updateUser.name);
        done();
      }
    );
  });

  // Remove a User
  it('Remove a User', (done) => {
    // Load in the info for an existing user
    const removeUser = this.tempUserIgnored;
    removeUser.force = true;

    // Call user model for updating
    User.remove(removeUser,
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
