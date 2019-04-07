# SESOS
System Elektronicznego Sprawdzania Obecności Studentów

## Installing dependencies

### JS dependencies
To install all required libraries simply run.
```bash
npm install
``` 

### Database
We use PostgreSQL as a SQL Database for our project.
You can download it from https://www.postgresql.org/download/windows/

## Initial configuration

### .env file
Create new .env file and insert into it the content of .env.example file.
Then change the content accordingly to your set up

### Migrations
To run migrations that will set up your database schema you need to run command below 
```bash
.\node_modules\.bin\node-pg-migrate up
```

## Running the application 
To run the application use command below
```bash
node .\server.js
```