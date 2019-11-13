(function () {
  'use strict';

  var Person = /** @class */ (function () {
      function Person(name, job) {
          this.name = name;
          this.job = job;
      }
      Person.prototype.greeting = function () {
          return "Hello! I'm " + this.name + ", " + this.job + ".";
      };
      return Person;
  }());

  var person = new Person('kishibashi', 'engineer');
  console.log(person.greeting());

}());
//# sourceMappingURL=bundle.js.map
