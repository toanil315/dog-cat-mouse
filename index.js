var Dog = require('./Dog');
var Cat = require('./Cat');

var dog = new Dog('tom');
dog.sayHi();
var tom = new Cat('gau', 'brown');
dog.eat(tom);
