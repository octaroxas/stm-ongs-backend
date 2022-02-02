const express = require('express');
const routes = require('./routes');
const database = require('./database');
const cors = require('cors');
database.sync();

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => console.log('🔥 Server started at http://localhost:8080'));