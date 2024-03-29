require('dotenv').config();
import express from 'express';
import cookieParser from 'cookie-parser';
import path from "path";
import cors from 'cors';
import { connectToDatabase, disconnectFromDatabase } from './utils/database';
import logger from './utils/logger';
import { CORS_ORIGIN } from './constants';
import helmet from 'helmet';
import userRoute from './modules/user/user.route';
import authRoute from './modules/auth/auth.route';
import symptomRoute from './modules/symptoms/symptom.route';
import partyRoute from './modules/party/party.route';
import deserializeUser from './middleware/deserializeUser';

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: CORS_ORIGIN, credentials: true }));
app.use(helmet());
app.use(deserializeUser);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/symptom', symptomRoute);
app.use('/api/party', partyRoute);


const server = app.listen(PORT, async () => {
  await connectToDatabase();
  logger.info(`Server listening at htp://localhost:${PORT}`);
});

const signals = ['SIGTERM', 'SIGINT'];

function gracefulShutdown(signal: string) {
  process.on(signal, async () => {
    logger.info('Goodbye, got signal', signal);
    server.close();

    // disconnect from the db
    await disconnectFromDatabase();

    logger.info('My work here is done');

    process.exit(0);
  });
}

for (let i = 0; i < signals.length; i++) {
  gracefulShutdown(signals[i]);
}
