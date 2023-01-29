const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const router = require('./routes');

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(router);

app.listen(PORT, () => {
  console.log(`🔥 Sever is running on port ${PORT}`);
});
