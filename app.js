const express = require('express');
const app = express();
const swaggerJsdoc = require("swagger-jsdoc"),
swaggerUi = require("swagger-ui-express");
const multer = require('multer');
const helmet = require('helmet');
const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

const port = process.env.PORT || 3000;

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Mounassab housing API",
      version: "0.1.0",
      description:
        "This is the api for  estate app for mounassan",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Roger Betrand A",
        url: "https://github.com/rogerBret",
        email: "rogerbertrand360@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);




app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


/*
app.get('', (req, res) => {
  res.json({ message: 'Bienvenue sur notre application !' });
});*/

const categoryRoutes = require('./routes/categoryRoutes');
app.use('/categories', categoryRoutes);

const actionRoutes = require('./routes/actionRoutes');
app.use('/actions', actionRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

const tagRoutes = require('./routes/tagRoutes');
app.use('/tags', tagRoutes);

const estateRoutes = require('./routes/estateRoutes');
app.use('/estates', estateRoutes);

const cityRoutes = require('./routes/cityRoutes');
app.use('/cities', cityRoutes);

const sponsorRoutes = require('./routes/sponsorRoutes');
app.use('/sponsors', sponsorRoutes);

const neighborhoodRoutes = require('./routes/neighborhoodRoutes');
app.use('/neighborhoods', neighborhoodRoutes);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(port, () => {
  console.log(`Le serveur tourne sur le port ${port}`);
});
