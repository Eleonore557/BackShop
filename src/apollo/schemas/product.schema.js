const { gql } = require('apollo-server-express');

module.exports = gql`
    type Product {
        id: ID
        title: String
        price: Int
        description: String,
        img: String
    }
    type Query {
        getProducts:[Product]
        getProduct(id:ID):Product!
    }
    type Mutation {
        createProduct(title:String!,description: String,price:Int, img:String):Product
        updateProduct(id:ID!,title:String!,description: String,price:Int, img:String):Product
    }
`
