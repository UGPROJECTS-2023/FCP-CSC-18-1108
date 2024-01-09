import express from 'express';

import { processRequestBody } from 'zod-express-middleware';
import requireUser from '../../middleware/requireUser';

import { VerifyUserHandler, getCurrentUserHandler, getUnverifiedUserHandler, getVerifiedUserHandler, registerUserHandler, unVerifyUserHandler } from './user.controller';
import { registerUserSchema } from './user.schema';

const router = express.Router();

router.get('/', requireUser, (req, res) => {
  return res.send(res.locals.user);
});
router.get('/unverified-doctors', getUnverifiedUserHandler );
router.post('/', registerUserHandler);
router.post('/verify-user', VerifyUserHandler);
router.post('/deactivate-user', unVerifyUserHandler);

router.get('/verified-doctors', getVerifiedUserHandler);

router.get("/me", requireUser, getCurrentUserHandler);

export default router;
