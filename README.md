# Project: CCCimulate
An app is to simulate the prices of cryptocurrency.
![kovoel-homepage](https://user-images.githubusercontent.com/18551862/38124801-a0246f0c-341f-11e8-85d7-bab46c623d41.png)


## Environment Setup
### Installing Node
Node should be installed globally if you don't have.
```
npm i -g node
```
### Installing Knex
Knex should be installed globally if you don't have.
```
npm i knex -g
```

### Postgres
Postgres should be installed. If you haven't installed it already, download and install the [PostgresApp](https://postgresapp.com/) and verify its working by running the command `psql` in your terminal.

Create a database called 'truckstop'
```
echo "CREATE DATABASE truckstop;" | psql
```

### Installing Dependencies and Set Up

To install dependencies:

```bash
$ yarn
```

### Database Migrations

Install 

To migrate database:

```bash
$ yarn migrate
```

To rollback database:

```bash
$ yarn rollback
```

To seed database:

```bash
$ yarn seed
```
### Starting the application
To start the server:

```bash
$ yarn start
```

To start the client:

```bash
$ yarn hack
```


