<h1 style='color:red; font-weight:bolder'>App Store README</h1>
<ul style='font-size:1.3em'>What's new in v1.5.0?
  <li style='font-size:.8em'>Added Dynamic Unit Testing</li>
  <li style='font-size:.8em'>Added Unit Test Usage Information to README</li>
</ul>  

***

  <h2 style='background:purple'>Usage</h2>
  <h3 style ='background:skyblue;color:black'>Production Usage</h3>
  Install all dependencies
```
npm i
```
  Create a .env file in the project root directory and store these values in a .env file
```
DB_NAME= <--- Your database name in MySQL
DB_USER= <--- Your username in MySQL
DB_PASS= <--- Your password in MySQL
DB_HOST= <--- Your host name in MySQL
DB_SCHEMA= <--- Your username in MySQL
DB_PORT= <--- Your port in MySQL
```

  <h3 style ='background:skyblue;color:black'>Development Usage</h3>
  <h5 style = 'font-style:italic'> -- do the following after the above production usage</h5>
  Install additional dependencies
```
npm i -g mocha nodemon eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```
  Install linter package for Atom IDE
```
apm i linter-eslint
```

  <h3 style ='background:skyblue;color:black'>Debug Usage</h3>
  To run the server with default settings
```
npm start
```
  To run the server with debug settings
```
DEBUG=true npm start
```
  To run the server with nodemon
```
DEBUG=true nodemon src/server.js
```

  <h3 style ='background:skyblue;color:black'>Unit Testing</h3>
  To run the unit tests
```
npm test
```

***

  <h2 style='background:purple'>Endpoints/Routes</h2>
  <h4 style='background:purple;color'>These routes were tested using the Postman application, download it here: https://www.getpostman.com/</h4>
  <h3 style ='background:skyblue;color:black'>CRUD for Users</h3>

  <h4>What this route does:</h4>
  This route will POST (Create) a user and return the results as an object.

| Method | URL | Link |
|---|---|---|
| POST | /api/v1/users | http://localhost:3000/api/v1/users |
  <h5>The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:</h5>
```
{
  "id": "c8c2f2ce-085b-4aa5-9c05-9fa07b17bafc",
  "name": "name",
  "updatedAt": "2016-08-08T03:44:22.000Z",
  "createdAt": "2016-08-08T03:44:22.000Z"
}
```

  <h4>What this route does:</h4>
  This route will GET all the users and return the results as an array of objects.

| Method | URL | Link |
|---|---|---|
| GET | /api/v1/users | http://localhost:3000/api/v1/users |
  <h5>The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:</h5>
```
[
  {
    "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
    "name": "Chapman",
    "createdAt": null,
    "updatedAt": null
  },
  {
    "id": "asdf",
    "name": "asdf",
    "createdAt": null,
    "updatedAt": null
  }
]
```

  <h4>What this route does:</h4>
  This route will GET a specific user and return the results as an object.

| Method | URL | Link |
|---|---|---|
| GET | /api/v1/users/id: | http://localhost:3000/api/v1/users/ae25e5a4-73db-4969-9f6c-acf8246b7faa |
  <h5>The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:</h5>
```
{
  "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
  "name": "Chapman",
  "createdAt": null,
  "updatedAt": null
}
```

  <h4>What this route does:</h4>
  This route will POST (Update) a specific user and return the results as an object.

| Method | URL | Link |
|---|---|---|
| POST | /api/v1/users/:id | http://localhost:3000/api/v1/users/:id |
  <h5>The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:</h5>
```
{
  "id": "c8c2f2ce-085b-4aa5-9c05-9fa07b17bafc",
  "name": "name2",
  "createdAt": "2016-08-08T03:44:22.000Z",
  "updatedAt": "2016-08-08T03:44:45.000Z"
}
```

  <h4>What this route does:</h4>
  This route will DELETE a specific user and return the result of 1, confirming deletion.

| Method | URL | Link |
|---|---|---|
| DELETE | /api/v1/users/:id | http://localhost:3000/api/v1/users |  
  <h5>The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:</h5>
```
1
```

  <h3 style ='background:skyblue;color:black'>CRUD for Apps</h3>
  <h4>What this route does:</h4>
  This route will POST (Create) an app and return the results as an object.

| Method | URL | Link |
|---|---|---|
| POST | /api/v1/apps | http://localhost:3000/api/v1/apps |  |
  <h5>The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:</h5>
```
{
  "id": "d281c58e-4447-48b6-82cd-dc2eb90b5fd6",
  "releaseDate": "2016-08-08T03:47:09.000Z",
  "title": "app title",
  "description": "test",
  "updatedAt": "2016-08-08T03:47:09.000Z",
  "createdAt": "2016-08-08T03:47:09.000Z"
}
```

  <h4>What this route does:</h4>
  This route will GET a specific app and return the results as an object.

| Method | URL | Link |
|---|---|---|
| GET | /api/v1/apps/id: | http://localhost:3000/api/v1/apps/0032c47b-4a7b-4232-9cc3-6af718244ea8 |
  <h5>The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:</h5>
