const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');
const app = express();
const port = 9000;
const connect = require('./database/Connection');
const swaggerUi = require('swagger-ui-express');
const swaggerConf = require('./swaggerConfig');

// Middleware
app.use(bodyParse.json());
app.use(cors());
app.use(express.json());

const routesPlat = require('./routes/PlatRoutes');
const routesRecette = require('./routes/RecetteRoutes');
const routesUser = require('./routes/UserRoutes');

connect()

app.use('/plats', routesPlat);
app.use('/recettes', routesRecette);
app.use('/user', routesUser);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConf));

app.listen(port, () => {
    console.log(`Serveur à l'écoute sur le port ${port}`);
});
