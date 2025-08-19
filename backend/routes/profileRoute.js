import express from 'express';
import {saveProfile, getProfile} from '../controllers/profileController.js'
import { checkAuth} from '../config/auth.js';

const  router = express.Router();

router.post('/save', checkAuth, saveProfile);
router.get('/get', checkAuth, getProfile);


export default router; 