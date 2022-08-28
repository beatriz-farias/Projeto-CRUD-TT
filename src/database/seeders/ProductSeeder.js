const Product = require('../../models/Product');
const faker = require('faker-br');

const seedProduct = async function () {
    try {
        await Product.sync({ force: true });

        for (let i = 0; i < 9; i++) {
            await Product.create ({
                name: faker.commerce.productName(),
                price: faker.commerce.price(20, 5000, 2, 'R$'),
                deliveryType: faker.vehicle.type(),
                photograph: faker.image.technics(125,125,true),
                category: faker.commerce.department(),
                description: faker.commerce.productDescription()
            });
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = seedProduct;