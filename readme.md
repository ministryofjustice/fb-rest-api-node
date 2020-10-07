# Services API Spike
A quick spike to demonstrate what the API could look like in Node

_______

## Running the project

### Install node

```
// check if you have node installed
node -v

// if not install node
brew install node
```


### Install npm
```
//check if you have npm installed
npm -v 

// if not install npm
npm install npm@latest -g
```

- Install project dependencies, in the root of the project run: `npm i`


### Install, start and login to postgres
```
brew install postgresql         // install

brew services start postgresql  //start

psql postgres                   // login to postgress

```

- Create a user and database
```
// create a user and password, give them create database access
CREATE ROLE api_user WITH LOGIN PASSWORD 'password';
ALTER ROLE api_user CREATEDB;

// log out as root and log in as new user

\q
psql -d postgres -U api_user

// To check who ou are logged in as

\conninfo

// Create database and connect
CREATE DATABASE services_api;
\c services_api

// Create table
CREATE TABLE services (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

// Insert an entry into the table
INSERT INTO services (name)
VALUES  ('formotron');
```


#### To start the server: `npm start`
_______

### Testing
- To run the test suite: `npm run test`
- If you get an error that looks like this `Cannot find module 'jest-cli/bin/jest`
You will need to install the jest-cli: `npm install jest-cli --save`

_______

### Dependencies used
`nodemon` watches the server

`body-parser` Parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request

`express` A web framework for Node

`supertest` For testing servers

`jest` JavaScript testing framework


_______

### How to use the API

##### GET
- This endpoint returns all the services currently in the postgres database
- You can curl this endpoint: `curl http://localhost:3002/services`

##### POST
- This endpoint allows you to add a service to the database
- Send a request in the following format:

```
{"name": "name-of-service"}
```

_______

#### Further things to look into
- The tests hang after once they have run, this is because the postgres connection is still open. Will need to find a way to close this in the `server.test.js` file
- Security: could probably use something like [helmet](https://www.npmjs.com/package/helmet)
