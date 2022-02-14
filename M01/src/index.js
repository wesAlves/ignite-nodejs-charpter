const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

const customers = [];

function verifyExistsAccountCPF(request, response, next) {
    const { cpf } = request.headers;

    const customer = customers.find((customer) => customer.cpf === cpf);

    if (!customer) {
        return response.status(400).json({ error: "Customer does not exits" });
    }

    request.customer = customer;

    return next();
}

function getBalance(statement) {
    const balance = statement.reduce((acc, operation) => {
        if (operation.type === "credit") {
            return acc + operation.ammount;
        } else {
            return acc - operation.ammount;
        }
    }, 0);
}

app.post("/account", (request, response) => {
    const { cpf, name } = request.body;

    const customerAlreadExists = customers.some(
        (customer) => customer.cpf === cpf
    );

    if (customerAlreadExists) {
        return response
            .status(400)
            .json({ Error: "Customer already exists!!!!" });
    }
    customers.push({ cpf, name, id: uuidv4(), statement: [] });

    return response.status(201).send(customers);
});

app.get("/statement", verifyExistsAccountCPF, (request, response) => {
    const { customer } = request;

    return response.json(customer.statement);
});

app.post("/deposit", verifyExistsAccountCPF, (request, response) => {
    const { description, ammount } = request.body;

    const { costumer } = request;

    const statementOperation = {
        description,
        ammount,
        created_at: new Date(),
        type: "credit",
    };

    costumer.statement.push(statementOperation);

    return response.status(201).send();
});

app.post("/withdraw", verifyExistsAccountCPF, (request, response) => {
    const { ammount } = request.body;

    const { costumer } = request;

    const balance = getBalance(customer.statement);

    if (balance < ammount) {
        return response.status(400).json({ error: "Insufficient funds!" });
    }

    const statementOperation = {
        ammount,
        created_at: new Date(),
        type: "debit",
    };

    costumer.statement.push(statementOperation);

    return response.status(201).send();
});

app.listen(3333);
console.log("Server is running on 3333");
