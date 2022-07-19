const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log('connect successfully');
    } catch (error) {
        console.log('connect fail');
    }
};

module.exports = { connect };
