import express from 'express'
import { create, deleteCompany, getAll, updateCompany } from '../controllers/companyController.js';


const companyRouter = express.Router();

companyRouter.post('/create', create);
companyRouter.get('/getall',getAll);
companyRouter.put('/put/:id', updateCompany);
companyRouter.delete('/delete/:id', deleteCompany)

export default companyRouter;