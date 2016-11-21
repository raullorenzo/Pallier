var express = require('express');
var bignum = require('bignum');
var xml = require('xml');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var rsa = require('../rsa/rsa-bignum');
var crypto = require('crypto');
var sockjs = require('sockjs');

var router = express.Router();
var keys_paillier = paillier.generateKeys(1024);

/* GET users listing. */
router.get('/', function (req, res, next) {

  /*  var num1, num2;

    num1 = 30;
    num2 = 10;

    var c1 = keys.publicKey.encrypt(num1);
    var c2 = keys.publicKey.encrypt(num2);

    console.log("############ Suma Homomórfica ###########");
    console.log('num1:', num1.toString());
    console.log('c1:', c1.c.toString(), '\n');

    console.log('num2:', num2.toString());
    console.log('c2:', c2.c.toString(), '\n');


    var sumaEncriptada = c1.c.mul(c2.c).mod(keys.publicKey.n.pow(2));
    console.log("c1*c2:", sumaEncriptada.toString());

    var sum = keys.privateKey.decrypt(sumaEncriptada);
    console.log("Desencriptado de c1*c2:", sum.toString());
    console.log("num1+num2= ", num1 + num2, "\n\n");

    tot = num1 + num2;

    console.log("############ Multiplicación Homomórfica ###########");

    var mulEncriptada = c1.c.powm(num2, keys.publicKey.n.pow(2));
    console.log("c1^num2; " + mulEncriptada.toString());

    var mul = keys.privateKey.decrypt(mulEncriptada);
    console.log("Desencriptado de c1^num2: " + mul);

    console.log("num1*num2: " + num1 * num2);



    res.send(tot.toString());*/
});

router.post('/', function (req, res, next) {
var c1 = keys_paillier.publicKey.encrypt(req.body.num1);
var c2 = keys_paillier.publicKey.encrypt(req.body.num2);
var numsc = {
  num1: c1.c.toString(),
  num2: c2.c.toString()

}

console.log(numsc);

res.send(JSON.stringify(numsc));


});

router.post('/suma', function (req, res, next) {

console.log(req.body);
var c1 = bignum(req.body.num1);
var c2 = bignum(req.body.num2);
var sum = c1.mul(c2).mod(keys_paillier.publicKey.n.pow(2));
var sumaEncriptada = {
  suma: sum.toString()

}

res.send(JSON.stringify(sumaEncriptada));


});


router.post('/des_suma', function (req, res, next) {


var addEncriptada = bignum(req.body.suma);
var sum = keys_paillier.privateKey.decrypt(addEncriptada);
res.send(JSON.stringify(sum.toString()));


});


router.post('/mul', function (req, res, next) {

console.log(req.body);
var c1 = bignum(req.body.num1);
var c2 = bignum(req.body.num2);
var num2 = req.body.num2_init;
var mul = c1.powm(num2, keys_paillier.publicKey.n.pow(2));
var mulEncriptada = {
  mul: mul.toString()

}

res.send(JSON.stringify(mulEncriptada));


});


router.post('/des_mul', function (req, res, next) {

var mulEncriptada = bignum(req.body.mul);
var mul = keys_paillier.privateKey.decrypt(mulEncriptada);

res.send(JSON.stringify(mul.toString()));


});


router.get('/key', function (req, res, next) {


var publickey = {
    bits: keys_paillier.publicKey.bits,
    n: keys_paillier.publicKey.n.toString(),
    g: keys_paillier.publicKey.g.toString()
};

res.send(JSON.stringify(publickey));


});

module.exports = router;
