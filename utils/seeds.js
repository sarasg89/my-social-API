const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { userData, thoughtsData } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await Thought.deleteMany({});
    await User.deleteMany({});

    await User.collection.insertMany(userData);
    await Thought.collection.insertMany(thoughtsData);

    console.info('The database has been seeded successfully');
    process.exit(0);
});
