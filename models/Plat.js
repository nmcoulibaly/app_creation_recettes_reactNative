const mongoose = require('mongoose');

const PlatSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    recette_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recette'
    }],
    image: {
        type: String
    }
});

module.exports = Plat = mongoose.model("Plat", PlatSchema, "dish");