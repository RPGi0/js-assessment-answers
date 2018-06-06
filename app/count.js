exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  // count: function (start, end) { // this should technically work... not sure why it doesn't
  //   var increment = start;
  //
  //   function cancel() {
  //     clearInterval(intervalID);
  //   }
  //
  //   var intervalID = setInterval(function() {
  //     console.log(increment);
  //     if (increment < end) increment++;
  //     else cancel();
  //   }, 100);
  //
  //   return {cancel};
  // }

  count: function (start, end) {
    var timerID;

    function cancel() {
      clearTimeout(timerID);
    }

    function increment () {
      if (start <= end) {
        console.log(start++);
        timerID = setTimeout(increment, 100);
      }
      else cancel();
    }

    increment();

    return {cancel};
  }
};
