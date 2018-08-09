exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function (fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function (constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function (obj) {
    const arr = [];

    for (k in obj) {
      if (obj.hasOwnProperty(k))
        arr.push(k + ': ' + obj[k]);
    }

    return arr;
  }
};
