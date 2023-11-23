const PlatController = require('../controllers/PlatsController');
const RouterPlat = require('express').Router();
/**
 * @swagger
 * /plats:
 *   get:
 *     summary: Liste des plats
 *     description: Renvoie la liste de tous les plats disponibles.
 *     tags:
 *       - Plats
 *     responses:
 *       200:
 *         description: Liste des plats récupérée avec succès
 *       500:
 *         description: Erreur serveur
 */
RouterPlat.get('/', PlatController.getPlats);

/**
 * @swagger
 * /plats/{id}:
 *   get:
 *     summary: Récupérer un plat par ID
 *     description: Renvoie un plat en fonction de son ID.
 *     tags:
 *       - Plats
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du plat à récupérer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Plat récupéré avec succès
 *       404:
 *         description: Plat non trouvé
 *       500:
 *         description: Erreur serveur
 */
RouterPlat.get('/plat-details/:id', PlatController.getPlatsById);
module.exports = RouterPlat;
