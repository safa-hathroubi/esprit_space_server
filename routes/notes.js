
import express from 'express';

import { createNote,getAllNotes,getNotesById , updateNotes,getUserNotes} from '../controllers/notes.js';
const router = express.Router();

router
  .route('/createNotes')
  .post(createNote);
  router
  .route('/AllNotes')
  .post(getAllNotes);
  router
  .route('/NotesById')
  .post(getNotesById);
  router
  .route('/getUserNotes')
  .post(getUserNotes);
  router 
  .route('/UpdateNotes')
  .post(updateNotes)

  export default router;
