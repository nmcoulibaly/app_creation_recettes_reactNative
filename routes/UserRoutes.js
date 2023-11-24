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
 *       - Users
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
 *       - Users
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
 *       - Admin
 *     responses:
 *       200:
 *         description: Plat ajouté avec succès
 *       400:
 *         description: Erreur client
 *       500:
 *         description: Erreur serveur
 */
routerUser.post('/add/plat', UserController.addPlat);

/**
 * @swagger
 * user/put/plat/{id}:
 *   put:
 *     summary: Modifier un plat 
 *     description: Permet à un administrateur de modifier un plat existant en fonction de son ID.
 *     tags:
 *       - Admin
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
 * /delete/plat/{id}:
 *   delete:
 *     summary: Supprimer un plat 
 *     description: Permet à un administrateur de supprimer un plat existant en fonction de son ID.
 *     tags:
 *       - Admin
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
routerUser.post('/listePlatUser/:id', UserController.getPlatUser);
module.exports = routerUser;