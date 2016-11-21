var bignum = require('bignum');


function lcm(a, b) {
    return a.mul(b).div(a.gcd(b));
}

function L(a, n) {
    return (a.sub(1)).div(n);
}

paillier = {
    publicKey: function (bits, n, g) {
        this.bits = bits;
        this.n = n;
        this.g = g;

    },
    privateKey: function (lambda, mu, p, q, publicKey) {
        this.lambda = lambda;
        this.mu = mu;
        this.p = p;
        this.q = q;
        this.publicKey = publicKey;
    },
    generateKeys: function (bitlength) {
        var p, q, n, phi, lambda, alpha, beta, g, r, mu, e, d, keys = {};
        // if p and q are bitlength/2 long, n is then bitlength long
        this.bitlength = bitlength || 2048;
        console.log("Generating RSA keys Paillier of", this.bitlength, "bits");
        p = bignum.prime(this.bitlength / 2);

        do {
            q = bignum.prime(this.bitlength / 2);
        } while (q.cmp(p) === 0);
        n = p.mul(q);


        phi = p.sub(1).mul(q.sub(1));

        lambda = lcm(p.sub(1), q.sub(1));



        alpha = bignum.rand(n);
        beta = bignum.rand(n);



        g = alpha.mul(n).add(1).mul(beta.powm(n, n.pow(2))).mod(n.pow(2));



        mu = L(g.powm(lambda, n.pow(2)), n).invertm(n);



        e = bignum(65537);
        d = e.invertm(phi);

        keys.publicKey = new paillier.publicKey(this.bitlength, n, g);
        keys.privateKey = new paillier.privateKey(lambda, mu, p, q, keys.publicKey);


        return keys;
    }
};


paillier.publicKey.prototype = {
    encrypt: function (m) {

        var r = bignum.rand(this.n);
        var c = (this.g.powm(m, this.n.pow(2)).mul(r.powm(this.n, this.n.pow(2))).mod(this.n.pow(2)));
        return {
            c: c,
            r: r
        };
    }
};

paillier.privateKey.prototype = {
    decrypt: function (c) {

        return L(c.powm(this.lambda, this.publicKey.n.pow(2)), this.publicKey.n).mul(this.mu).mod(this.publicKey.n);


    }
};

module.exports = paillier;
