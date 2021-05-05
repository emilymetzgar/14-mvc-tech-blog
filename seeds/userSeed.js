const { User } = require('../models');

const userData =

[
    {
        "name": "Emily Memily",
        "email": "emily@email.com",
        "password": "password"
    },
    {
        "name": "Spongebob Squarepants",
        "email": "spongebob@email.com",
        "password": "password"
    },
    {
        "name": "Joe Snuffy",
        "email": "joe@email.com",
        "password": "password"
    },
    {
        "name": "Jesse Pinkman",
        "email": "jesse@email.com",
        "password": "password12345"
    },
    {
        "name": "Lorelai Gilmore",
        "email": "lorelai@email.com",
        "password": "password12345"
    },
    {
        "name": "The Weekend",
        "email": "weekend@email.com",
        "password": "password12345"
    }
]

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;