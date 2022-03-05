const express = require("express");
const faker = require('faker');
const app = express();
const port = 8000;

app.get('/api/users/new', (req, res) =>{
    res.json(createUser());
});

app.get('/api/companies/new', (req, res) =>{
    res.json(createCompany());
});

app.get('/api/user/company', (req, res) =>{
    res.json([createCompany(), createUser()]);
});

app.get('/api', (req, res) => {
    res.json({message: "Stella is a good dog."});
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );

const createUser = () => {
    const fakeUser = {
        _id: faker.datatype.number(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return fakeUser;
}

const createCompany = () => {
    const fakeCompany = {
        _id: faker.datatype.number(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return fakeCompany;
}

// const newUser = createUser();
// const newCompany = createCompany();
// console.log(newUser);
// console.log(newCompany);