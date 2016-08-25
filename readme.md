[![App-Store](https://codeship.com/projects/a08b6e10-48ec-0134-0bf2-52b63a9a4ec4/status?branch=master)](https://codeship.com/projects/169472)

---

# **App Store README**
##### This README is best viewed with [Marked 2](http://marked2app.com)

---

## **Usage**
### *Production Usage*
#### Install all dependencies
```
npm i
```
#### Install latest stable version of PM2
```
npm install pm2@latest -g
```
#### Create a env.json file in the project root directory and use the below JSON object template, replacing values as necessary
```
{
  "DB_NAME": "Your database name in MySQL",
  "DB_USER": "Your username in MySQL",
  "DB_PASS": "Your password in MySQL",
  "DB_HOST": "localhost",
  "DB_SCHEMA": "mysql",
  "DB_PORT": "3306"
}
```

#Create logs folder
```
mkdir logs
```

---

### *Development Usage*
###### *-- do the following after the above production usage*
#### Install additional dependencies
```
npm i -g mocha eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```
#### Install linter package for Atom IDE
```
apm i linter-eslint
```

---

### *Debug Usage*
#### To run the server with default settings
```
npm start
```
#### To run the server with debug settings
```
DEBUG=true pm2 start src/server.js --watch ./
```

---

### *Unit Testing*
##### These routes were populated using [Postman](https://www.getpostman.com/')
#### To have users test data readily available use use POST via Postman and this route:
```
104.236.35.11/api/v1/users
```
#### Enter these key:value pairs:
```
{
  "name": " "
}
```
#### To have apps test data readily available use POST via Postman and this route:
```
104.236.35.11/api/v1/apps
```
#### Enter these key:value pairs:
```
{
  "title": " ",
  "description": " "
}
```
#### To run the unit tests:
```
npm test
```

---

## **Deployment**
### *Steps for Deployment*
#### Step 1 - Create a feature branch:
  ```
  git checkout -b "name of your new branch" (no quotes)
  ```
#### Step 2 - Add all working files to a commit:
  ```
  git add -A
  ```
#### Step 3 - Commit to repo:
  ```
  git commit -m "your git repo message"
  ```
#### Step 4 - Push files to master:
  ```
  git push ProductionServer "name of branch created in step 1" (no quotes):master
  ```

---

## **Workflow**
#### Step 1 - Create a feature branch:
```
git checkout -b "name of your new branch" (no quotes)
```
#### Step 2 - Commit to GitHub:
```
git add -A
git commit -m "your message"
git push origin "name of your new branch"
```
#### Step 3 - Using GitHub merge to master:
```
https://github.com/SMaRtguy381983/App-Store
```
#### Step 4 - Tag the version:
```
git tag vX.X.X (Major, Minor, Patch)
```
#### Step 5 - Send to release branch:
```
git push origin -u "name of your new branch":release
```

---

## **Endpoints/Routes**
#### These routes were populated using Postman](https://www.getpostman.com/')
### *CRUD for Users*

#### What this route does:
This route will POST (Create) a user and return the results as an object.

| Method | URL | Link |
|---|---|---|
| POST | /api/v1/users | http://localhost:3000/api/v1/users |
##### The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:
```
{
  "id": "c8c2f2ce-085b-4aa5-9c05-9fa07b17bafc",
  "name": "name",
  "updatedAt": "2016-08-08T03:44:22.000Z",
  "createdAt": "2016-08-08T03:44:22.000Z"
}
```
#### What this route does:
This route will GET all the users and return the results as an array of objects.

| Method | URL | Link |
|---|---|---|
| GET | /api/v1/users | http://localhost:3000/api/v1/users |
##### The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:
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
#### What this route does:
This route will GET a specific user and return the results as an object.

| Method | URL | Link |
|---|---|---|
| GET | /api/v1/users/id: | http://localhost:3000/api/v1/users/ae25e5a4-73db-4969-9f6c-acf8246b7faa |
##### The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:
```
{
  "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
  "name": "Chapman",
  "createdAt": null,
  "updatedAt": null
}
```
#### What this route does:
This route will POST (Update) a specific user and return the results as an object.

| Method | URL | Link |
|---|---|---|
| POST | /api/v1/users/:id | http://localhost:3000/api/v1/users/:id |
##### The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:
```
{
  "id": "c8c2f2ce-085b-4aa5-9c05-9fa07b17bafc",
  "name": "name2",
  "createdAt": "2016-08-08T03:44:22.000Z",
  "updatedAt": "2016-08-08T03:44:45.000Z"
}
```
#### What this route does:
This route will DELETE a specific user and return the result of 1, confirming deletion.

| Method | URL | Link |
|---|---|---|
| DELETE | /api/v1/users/:id | http://localhost:3000/api/v1/users |  
##### The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:
```
1
```
### CRUD for Apps
#### What this route does:
This route will POST (Create) an app and return the results as an object.

| Method | URL | Link |
|---|---|---|
| POST | /api/v1/apps | http://localhost:3000/api/v1/apps |  |
##### The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:
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
#### What this route does:
This route will GET a specific app and return the results as an object.

| Method | URL | Link |
|---|---|---|
| GET | /api/v1/apps/id: | http://localhost:3000/api/v1/apps/0032c47b-4a7b-4232-9cc3-6af718244ea8 |
##### The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:
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
#### What this route does:
This route will GET all the apps for a specific user and return the results as an array of objects.

| Method | URL | Link |
|---|---|---|
| GET | /api/v1/users/:id/apps | http://localhost:3000/api/v1/users/ae25e5a4-73db-4969-9f6c-acf8246b7faa/apps |  |
##### The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:
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
#### What this route does:
This route will GET all the apps and return the results as an array of objects.

| Method | URL | Link |
|---|---|---|
| GET | /api/v1/apps | http://localhost:3000/api/v1/apps |
##### The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:
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
#### What this route does:
This route will POST (Update) a specific app and return the results as an object.

| Method | URL | Link |
|---|---|---|
| POST | /api/v1/apps/:id | http://localhost:3000/api/v1/apps/:id |  |

##### The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:
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
#### What this route does:
This route will DELETE a specific app and return the result of 1, confirming deletion.

| Method | URL | Link |
|---|---|---|
| DELETE | /api/v1/apps/:id | http://localhost:3000/api/v1/apps/d281c58e-4447-48b6-82cd-dc2eb90b5fd6 |  
##### The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:
```
1
```

---

## **Semantic Versioning**
##### Get the latest info on Semantic Versioning at [SemVer](http://semver.org/spec/v2.0.0.html)

---

###### *Contributed by [Shaun M. Rogers](mailto:smrogers@fullsail.edu)*
