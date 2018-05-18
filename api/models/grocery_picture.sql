IF NOT EXISTS CREATE DATABASE liste;

\c liste;

CREATE TABLE grocery_picture (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(70),
  image BYTEA,
  data TIMESTAMPTZ
);
