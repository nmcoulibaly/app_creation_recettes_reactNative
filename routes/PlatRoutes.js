const PlatController = require('../controllers/PlatsController');
const RouterPlat = require('express').Router();
/**
 * @swagger
 * /products:
 *   get:
 *     summary: Liste des produits
 *     description: Renvoie la liste de tous les produits disponibles.
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: Liste des produits récupérée avec succès
 *       500:
 *         description: Erreur serveur
 */
RouterPlat.get('/', PlatController.getPlats);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Récupérer un produit par ID
 *     description: Renvoie un produit en fonction de son ID.
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du produit à récupérer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Produit récupéré avec succès
 *       404:
 *         description: Produit non trouvé
 *       500:
 *         description: Erreur serveur
 */
RouterPlat.get('/plat-details/:id', )
module.exports = RouterPlat;
