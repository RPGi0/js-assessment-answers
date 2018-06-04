exports = typeof window === 'undefined' ? global : window;

if (typeof window === 'undefined') {
  _ = require('lodash');
}

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    return _.indexOf(arr, item);
  },

  sum: function (arr) {
    return _.sum(arr);
  },

  remove: function (arr, item) {
    return _.pull(arr, item);
  },

  removeWithoutCopy: function (arr, item) {
    return _.pull(arr, item);
  },

  append: function (arr, item) {
    return _.concat(arr, item);
  },

  truncate: function (arr) {
    return _.slice(arr, 0, arr.length - 1);
  },

  prepend: function (arr, item) {
    return _.concat(item, arr);
  },

  curtail: function (arr) {
    return _.slice(arr, 1, arr.length);
  },

  concat: function (arr1, arr2) {
    return _.concat(arr1, arr2);
  },

  insert: function (arr, item, index) {
    return _.concat(
      _.slice(arr, 0, index),
      item,
      _.slice(arr, index, arr.length + 1)
    );
  },

  count: function (arr, item) {
    var increment = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) increment++;
    }
    return increment;
  },

  duplicates: function (arr) {
    var dup = {};
    for (var i = 0; i < arr.length; i++) {
      if (dup[arr[i]]) dup[arr[i]]++;
      else dup[arr[i]] = 1;
    }

    var result = _.keys(_.pickBy(dup, function (val) {
      return val > 1;
    }));

    return result.map(function (pos) {
      return +pos;
    });
  },

  square: function (arr) {
    return arr.map(function (pos) {
      return pos * pos;
    })
  },

  findAllOccurrences: function (arr, target) {
    return arr.map(function(v, k){
      return v === target ? k : '';
    }).filter(String);
  }
};
