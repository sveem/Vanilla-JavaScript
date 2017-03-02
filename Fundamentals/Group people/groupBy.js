/*
 * Write a JavaScript function groupBy('criteria') that groups an array of people by age, first or last name. Create a
 * Person constructor to add every person in the person array. The groupBy('criteria') function must return an object,
 * with keys – the groups (age, firstName and lastName) and values – arrays with people in this group. Print on the
 * console every entry of the returned object. Use function overloading (i.e. just one function).
 * You may need to find how to use constructors.
*/

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.toString = () => {
      return this.firstName + ' ' + this.lastName + ' ' + 'age(' + this.age + ')';
    };
  }
}

let people = [
  new Person('Scott', 'Guthrie', 38),
  new Person('Scott', 'Johns', 36),
  new Person('Scott', 'Hanselman', 39),
  new Person('Jesse', 'Liberty', 57),
  new Person('Jon', 'Skeet', 38)
];

const groupBy = (criteria) => {
  let result = [];
  for (let key in people) {
    if (!result.hasOwnProperty('Group ' + people[key][criteria])) {
      result['Group ' + people[key][criteria]] = [];
    }
    result['Group ' + people[key][criteria]].push(people[key].toString());
  }  
  for (let key in result) {
    console.log(key + ' : [' + result[key].join(', ') + ']');
  }
};

groupBy('firstName');
groupBy('lastName');