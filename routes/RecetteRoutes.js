const recetteController = require('../controllers/RecetteController.js');
const router = require('express').Router()
/**
 * @swagger
 * /recettes:
 *   get:
 *     summary: Liste des recettes
 *     description: Renvoie la liste de toutes les recettes disponibles.
 *     tags:
 *       - Recettes
 *     responses:
 *       200:
 *         description: Liste des recettes récupérées avec succès
 *       500:
 *         description: Erreur serveur
 */

// Afficher toutes les recettes
router.get('/', recetteController.getRecettes);
/**
 * @swagger
 * /recettes/{id}:
 *   get:
 *     summary: Récupérer une recette par ID
 *     description: Renvoie une recette en fonction de son ID.
 *     tags:
 *       - Recettes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la recette à récupérer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: recette récupérée avec succès
 *       404:
 *         description: recette non trouvé
 *       500:
 *         description: Erreur serveur
 */
// Afficher une recette en fonction de l'id
router.get('/:id', recetteController.getRecetteById);
/**
 * @swagger
 * /recettes/ajout:
 *   post:
 *     summary: Création d'une nouvelle recette
 *     description: Permet à un nouvel utilisateur de Créer une nouvelle recette.
 *     tags:
 *       - Recettes
 *     responses:
 *       200:
 *         description: Recette enregistrée avec succès
 *       400:
 *         description: Erreur client
 *       500:
 *         description: Erreur serveur
 */
// Créer une nouvelle recette
router.post('/ajout', recetteController.createRecette);
/**
 * @swagger
 * /maj/{id}:
 *   put:
 *     summary: Modifier une recette
 *     description: Permet à un utilisateur de modifier une recette existant en fonction de son ID.
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la recette à modifier
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Recette modifiée avec succès
 *       404:
 *         description: Plat non trouvé
 */
// Modifier une recette en fonction de l'id
router.put('/maj/:id', recetteController.updateRecette);
/**
 * @swagger
 * /{id}:
 *   delete:
 *     summary: Supprimer une recette
 *     description: Permet à un administrateur de supprimer une recette existante en fonction de son ID.
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la recette à supprimer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Recette supprimée avec succès
 *       404:
 *         description: Plat non trouvé
 *       500:
 *         description: Erreur serveur
 */
// Supprimer une recette en fonction de l'id
router.delete('/:id', recetteController.deleteRecette);

module.exports = router;
