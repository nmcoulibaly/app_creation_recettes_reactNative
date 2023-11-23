const UserController = require('../controllers/UserController');
const express = require('express')
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

module.exports = routerUser;