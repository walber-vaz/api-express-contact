import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import router from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(router);
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
    console.error({ error: error.message });
    return res.sendStatus(500);
});

app.listen(PORT, () => {
    console.log(`🔥 Sever is running on port ${PORT}`);
});
