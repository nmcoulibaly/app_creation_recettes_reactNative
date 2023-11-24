const UserController = require('../controllers/UserController');
const express = require('express');
const User = require('../models/User');
const routerUser = express.Router();

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Connexion d'un utilisateur
 *     description: Permet à un utilisateur de se connecter en fournissant son email et son mot de passe.
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: Connexion réussie
 *       404:
 *         description: Utilisateur non trouvé
 *       500:
 *         description: Erreur serveur
 */
routerUser.post('/login', UserController.loginUser);
/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Inscription d'un nouvel utilisateur
 *     description: Permet à un nouvel utilisateur de s'inscrire en fournissant ses informations personnelles.
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: Utilisateur enregistré avec succès
 *       400:
 *         description: Erreur client
 *       500:
 *         description: Erreur serveur
 */
routerUser.post('/register', UserController.registerUser);
/**
 * @swagger
 * /user/add/plat:
 *   post:
 *     summary: Ajouter un plat
 *     description: Permet à un utilisateur qui a un compte d'ajouter un nouveau plat à la liste.
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: Plat ajouté avec succès
 *       400:
 *         description: Erreur client
 *       500:
 *         description: Erreur serveur
 */
routerUser.post('/add/plat/:id', UserController.addPlat);

/**
 * @swagger
 * user/put/plat/{id}:
 *   put:
 *     summary: Modifier un plat
 *     description: Permet à un administrateur de modifier un plat existant en fonction de son ID.
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du plat à modifier
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Plat modifié avec succès
 *       404:
 *         description: Plat non trouvé
 */
routerUser.put('/put/plat/:id', UserController.putPlat);

/**
 * @swagger
 * user/delete/plat/{id}:
 *   delete:
 *     summary: Supprimer un plat
 *     description: Permet à un utilisateur de supprimer un plat existant en fonction de son ID.
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du plat à supprimer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Plat supprimé avec succès
 *       404:
 *         description: Plat non trouvé
 *       500:
 *         description: Erreur serveur
 */
routerUser.delete('/delete/plat/:id', UserController.deletePlat);

/**
 * @swagger
 * user/listePlatUser/{id}:
 *   get:
 *     summary: recupération de la liste des plats d'un utilisateur
 *     description: Permet à un utilisateur d'afficher ses plats existants en fonction de son ID.
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de user
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Plats obtenues avec succès
 *       404:
 *         description: Plats non trouvés
 *       500:
 *         description: Erreur serveur
 */
routerUser.get('/listePlatUser/:id', UserController.getPlatUser);

module.exports = routerUser;
