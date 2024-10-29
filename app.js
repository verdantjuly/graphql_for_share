const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");

const { buildSchema } = require("graphql");

// schema
const schema = buildSchema(`
    type Query {
        hello : String
        welcome(name : String!): String
    }
    `);
// resolver
const root = {
  hello: () => {
    return "안녕하세요";
  },
  welcome: (name) => {
    return `${name} 님 안녕하세요!`;
  },
};

const PORT = 3000;

app.listen(PORT);
