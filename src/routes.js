import express from 'express';
import {handleHealth} from "./handlers/healthHandler.js";

export const router = express.Router();

router.get('/health', handleHealth);