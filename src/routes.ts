import { Router } from "express";
import * as controller from './controller'

const router = Router();

router.get('/users',controller.getUserData)

export default router;
