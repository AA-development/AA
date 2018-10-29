var express = require('express');
var router = express.Router();
const data = require('../productJson.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/home', { title: 'Express' , data:data});
});

router.get('/pid/:id', function(req, res, next) {

  var p_detail;

  for(i=0; i<data.products.length; i++){
    if(data.products[i].pid == req.params.id){
      p_detail= data.products[i];
    }
  }
console.log(p_detail);
  res.render('pages/p_details', { title: 'Express' , product:p_detail, data:data.products});
});


router.get('/about', function(req, res, next) {

  res.render('pages/about', { title: 'Express' , data:data});
});

router.get('/contact-us', function(req, res, next) {

  res.render('pages/contactus', { title: 'Express' , data:data});
});
module.exports = router;
