CREATE TABLE services (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

INSERT INTO services (name)
VALUES  ('formotron');
