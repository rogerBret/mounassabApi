const express = require('express');
const app = express();
const multer = require('multer');
const helmet = require('helmet');
const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('', (req, res) => {
  res.json({ message: 'Bienvenue sur notre application !' });
});

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
