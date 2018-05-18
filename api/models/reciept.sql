IF NOT EXISTS CREATE DATABASE liste;

\c liste;

CREATE TABLE reciept_picture (
  ID SERIAL PRIMARY KEY,
  image BYTEA,
  date TIMESTAMPTZ
);
