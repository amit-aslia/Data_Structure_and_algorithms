const name = {
  firstname: "puneet",
  lastname: "aslia",
};

const printFullName = function (hometown, state) {
  console.log(this.firstname, " ", this.lastname, " ", hometown, state);
};

// printFullName.call(name, 'kherka gujjar', 'jhajjar');

// call method: used in function borrowing
const object2 = {
  firstname: "amit",
  lastname: "aslia",
};

// printFullName.call(object2, 'bahadurgarh', 'jhajjar');

// the only difference between call and bind is -> that 2nd argument is comma seperated in call where in bind 2nd and later argument send in array

// printFullName.apply(object2, ['jhajjar', 'haryana']);

// the difference between call and bind is, bind method provide you exact replica of function which can be invoked later.

// const printName = printFullName.bind(name, 'kherka gujjar', 'Haryana');
// printName();

/*
    If we want to create pollyfill for bind -> 
    steps:
        - instead of bind, we need our bind as myBind -> can be achieve by Function.prototype.myBind = function () { }
        - It will return a function which execute function and mapp this values
        - function we can acheive from this since -> myBind function this will be executable function only
        - we can send args as parameters, first parameter will be for this object
        - we can send others parameter to executable functions also.
        - we will use apply, so that it can take array format
*/

Function.prototype.myBind = function (...args) {
  console.log(this);
  const fn = this;
  const rest = args.slice(1);
  return function (...args2) {
    fn.apply(args[0], [...rest, ...args2]);
  };
};

const execute = printFullName.myBind(name, "jhajjar");
execute("Haryana");
