require('dotenv').config();
require('./src/config/db').connect();

const express = require('express');

const cors = require('cors')

const CounterRouter = require('./src/routes/CounterRoutes');

const app = express();

app.use(cors({origin: true}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', CounterRouter);

const PORT = process.env.NODE_PORT;

app.listen(PORT, () => {
  console.log(`App running on Port: ${PORT}`);
});
