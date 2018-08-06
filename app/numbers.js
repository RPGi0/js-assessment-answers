exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function (num, bit) {
    const numToBinaryStr = parseInt(num, 10).toString(2);
    return +numToBinaryStr.substr(-1 * bit, 1);
  },

  base10: function (str) {
    return +parseInt(str, 2).toString(10);
  },

  convertToBinary: function (num) {
    const numToBinaryStr = parseInt(num, 10).toString(2);
    return ("00000000" + numToBinaryStr).substr(-8);
  },

  multiply: function (a, b) {
    function adjust(num) {
      let exponent, multiplier;

      if (num < 1) {
        exponent = Math.floor(Math.log(num) * -1);
        multiplier = Math.pow(10, exponent);

        return {adjusted: num * multiplier, multiplier: multiplier};
      }

      return {adjusted: num, multiplier: 1};
    }

    a = adjust(a);
    b = adjust(b);

    return (a.adjusted * b.adjusted) / (a.multiplier * b.multiplier);
  }
};
