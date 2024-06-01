
const express = require('express');
const bodyParser = require('body-parser');
const admin = require('./router/admin');
const shop = require('./router/shop');  
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended:false }));

app.use('/admin',admin);

app.use(shop)

app.use((req, res) => {

res.status(404).sendFile(path.join(__dirname, 'views','404.html'  ));

})

app.listen(3001)