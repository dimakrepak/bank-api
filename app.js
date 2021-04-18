const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
const usersRoute = require('./routes/users.route');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/bank', usersRoute);

app.listen(PORT, () => console.log(`application start at ${PORT}`))
