const { gql } = require('apollo-server-express');


// models are to be filled in below
const typeDefs = gql`
    type User{
        _id: ID
        username: String
        email: String
        
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: Sting!): Auth
        addComment(thoughtId: ID!, reatcionBody: String!): Comment
    }

`;

module.exports = typeDefs;