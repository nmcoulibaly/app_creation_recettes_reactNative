const Plat = require('../models/Plat');

const getPlats = (req, res) => {
    Plat.find()
        .then(plats => {
            if (plats.length > 0) {
                res.status(200).json(plats);
                console.log(plats);
            } else {
                res.status(404).json({ notFound: 'Aucun plat trouvé!' });
            }
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        })
}

const getPlatsById = (req, res) => {
    Plat.findById(req.params.id)
        .then(plat => {
            res.status(200).json(plat);
            console.log(plat);
        })
        .catch(err => {
            console.error(err);
            res.status(404).json({ notFound: 'Plat non trouvé!' });
        });
}

module.exports = { getPlats, getPlatsById }