const { gql } = require('apollo-server-express');

module.exports = gql`
    type Order {
        id: ID
        amount: Int
        date: String
        stripeId:String
        status: String
        user: User
        products:[Product]
    }
    extend type Query {
        getOrder(id:ID): Order
        getOrders(id:ID): [Order]
    }
`