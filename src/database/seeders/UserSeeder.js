const User = require('../../models/User');
const faker = require('faker-br');

const seedUser = async function () {
    try {
        await User.sync({ force: true });

        for (let i = 0; i < 9; i++) {
            await User.create ({
                username: faker.name.firstName(),
                birthDate: faker.date.birthDate({min: 1954, max: 2004, mode: year}),
                adress: faker.address.streetAddress(true),
                cpf: faker.br.cpf(),
                email: faker.internet.email(),
                password: faker.internet.password()
            });
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = seedUser;