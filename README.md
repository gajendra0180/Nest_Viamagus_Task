## Description

  <p>This project is created as a challenge for <a href="https://www.viamagus.com/" target="_blank">Viamagus</a> company. This is a basic nest application with simple functionalities like : 
Ability to create multiple tasks with properties, id, description,due_date, assignee, status, etc.

Ability to add a team with various team members

Ability to assign a task to a team member

Ability to load all tasks with the assignee

Ability to change status/properties of task

Use Typeform for ORM

Use Mysql/Mssql/Mongo for storing the tasks/team info

All the APIs need to be authenticated with a bearer token

Hardcoded user credentials can be used to generate jwt token ( use .env for storing creds)
</p>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## How to use the project
 Go to the file Curl_APIs and find the curl of all the APIs which I have created. Use the curl to generate the api routes.
 Now, create env file with the following structure:
 
  DB_CONNECTION=mysql
  
  DB_HOST=127.0.0.1
  
  DB_PORT=3306
  
  DB_DATABASE=mynewdb
  
  DB_USERNAME=root
  
  DB_PASSWORD='your-passowrd'
  
  MY_KEY='your-jwt-secret'


## Stay in touch

- Author - [Gajendra Pal](https://github.com/gajendra0180)
- Website - [showwcase](https://www.showwcase.com/gajendra0180)

