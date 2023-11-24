const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    prenom: {
        type: String,
        required: true,
    },
    telephone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mot_de_passe: {
        type: String,
        required: true,
    },
    plat_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plat'
    }],
});

module.exports = Users = mongoose.model("Users", UserSchema, "user");
