
 CREATE DATABASE  tis;

  CREATE TABLE IF NOT EXISTS users (
   id serial PRIMARY KEY,
   first_name VARCHAR ( 255 ),
   last_name VARCHAR ( 255 ), 	username VARCHAR ( 255 ) UNIQUE,
   email VARCHAR ( 255 ) UNIQUE ,
   password VARCHAR ( 255 ),
   created_at date, 	
   updated_at date 
 );