const expect = require('chai').expect;
const request = require('supertest');
const App = require('../src/models/app');
const uTool = require('loot-ytilitu');

// describe('User Routes', () => {
//   let server;
//   let userIgnored;
//
//   beforeEach(() => {
//     server = require('../src/server');
//   });
//
//   afterEach(() => {
//     server.close();
//   });
//
//   const routes = [
//     {
//       cb: (done) => {
//           request(server)
//           .get(routes[i].route)
//           .set('Accept', 'application/json')
//           .expect('Content-Type', /json/)
//           .expect((res) => {
//             const users = res.body;
//
//       },
//     description: 'Dynamically returns multiple users',
//     route: '/api/v1/users',
//     type: 'GET',
//   },
// ];
//
//   // Dynamic Test for Multiple Users
// for (let i = 0; i < routes.length; i++) {
//   it(`${routes[i].description} ${routes[i].route} ${routes[i].type}`, routes[i].cb1);
// }
//
//
//         // Save one single user from the list to test on in later tests
//         this.userIgnored = users[0];
//
//         expect(users.length).to.be.above(0);
//       })
//       .end(done);
//   });
//
//   // Test for a single user
//   it('GET /api/v1/users/:id returns an user obj with a id and name property', (done) => {
//     request(server)
//       .get('/api/v1/users/' + this.userIgnored.id)
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect((res) => {
//         const user = res.body;
//         expect(user).to.have.property('id');
//         expect(user).to.have.property('name');
//       })
//       .end(done);
//   });
//
//   // Test for the Apps of a Specific user
//   it('GET /api/v1/users/:id/apps should find all apps for a user', (done) => {
//     const newApp = {
//       id: 'asdf',
//       title: 'Best New Test App',
//       description: 'none',
//       userId: this.userIgnored.id };
//
//       // console.log(newApp.userId);
//     App.add(newApp, null, () => {
//       request(server)
//         .get('/api/v1/users/' + this.userIgnored.id + '/apps')
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect((res) => {
//           const apps = res.body;
//
//             // console.log(apps);
//           // Save one single app from the list to test on in later tests
//           expect(apps.length).to.be.above(0);
//         })
//         .end(( ) => {
//       App.remove(newApp, (data) => {
//         request(server)
//         .get(`/api/v1/apps/${newApp, id}`)
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect( ( res ) => {
//           const tmpApp = res.body;
//           expect(tmpApp).to.equal(1);
//         })
//         .end(done);
//       }, err => uTool.debug(err))
//       });
//     });
//   });
// });
