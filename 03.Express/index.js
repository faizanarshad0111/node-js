
const express = require('express');
const bodyParser = require('body-parser');
const admin = require('./router/admin');
const shop = require('./router/shop');  

const app = express();
app.use(bodyParser.urlencoded({ extended:false }));

app.use(admin);

app.use(shop)


app.listen(3001)