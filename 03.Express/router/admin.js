const express = require('express');


const router = express.Router();

router.get('/add-product',(req,res)=>{
    res.send('<form method="POST" action="/products"><input type="text" name="title"><button type="submit">Submit</button></form>');
});

router.post('/products',(req,res)=>{

console.log(req.body);
res.redirect('/');

})


module.exports = router