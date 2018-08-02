exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    let greeter = {
      name: str2,
      greeting: str1
    }

    function sayIt() {
      return greeter.greeting + greeter.name;
    }
    return sayIt();
};
