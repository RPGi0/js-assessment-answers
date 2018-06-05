exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function (value) {
    return new Promise(function(resolve, reject) {
      var varType = typeof value;

      // do some work, and then...
      if (varType === 'boolean' || varType === 'string') resolve(value);
      else reject('Value must be a string or boolean!');
    });
  },

  manipulateRemoteData: function (url) {
    return new Promise(function(resolve) {
      var xhr =  new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) {
          return;
        }

        if (xhr.status === 200) {
          var responseJSON = JSON.parse(xhr.responseText);

          var arr = _.map(responseJSON.people, function (obj) {
            return obj.name;
          });

          resolve(arr.sort());
        }
      };
      xhr.open('GET', url, true);
      xhr.send();
    });
  }
};
