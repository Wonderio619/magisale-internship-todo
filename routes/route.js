import express from 'express';

//import controller file
import * as todoController from '../controllers/controller';

// get an instance of express router
const router = express.Router();

router.route('/')
     .get(todoController.getTodos)

export default router;