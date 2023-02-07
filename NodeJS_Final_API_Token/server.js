require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const user_route = require('./routes/user.route');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

user_route(app);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is listening on http://%s:%s`, process.env.SERVER_HOST, process.env.SERVER_PORT);
});