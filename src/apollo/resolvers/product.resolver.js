const Product = require('../../models/product.model');

module.exports = {
    Query: {
        getProducts: () => {
            return Product.find();
        },
        getProduct(parent, args, context) {
            return Product.findById(args.id);
        }
    },
    Mutation: {
        createProduct(parent, args) {
            const newProduct = new Product(
                {
                    title: args.title,
                    description: args.description,
                    price: args.price,
                    img: args.img
                }
            )
            return newProduct.save();
        },
        updateProduct(parent, {id, title, description, img, price}) {
            return Product.findByIdAndUpdate(id, { title: title, description: description, img: img, price: price });
        }
    }

}