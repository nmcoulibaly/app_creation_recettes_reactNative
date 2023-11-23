const Users = require('../models/User');
const Recettes = require('../models/Recette');
const Plats = require('../models/Plat');
const jwt = require('jsonwebtoken');

const loginUser = (req, res) => {
    const email = req.body.email;
    const mot_de_passe = req.body.mot_de_passe;
    Users.findOne({ 'email': email, 'mot_de_passe': mot_de_passe })
        .then(user => {
            const token = jwt.sign({ userId: user._id }, 'votre_secret_key_secrete', { expiresIn: '1h' });
            if (!user) {
                return res.status(404).json({ notFound: 'utilisateur non trouvé!' });
            }
            // res.status(200).json(user);
            res.json({ token });
            console.log(user);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'error serveur!' });
        });
}

const registerUser = (req, res) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const telephone = req.body.telephone;
    const email = req.body.email;
    const mot_de_passe = require.body.mot_de_passe;

    const newUser = new Users({
        nom,
        prenom,
        telephone,
        email,
        mot_de_passe
    })
    newUser.save()
        .then(user => {
            res.status(200).json({ message: 'Utilisateur enregistré!' });
            console.log(user);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({ error: 'Erreur Client' });

        });

}

module.exports = { loginUser, registerUser }