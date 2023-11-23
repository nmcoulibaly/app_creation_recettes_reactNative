const mongoose = require('mongoose');

const PlatSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    utilisateur_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    recette_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recette'
    }],
});

module.exports = Plat = mongoose.model("Plat", PlatSchema, "dish");