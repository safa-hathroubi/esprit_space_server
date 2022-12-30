import express from 'express';

import { createClasse,getAllClasses,getClassesById , updateClasses,getUserClasses} from '../controllers/classe.js';
const router = express.Router();

router
  .route('/createClasse')
  .post(createClasse);
  router
  .route('/AllClasses')
  .post(getAllClasses);
  router
  .route('/ClassesById')
  .post(getClassesById);
  router
  .route('/getUserClasses')
  .post(getUserClasses);
  router 
  .route('/updateClasses')
  .post(updateClasses)

  export default router;