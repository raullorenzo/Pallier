# jsbn: javascript big number

[Tom Wu's Original Website](http://www-cs-students.stanford.edu/~tjw/jsbn/)

This is the BigInteger class from Tom Wu's jsbn library. I haven't tested every other big integer library out there, but the few that I have tested in comparison to this one have not even come close in performance. I have adapted it to be an angular module, published to bower.

## install with bower

    $ bower install angular-jsbn-big-integer

## usage
First, add it to your app dependencies:

    angular.module('yourApp', ['jsbn.BigInteger']);

Now you may inject it and use it as a constructor (with the `new` operator) anywhere in your app code:

    angular.controller('MyConroller', function($scope, BigInteger) {
        $scope.myInt = new BigInteger('123412341234123412341234123412341234');
    });

Note: you must pass a string of numbers if you want it to be interpreted as a base-10 integer.

## API

### bi.toString()

returns the base-10 number as a string

### bi.negate()

returns a new BigInteger equal to the negation of `bi`

### bi.abs

returns new BI of absolute value

### bi.compareTo



### bi.bitLength



### bi.mod



### bi.modPowInt



### bi.clone



### bi.intValue



### bi.byteValue



### bi.shortValue



### bi.signum



### bi.toByteArray



### bi.equals



### bi.min



### bi.max



### bi.and



### bi.or



### bi.xor



### bi.andNot



### bi.not



### bi.shiftLeft



### bi.shiftRight



### bi.getLowestSetBit



### bi.bitCount



### bi.testBit



### bi.setBit



### bi.clearBit



### bi.flipBit



### bi.add



### bi.subtract



### bi.multiply



### bi.divide



### bi.remainder



### bi.divideAndRemainder



### bi.modPow



### bi.modInverse



### bi.pow



### bi.gcd



### bi.isProbablePrime


