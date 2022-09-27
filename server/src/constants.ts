import * as dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3000;

export const SESSION_NAME = process.env.SESSION_NAME || 'qid';
export const SESSION_SECRET = process.env.SESSION_SECRET || 'keyboard cat';

export const STRIPE_SECRET = process.env.STRIPE_SECRET || '';
