var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', function(req, res, next) {
  res.send('API: You GET me!');
});

router.post('/', function(req, res, next) {
  res.send('API: You POST me!');
});

// jsonParser parses received JSON into req.body.
router.post('/key', jsonParser, function(req, res, next) {
  res.json({
    msg : "Is that a key in JSON!? :-)",
    rcvdJson : req.body
  });
});

// urlencodedParser parses received FORM data into req.body.
router.post('/form', urlencodedParser, function(req, res, next) {
  res.json({
    msg : "Is that a form!? :-)",
    rcvdForm : req.body
  });
});

// Don't need to use jsonParser if we're not expecting anything in the body
router.get('/key', function(req, res, next) {
  res.json({
    key : {
      id : "12356",
      value : "1234145efd43651"
    },
    rcvdParams : req.query
  });
});

module.exports = router;
