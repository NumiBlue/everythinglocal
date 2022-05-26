const { gql } = require('apollo-server-express');


// models are to be filled in below
const typeDefs = gql`
    type User{
        _id: ID
        username: String
        email: String
        
    }

    type Comment {
        _id: ID
        commentText: String
        createdAt: String
        username: String
        subCommentCount: Int
        subComment: [subComment]
    }

    type subComment {
        _id: ID
        reactioBody: String
        createdAt: String
        username: String

    }
`;
// this goes in Mutation {}
// login(email: String!, password: String!): Auth
// addUser(username: String!, email: String!, password: String!): Auth
// addComment(thoughtId: ID!, reatcionBody: String!): Comment
module.exports = typeDefs;