import express from 'express';
import { createUser, getAllUsers, getUser, deleteUser, updateUser, changePassword, verifyPasswordOTP } from '../controllers/userController.js';


const router = express.Router();

router.post('/', createUser).get('/', getAllUsers);
router.get('/:id', getUser).delete('/:id', deleteUser).put('/:id', updateUser);
router.post('/change-password', changePassword);
router.post('/otp-verify', verifyPasswordOTP);

export default router;