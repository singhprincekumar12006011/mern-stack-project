import express from 'express';
import { getUserDetail, createUserDetails, updateUserDetails} from '../controllers/userDetailController.js';

const router = express.Router();

router.get('/', getUserDetail);
router.put('/', updateUserDetails);
router.post('/', createUserDetails);

export default router;