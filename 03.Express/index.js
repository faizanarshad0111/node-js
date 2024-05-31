
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended:false }));

app.use('/user',(req,res)=>{
    res.send('this is dummy ');
});

app.use('/add-product',(req,res)=>{
    res.send('<form method="POST" action="/products"><input type="text" name="title"><button type="submit">Submit</button></form>');
});

app.use('/products',(req,res)=>{

console.log(req.body);
res.redirect('/');

})
app.use('/',(req,res,)=>{
  res.send('hello world');
});


app.listen(3001)