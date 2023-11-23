const mongoose = require('mongoose');

const RecetteSchema = new mongoose.Schema({
    details: {
        type: String,
        required: true,
    },
});

module.exports = Recette = mongoose.model("Recette", RecetteSchema, "recipe");