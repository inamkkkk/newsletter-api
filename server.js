const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const newsletterRoutes = require('./routes/newsletterRoutes');
const userRoutes = require('./routes/userRoutes');
const authMiddleware = require('./middlewares/authMiddleware');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/newsletterDB';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/api/users', userRoutes);
app.use('/api/newsletter', authMiddleware, newsletterRoutes);

app.get('/', (req, res) => {
  res.send('Newsletter API is running');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});