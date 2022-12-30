import express from 'express';

import { createAbs,getAllAbs,getAbsById , updateAbs,getUserAbs} from '../controllers/absence.js';
const router = express.Router();

router
  .route('/createAbs')
  .post(createAbs);
  router
  .route('/AllAbs')
  .post(getAllAbs);
  router
  .route('/AbsById')
  .post(getAbsById);
  router
  .route('/getUserAbs')
  .post(getUserAbs);
  router 
  .route('/updateAbs')
  .post(updateAbs)

  export default router;