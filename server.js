
import express from 'express';
import mongoose from 'mongoose';

import userRoutes from './routes/use.js';

import ClasseRoutes from './routes/classe.js';

import AbsenceRoutes from './routes/absence.js';

import NotesRoutes from './routes/notes.js';
const app = express();

const port = process.env.PORT || 5000;
const databaseName = 'espritt';

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose
  .connect(`mongodb://localhost:27017/${databaseName}`)
  .then(() => {
    console.log(`Connected to ${databaseName}`);
  })
  .catch(err => {
    console.log(err);
  });

app.use(express.json());

app.use('/user', userRoutes);

app.use('/notes', NotesRoutes);

app.use('/classe', ClasseRoutes);

app.use('/absence', AbsenceRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});