exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) { // apply
    return fn.apply(null, arr);

  },

  speak: function(fn, obj) { // bind
    return fn.call(obj);
  },

  functionFunction: function(str) { // currying
    return function (str2) {
      return str+', '+str2;
    }
  },

  makeClosures: function(arr, fn) { // iife
   var ret = [];

   var makeFn = function (val) {
     return function () {return fn(val); };
   };

   for (var i=0; i < arr.length; i++) {
     ret.push(makeFn(arr[i]));
   }

   return ret;
  },

  partial: function(fn, str1, str2) {
    return function (str3) {
      return fn(str1, str2, str3);
    }
  },

  useArguments: function() { // arguments

  },

  callIt: function(fn) { // call

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
