// require('dotenv').config();
const mongoose = require('mongoose');

const connect = async () => {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect('mongodb+srv://ndeye:dish_recipe@cluster0.reto8sf.mongodb.net/?retryWrites=true&w=majority');
        console.log('Connexion réussie!');

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}
module.exports = connect;