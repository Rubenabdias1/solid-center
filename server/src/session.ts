import { SESSION_NAME, SESSION_SECRET } from './constants';
import * as session from 'express-session';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import { PrismaClient } from '@prisma/client';

export default function createSession(db: PrismaClient) {
  const sessionOptions: session.SessionOptions = {
    name: SESSION_NAME,
    secret: SESSION_SECRET || '',
    store: new PrismaSessionStore(db, {
      checkPeriod: 2 * 60 * 1000, //ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365, // 5 mins
      httpOnly: false,
      secure: false,
      sameSite: 'none',
    },
    saveUninitialized: true,
    resave: false,
  };

  return session(sessionOptions);
}
