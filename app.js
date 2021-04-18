const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const usersRoute = require('./routes/users.route');
const cors = require('cors');

const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/bank', usersRoute);

app.listen(port, () => console.log(`application start at ${port}`))
