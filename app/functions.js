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
    let sum = 0;
    for (let i=0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  },

  callIt: function(fn) { // call
    let args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    let args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function () {
      let moreArgs = args.concat(args.slice.call(arguments));
      return fn.apply(null, moreArgs)
    };
  },

  curryIt: function(fn) {
    function applyArgs(_fn, args) {
      return _fn.apply(null, args);
    }

    function getArgsCollector(collectedArgs, expectedArgsCount) {
      return function (currentArg) {
        collectedArgs.push(currentArg);

        let allArgsProvided = collectedArgs.length === expectedArgsCount;

        if (allArgsProvided) {return applyArgs(fn, collectedArgs);}

        return getArgsCollector(collectedArgs, expectedArgsCount);
      };
    }
    return getArgsCollector([], fn.length);
  },

};


