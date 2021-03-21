const express = require("express");
const app = express();
const port = 8000;

const faker = require("faker");

class User {
  constructor() {
    this.id = faker.random.uuid();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumberFormat();
    this.email = faker.internet.email(
      this.firstName,
      this.lastName,
      "gmail.com"
    );
    this.password = faker.internet.password(8);
  }
}

class Company {
  constructor() {
    this.id = faker.random.uuid();
    this.name = faker.company.companyName();
    this.address = {
      street: faker.address.streetAddress("###"),
      city: faker.address.city(0),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    };
  }
}

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    hello: "world",
  });
});

app.get("/api/users/new", (req, res) => {
  const newUser = new User();

  res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
  const newCompany = new Company();

  res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
  const newCompany = new Company();
  const newUser = new User();

  const userCompany = { newUser, newCompany };

  res.json(userCompany);
});

app.listen(port, () => {
  console.log(`listening on port${port} for request to post and respond to`);
});

// Create an api route "/api/users/new" that returns a new user
// Create an api route "/api/companies/new" that returns a new company
// Create an api route "/api/user/company" that returns both a new user and a new company
// Run your server.js file using nodemon
// Using Postman, test your new GET routes
