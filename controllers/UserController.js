const Users = require('../models/User');
const Recettes = require('../models/Recette');
const Plats = require('../models/Plat');
const jwt = require('jsonwebtoken');

const loginUser = (req, res) => {
    const email = req.body.email;
    const mot_de_passe = req.body.mot_de_passe;
    Users.findOne({ 'email': email, 'mot_de_passe': mot_de_passe })
        .then(user => {
            console.log('my user:', user);
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
    const mot_de_passe = req.body.mot_de_passe;
    console.log(nom);
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
const addPlat = (req, res) => {
    const nom = req.body.nom;
    const image = req.body.image;
    const id = req.params.id;

    const newPlat = new Plats({
        nom,
        image
    })
    newPlat.save()
        .then(plat => {
            return Users.findByIdAndUpdate(
                id,
                { $push: { plat_id: plat._id } },
                { new: true }
            );
        })
        .then(user => {
            res.status(200).json({ message: 'Plat enregistré et utilisateur mis à jour!' });
            console.log(user);
        })
        .catch(err => {
            console.error(err);
            res.status(400).json({ error: 'Erreur client' });
        });
}
const putPlat = (req, res) => {
    const id = req.params.id;
    Plats.findOneAndUpdate({ _id: id }, req.body)
        .then(plat => {
            res.status(200).json(plat);
            console.log(plat);
        })
        .catch(err => {
            console.error(err);
            res.status(404).json({ notFound: 'Plat non trouvé' });
        });
}
const deletePlat = (req, res) => {
    const id = req.params.id;
    Plats.findByIdAndRemove(id)
        .then(plat => {
            res.status(200).json({ message: 'Plat supprimé!' });
            console.log(plat);
        })
        .catch(err => {
            console.error(err);
            res.status(404).json({ notFound: 'Plat non trouvé' });
        })
}
const getPlatUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Users.findById(id).populate('plat_id');

    const plats = user.plat_id;
    console.log(plats);

    res.status(200).json(plats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

module.exports = { loginUser, registerUser, addPlat, putPlat, deletePlat, getPlatUser }
