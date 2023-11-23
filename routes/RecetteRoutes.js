const recetteController = require('../controllers/RecetteController.js');
const router = require('express').Router()

// Afficher toutes les recettes
router.get('/', recetteController.getRecettes);

// Afficher une recette en fonction de l'id
router.get('/recettes/:id', recetteController.getRecetteById);

// Créer une nouvelle recette
router.post('/recettes', recetteController.createRecette);

// Modifier une recette en fonction de l'id
router.put('/recettes/:id', recetteController.updateRecette);

// Supprimer une recette en fonction de l'id
router.delete('/recettes/:id', recetteController.deleteRecette);

module.exports = router;