```
{
  "id": "0032c47b-4a7b-4232-9cc3-6af718244ea8",
  "title": "Best App Ever",
  "description": "A fast paced side scrolling shooter",
  "releaseDate": null,
  "createdAt": null,
  "updatedAt": null,
  "userId": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
  "artAssets": [
    {
      "id": 1,
      "title": "Splash Screen",
      "srcLink": "http://i.imgur.com/5e5Ihb6.jpg",
      "createdAt": null,
      "updatedAt": null,
      "appId": "0032c47b-4a7b-4232-9cc3-6af718244ea8"
    },
    {
      "id": 2,
      "title": "Cut Scene",
      "srcLink": "http://i.imgur.com/QQ3O6PO.jpg",
      "createdAt": null,
      "updatedAt": null,
      "appId": "0032c47b-4a7b-4232-9cc3-6af718244ea8"
    }
  ],
  "user": {
    "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
    "name": "Chapman",
    "createdAt": null,
    "updatedAt": null
  }
}
```

  <h4>What this route does:</h4>
  This route will GET all the apps for a specific user and return the results as an array of objects.

| Method | URL | Link |
|---|---|---|
| GET | /api/v1/users/:id/apps | http://localhost:3000/api/v1/users/ae25e5a4-73db-4969-9f6c-acf8246b7faa/apps |  |
  <h5>The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:</h5>
```
[
  {
    "id": "0032c47b-4a7b-4232-9cc3-6af718244ea8",
    "title": "Best App Ever",
    "description": "A fast paced side scrolling shooter",
    "releaseDate": null,
    "createdAt": null,
    "updatedAt": null,
    "userId": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
    "artAssets": [
      {
        "id": 1,
        "title": "Splash Screen",
        "srcLink": "http://i.imgur.com/5e5Ihb6.jpg",
        "createdAt": null,
        "updatedAt": null,
        "appId": "0032c47b-4a7b-4232-9cc3-6af718244ea8"
      },
      {
        "id": 2,
        "title": "Cut Scene",
        "srcLink": "http://i.imgur.com/QQ3O6PO.jpg",
        "createdAt": null,
        "updatedAt": null,
        "appId": "0032c47b-4a7b-4232-9cc3-6af718244ea8"
      }
    ],
    "user": {
      "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
      "name": "Chapman",
      "createdAt": null,
      "updatedAt": null
    }
  }
]
```

  <h4>What this route does:</h4>
  This route will GET all the apps and return the results as an array of objects.

| Method | URL | Link |
|---|---|---|
| GET | /api/v1/apps | http://localhost:3000/api/v1/apps |
  <h5>The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:</h5>
```
[
  {
    "id": "0032c47b-4a7b-4232-9cc3-6af718244ea8",
    "title": "Best App Ever",
    "description": "A fast paced side scrolling shooter",
    "releaseDate": null,
    "createdAt": null,
    "updatedAt": null,
    "userId": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
    "artAssets": [
      {
        "id": 1,
        "title": "Splash Screen",
        "srcLink": "http://i.imgur.com/5e5Ihb6.jpg",
        "createdAt": null,
        "updatedAt": null,
        "appId": "0032c47b-4a7b-4232-9cc3-6af718244ea8"
      },
      {
        "id": 2,
        "title": "Cut Scene",
        "srcLink": "http://i.imgur.com/QQ3O6PO.jpg",
        "createdAt": null,
        "updatedAt": null,
        "appId": "0032c47b-4a7b-4232-9cc3-6af718244ea8"
      }
    ],
    "user": {
      "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
      "name": "Chapman",
      "createdAt": null,
      "updatedAt": null
    }
  },
  {
    "id": "32dc545f-bc0f-4879-ad19-d38ca2d59c3c",
    "title": "Best New Test App",
    "description": "none",
    "releaseDate": "2016-08-08T02:58:00.000Z",
    "createdAt": "2016-08-08T02:58:00.000Z",
    "updatedAt": "2016-08-08T02:58:00.000Z",
    "userId": null,
    "artAssets": [],
    "user": null
  },
  {
    "id": "asdf1",
    "title": "asdf",
    "description": "asdf",
    "releaseDate": null,
    "createdAt": null,
    "updatedAt": null,
    "userId": "asdf",
    "artAssets": [],
    "user": {
      "id": "asdf",
      "name": "asdf",
      "createdAt": null,
      "updatedAt": null
    }
  }
]
```

  <h4>What this route does:</h4>
  This route will POST (Update) a specific app and return the results as an object.

| Method | URL | Link |
|---|---|---|
| POST | /api/v1/apps/:id | http://localhost:3000/api/v1/apps/:id |  |
  <h5>The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:</h5>
```
{
  "id": "d281c58e-4447-48b6-82cd-dc2eb90b5fd6",
  "title": "app title2",
  "description": "test2",
  "releaseDate": "2016-08-08T03:47:09.000Z",
  "createdAt": "2016-08-08T03:47:09.000Z",
  "updatedAt": "2016-08-08T03:47:34.000Z",
  "userId": null
}
```

<h4>What this route does:</h4>
This route will DELETE a specific app and return the result of 1, confirming deletion.

| Method | URL | Link |
|---|---|---|
| DELETE | /api/v1/apps/:id | http://localhost:3000/api/v1/apps/d281c58e-4447-48b6-82cd-dc2eb90b5fd6 |  
  <h5>The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:</h5>
```
1
```

***

<h2 style='background:purple'>Versioning</h2>
Visit SemVer to get the latest info on Semantic Versioning: http://semver.org/spec/v2.0.0.html

***

<h6>Contributed by <a href="mailto:smrogers@fullsail.edu">Shaun M. Rogers</a></h6>
